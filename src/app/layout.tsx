import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import 'keen-slider/keen-slider.min.css';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'jp-sena.dev - João Pedro Sena',
  icons: '/icon.ico',
  description: 'Olá, meu nome é João Pedro Sena! Desenvolvedor FrontEnd com mais de 2 anos de experiência, especializado em JavaScript, HTML e CSS. Estou aqui para criar interfaces incríveis e funcionais, transformando conceitos em realidade digital.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`scroll-smooth min-h-screen bg-background font-sans antialiased ${fontSans}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />
        </ThemeProvider>
      </body>
    </html>
  );
}
