import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Metadata } from 'next';
import { Montserrat as FontSans } from 'next/font/google';
import '../globals.scss';
import { cn } from '@/lib/utils';
import Header from '@/components/layouts/header';
import { i18n, Locale } from '@/config/i18n-config';
import { getDictionary } from '@/dictionaries';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = i18n.locales.includes(lang as Locale)
    ? (lang as Locale)
    : i18n.defaultLocale;
  const dict = await getDictionary(validLang);
  return {
    title: {
      template: `%s | ${dict.home.title}`,
      default: dict.home.title,
    },
    description: {
      template: `%s | ${dict.home.description}`,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const validLang = i18n.locales.includes(lang as Locale)
    ? (lang as Locale)
    : i18n.defaultLocale;
  const dict = await getDictionary(validLang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header dict={dict.navigation} lang={validLang} />
        {children}
      </body>
    </html>
  );
}
