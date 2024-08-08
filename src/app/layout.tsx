import '@/styles/globals.scss';
import { TRPCReactProvider } from '@/trpc/react';
import { type Metadata } from 'next';
import { Poppins } from 'next/font/google';

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

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={`${poppins.className}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
