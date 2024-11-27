"use client";
import { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { SideBar, Footer, SplashScreen } from '@/components/ui';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    if (sidebarRef.current) setWidth(sidebarRef.current.clientWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      updateWidth();
    }, 3000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <>
      {isVisible && <SplashScreen />}
      <div className={`${isVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className={`grid grid-cols-5 gap-0`}>
          <SideBar width={width}></SideBar>
          <div ref={sidebarRef} className="col-span-5 md:portrait:col-span-5 md:col-span-4 gap-0">
            <div className={`w-full ${isVisible ? "hidden" : "block"}`}>
              {children}
              <Footer />
            </div>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default PublicLayout;
