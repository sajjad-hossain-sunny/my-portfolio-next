"use client";
import { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { Footer, SideBar } from '../components';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const updateWidth = () => { if (divRef.current) setWidth(divRef.current.clientWidth) };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-0">
        <SideBar width={width} ></SideBar>
        <div ref={divRef} className="col-span-5 md:portrait:col-span-5 md:col-span-4">
          {children}
          <Footer />
        </div>
      </div>
      <ThemeSwitcher ></ThemeSwitcher>
    </>
  );
};

export default PublicLayout;
