'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import FairyImage from '@/public/images/fairy.svg';
import FairyImageMb from '@/public/images/fairy-mb.svg';
import { DictionaryData } from '@/types/data';
import { ArrowRight } from 'lucide-react';
import { Playfair_Display as FontSans } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function HeroSection({ dict }: DictionaryData) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); //next 7 days

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero-section w-full !bg-cover pt-[104px] max-md:pt-[88px] flex flex-col items-center pb-[172px] relative max-md:pb-0 max-md:px-4'>
      <div
        className={cn(
          'box-countdown text-center pt-[132px] max-lg:pt-6 z-[1]',
          fontSans.variable
        )}
      >
        <h2 className='font-[900] text-[80px] leading-[120px] tracking-[0.6px] max-lg:text-[40px] max-lg:leading-[50px] max-lg:tracking-[0.6px]'>
          {dict.title}
        </h2>
        <div className='mt-[21px] mb-[97px] flex items-center justify-center gap-[52px] max-md:gap-1 font-bold text-[#000000] rounded-[21px] px-[39px] py-[26px] bg-white shadow-[0px_4px_10px_0px_#00000040] max-lg:mt-[38px] max-lg:px-[26px] max-lg:py-6 max-lg:mb-10 max-lg:justify-between'>
          <div>
            <p className='font-[900] text-[60px] leading-[64px] tracking-[4.8px] max-lg:text-[36px] max-lg:leading-[45px]'>
              {timeLeft.days}
            </p>
            <p className='text-[15.64px] leading-[100%] tracking-[-0.65px] max-lg:text-[12px] max-lg:leading-[100%]'>
              {dict.day}
            </p>
          </div>
          <p className='font-normal text-[65.17px] leading-[100%] tracking-[-0.65px] max-lg:text-[40px] max-lg:font-normal'>
            :
          </p>
          <div>
            <p className='font-[900] text-[60px] leading-[64px] tracking-[4.8px] max-lg:text-[36px] max-lg:leading-[45px]'>
              {timeLeft.hours}
            </p>
            <p className='text-[15.64px] leading-[100%] tracking-[-0.65px] max-lg:text-[12px] max-lg:leading-[100%]'>
              {dict.hour}
            </p>
          </div>
          <p className='font-normal text-[65.17px] leading-[100%] tracking-[-0.65px] max-lg:text-[40px] max-lg:font-normal'>
            :
          </p>
          <div>
            <p className='font-[900] text-[60px] leading-[64px] tracking-[4.8px] max-lg:text-[36px] max-lg:leading-[45px]'>
              {timeLeft.minutes}
            </p>
            <p className='text-[15.64px] leading-[100%] tracking-[-0.65px] max-lg:text-[12px] max-lg:leading-[100%]'>
              {dict.minute}
            </p>
          </div>
          <p className='font-normal text-[65.17px] leading-[100%] tracking-[-0.65px] max-lg:text-[40px] max-lg:font-normal'>
            :
          </p>
          <div>
            <p className='font-[900] text-[60px] leading-[64px] tracking-[4.8px] max-lg:text-[36px] max-lg:leading-[45px]'>
              {timeLeft.seconds}
            </p>
            <p className='text-[15.64px] leading-[100%] tracking-[-0.65px] max-lg:text-[12px] max-lg:leading-[100%]'>
              {dict.second}
            </p>
          </div>
        </div>
      </div>
      <div className='w-[560px] mx-auto text-center z-[1] max-md:w-full'>
        <h4 className='mb-8 font-normal text-lg leading-[126%] max-md:mb-4 max-md:text-[12px] max-md:leading-[15px] max-md:tracking-[0.9px]'>
          {dict.subtitle}
        </h4>
        <div className='relative'>
          <Input
            type='email'
            placeholder={dict.email_placeholder}
            className='h-14 text-black focus-visible:!ring-offset-0 focus-visible:!ring-0 !rounded-[8px] pr-10'
          />
          <ArrowRight className='text-black w-6 h-6 absolute top-4 right-4' />
        </div>
      </div>
      <div className='absolute top-[85px] left-0 bottom-0 w-1/2 max-md:relative max-md:w-full max-md:top-[11px]'>
        <Image
          src={FairyImage}
          alt='fairy'
          width={0}
          height={0}
          className='w-full h-full max-md:hidden'
          loading='lazy'
          quality={50}
        />
        <Image
          src={FairyImageMb}
          alt='fairy'
          width={342}
          height={258}
          className='w-full h-full max-md:block hidden'
          loading='lazy'
          quality={50}
        />
      </div>
    </section>
  );
}
