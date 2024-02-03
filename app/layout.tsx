import Navbar from '@/components/navbar/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/lib/StoreProvider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Food Crave',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          <div className='pt-16'>{children}</div>
        </StoreProvider>
        <Toaster position='top-right' closeButton richColors />
      </body>
    </html>
  );
}
