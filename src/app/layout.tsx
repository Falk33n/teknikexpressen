import { Footer, GoToTopButton, NavBar, ThemeToggleButton } from '@/components';
import { cn } from '@/helpers';
import { ThemeProvider } from '@/providers';
import '@/styles/globals.scss';
import { TRPCReactProvider } from '@/trpc/react';
import { type Metadata } from 'next';
import { Poppins } from 'next/font/google';
import type { ReactNode } from 'react';

const poppins = Poppins({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});
export const metadata: Metadata = {
  title: 'Sveriges billigaste teknik e-handel - Teknikexpressen.se',
  description: 'Sveriges billigaste teknik e-handel',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='se'
      className={cn('h-screen scroll-smooth', poppins.className)}
      suppressHydrationWarning
    >
      <body className={cn('relative h-screen overflow-x-hidden')}>
        <TRPCReactProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main>{children}</main>
            <ThemeToggleButton />
            <GoToTopButton />
            <Footer />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
