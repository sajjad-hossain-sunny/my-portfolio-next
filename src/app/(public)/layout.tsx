"use client";
import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { SideBar, Footer, SplashScreen } from "@/components/ui";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(0);

  const calculateWidth = () => {
    if (sidebarRef.current) {
      setWidth(sidebarRef.current.clientWidth);
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      window.removeEventListener("resize", calculateWidth);
      clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && <SplashScreen />}
      {!isVisible && ( 
        <div>
          <div className={`grid grid-cols-5 gap-0`}>
            <SideBar width={width}></SideBar>
            <div ref={sidebarRef} className="col-span-5 md:portrait:col-span-5 md:col-span-4">
              {children}
              <Footer />
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      )}
    </>
  );
};

export default PublicLayout;
