import { i18n, Locale } from '@/config/i18n-config';
import { cn } from '@/lib/utils';
import US from '@/public/icons/united-states.svg';
import VN from '@/public/icons/vietnam.svg';
import { Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Dictionary } from '@/types/data';

export default function SwitchLanguage({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='sm'
          variant='ghost'
          className='h-8 gap-1 hover:bg-transparent max-md:mt-3 max-md:border max-md:border-[#AFAFAF] max-md:rounded-[8px] max-md:px-3 max-md:py-2 max-md:bg-[#F6F6F6] max-md:h-10 max-md:w-20'
        >
          <Image
            src={lang === 'en' ? US : VN}
            alt={lang}
            width={40}
            height={40}
            className='max-md:w-8 max-md:h-8'
          />
          <Image
            src='/icons/arrow-down.svg'
            alt={lang}
            width={24}
            height={24}
            className='hidden max-md:block'
          />
          <ChevronDown className='h-4 w-4 max-md:hidden' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='px-2'>
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={redirectedPathName(locale)}
              className='flex items-center gap-2 first:border-b first:border-[#C4C4C4] py-2 rounded-none'
            >
              <span
                className={cn({
                  invisible: lang !== locale,
                })}
              >
                <Check className='!w-6 !h-6' />
              </span>
              <Image
                src={locale === 'en' ? US : VN}
                alt={locale}
                width={40}
                height={40}
              />
              <span className='capitalize'>{dict?.[locale]}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
