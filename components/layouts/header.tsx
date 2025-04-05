'use client';

import { type Locale } from '@/config/i18n-config';
import { menuData } from '@/factory/data';
import hamburger from '@/public/icons/hamburger.svg';
import logo from '@/public/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import SwitchLanguage from './switch-language';
import { Dictionary } from '@/types/data';

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  return (
    <header className='h-fit mx-auto w-full px-20 py-5 bg-transparent fixed z-10 inset-0 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[3px] max-md:px-4 max-md:py-6'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-4 [&>h2]:hidden'>
          <Link href={`/${lang}`}>
            <Image
              src={logo}
              alt='logo'
              width={109}
              height={64}
              priority
              className='max-md:w-[68px] max-md:h-[40px]'
            />
          </Link>
        </div>
        <nav className='hidden md:flex space-x-20 max-lg:space-x-6 items-center justify-between text-white font-bold text-sm leading-[17.5px] uppercase'>
          {menuData.map((item, index) => (
            <Link key={index} href={`/${lang}`} className='nav-item text-sm'>
              {dict?.[item.label]}
            </Link>
          ))}
          <div className='flex items-center gap-2'>
            <SwitchLanguage dict={dict} lang={lang} />
          </div>
        </nav>
        <div className='md:hidden flex'>
          <Sheet>
            <SheetTitle></SheetTitle>
            <SheetTrigger asChild>
              <Image
                src={hamburger}
                alt='hamburger icon'
                width={40}
                height={40}
                priority
                className='cursor-pointer max-md:!w-[40px] max-md:!h-[40px]'
              />
            </SheetTrigger>
            <SheetContent
              side='top'
              className='p-4 h-full [&>button]:text-black [&>button>svg]:w-[60px] [&>button>svg]:h-[60px]'
            >
              <SwitchLanguage dict={dict} lang={lang} />
              <nav className='space-y-10 text-black font-bold text-sm leading-[17.5px] uppercase flex flex-col justify-center items-center mt-[84px]'>
                {menuData.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${lang}`}
                    className='text-black pb-10 border-b border-[#EEEEEE] w-full text-center last:border-0'
                  >
                    {dict?.[item.label]}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
