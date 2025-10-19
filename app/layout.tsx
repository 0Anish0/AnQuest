import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AnQuest Media - CRM, ERP & Digital Solutions Provider',
  description: 'Leading provider of CRM & ERP software, SaaS solutions, digital marketing, SEO, and comprehensive digital services. Empowering businesses with AnQuest CRM on flexible rental plans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="anquest-ui-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
