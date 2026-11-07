import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { ScrollProgress } from '@/components/scroll-progress';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { profile } from '@/content';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: `${profile.name} | Cloud & DevOps Engineer`,
  description: profile.headline,
  icons: {
    icon: '/icon.svg'
  },
  openGraph: {
    title: `${profile.name} | Cloud & DevOps Engineer`,
    description: profile.headline,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: profile.name,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | Cloud & DevOps Engineer`,
    description: profile.headline
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} bg-background font-sans text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <div className="min-h-screen bg-background">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
