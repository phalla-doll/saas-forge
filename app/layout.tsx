import type { Metadata } from 'next';
import './globals.css'; // Global styles
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'SaaSForge | Discover and Acquire Micro-SaaS',
  description: 'A clean, modern platform for developers to list their SaaS for sale or advertise it.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-[100dvh] antialiased bg-background text-foreground flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
