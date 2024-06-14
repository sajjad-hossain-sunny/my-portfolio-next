"use client";
import { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { SideBar } from '../components';

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
      <div className="grid grid-cols-5">
        <SideBar width={width} />
        <div ref={divRef} className="col-span-4 bg-slate-500">
          {children}
        </div>
      </div>
    </>
  );
};

export default PublicLayout;
