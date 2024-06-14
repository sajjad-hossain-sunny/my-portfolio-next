import type { FC, ReactNode } from 'react';
import { SideBar } from '../components';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default PublicLayout;
