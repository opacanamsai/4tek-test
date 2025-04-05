import { DictionaryData } from '@/types/data';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '../ui/input';
import { ArrowRight } from 'lucide-react';

export default function Footer({ dict }: DictionaryData) {
  return (
    <footer className='bg-[url(/images/footer-bg.png)] bg-[center_top] bg-no-repeat bg-cover'>
      <>
        <div className='container mx-auto flex justify-center pt-[106px] pb-[100px] gap-10 max-lg:px-4 max-lg:flex-col max-lg:items-center max-lg:gap-[70px] max-lg:pt-10 max-lg:pb-[50px]'>
          <div className='flex-grow space-y-10 max-lg:flex max-lg:flex-col items-center'>
            <Image
              src='/icons/logo.svg'
              alt='logo'
              width={163}
              height={96}
              priority
            />
            <ul className='flex gap-6'>
              <li>
                <Link href='/' target='_blank'>
                  <Image
                    src='/icons/twitter.svg'
                    alt='twitter icon'
                    width={32}
                    height={32}
                    priority
                    className='h-8 max-lg:w-10 max-lg:h-10'
                  />
                </Link>
              </li>
              <li>
                <Link href='/' target='_blank'>
                  <Image
                    src='/icons/fb.svg'
                    alt='fb icon'
                    width={32}
                    height={32}
                    priority
                    className='h-8 max-lg:w-10 max-lg:h-10'
                  />
                </Link>
              </li>
              <li>
                <Link href='/' target='_blank'>
                  <Image
                    src='/icons/linkedin.svg'
                    alt='linkedin icon'
                    width={32}
                    height={32}
                    priority
                    className='h-8 max-lg:w-10 max-lg:h-10'
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex-grow space-y-10 max-w-[410px] max-lg:w-full max-lg:space-y-5'>
            <h3 className='font-bold text-2xl leading-[30px]'>
              {dict.address}
            </h3>
            <ul className='space-y-10 max-lg:space-y-5'>
              <li className='flex gap-[13px] max-lg:gap-2'>
                <div className='w-10 h-10 flex items-center justify-center'>
                  <Image
                    src='/icons/location.svg'
                    alt='location icon'
                    width={30}
                    height={34}
                    priority
                    className='h-[34px] max-lg:w-10 max-lg:h-10'
                  />
                </div>
                <div className='flex flex-col gap-3 font-normal text-sm leading-[140%]'>
                  <p>{dict.us}</p>
                  <p>{dict.vn}</p>
                </div>
              </li>
              <li className='flex gap-[13px] items-center max-lg:gap-2'>
                <div className='w-10 h-10 flex items-center justify-center'>
                  <Image
                    src='/icons/phone.svg'
                    alt='phone icon'
                    width={30}
                    height={34}
                    priority
                    className='h-[34px] max-lg:w-10 max-lg:h-10'
                  />
                </div>
                <p className='flex gap-2 font-normal text-sm leading-[140%]'>
                  <span>{dict.phone_1}</span>
                  <span>{dict.or}</span>
                  <span>{dict.phone_2}</span>
                </p>
              </li>
            </ul>
          </div>
          <div className='flex-grow space-y-10 max-w-[410px] max-lg:w-full max-lg:space-y-4'>
            <h3 className='font-bold text-2xl leading-[30px] max-lg:mb-1'>
              {dict.sub}
            </h3>
            <div className='space-y-3'>
              <p className='flex gap-2 font-normal text-sm leading-[140%]'>
                {dict.sub_desc}
              </p>
              <div className='relative'>
                <Input
                  type='email'
                  placeholder={dict.email_placeholder}
                  className='bg-transparent placeholder:text-white h-14 focus-visible:!ring-offset-0 focus-visible:!ring-0 !rounded-[8px] pr-10'
                />
                <ArrowRight className='w-6 h-6 absolute top-4 right-4' />
              </div>
            </div>
          </div>
        </div>
      </>
      <div className='h-20 bg-black flex items-center justify-center'>
        <p className='font-normal text-lg leading-[126%]'>{dict.copyright}</p>
      </div>
    </footer>
  );
}
