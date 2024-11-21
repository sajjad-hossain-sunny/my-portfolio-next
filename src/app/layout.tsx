import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/provider/theme-provider';

export const metadata: Metadata = {
  title: 'Portfolio - Sajjad Hossain Sunny',
  description: '',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-poppins ">
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
