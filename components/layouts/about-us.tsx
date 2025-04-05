import { cn } from '@/lib/utils';
import { DictionaryData } from '@/types/data';
import { Playfair_Display as FontSans } from 'next/font/google';
import CalendarIcon from '@/public/icons/calendar.svg';
import PenIcon from '@/public/icons/pen.svg';
import TeamIcon from '@/public/icons/team.svg';
import Map from '@/public/images/pin-map.png';
import Witch from '@/public/images/witch.png';

import Image from 'next/image';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function AboutUs({ dict }: DictionaryData) {
  return (
    <section className='max-w-[1160px] mx-auto gap-10 mt-[128px] max-lg:max-w-[auto] max-lg:mt-12'>
      <div className='flex justify-center gap-10 max-lg:flex-col'>
        <div className='w-1/2 max-lg:w-full max-lg:px-4'>
          <h3
            className={cn(
              'text-black font-black text-[60px] leading-[60px] tracking-[3.6px] mb-10 max-lg:mb-[15px] max-lg:text-[40px] max-lg:leading-[50px] max-lg:tracking-[0.6px]',
              fontSans.className
            )}
          >
            {dict.title}
          </h3>
          <p className='text-[#757575] font-normal text-sm leading-[140%]'>
            {dict.description}
          </p>
          <div className='flex flex-col gap-[39px] mt-20 max-lg:mt-10 max-lg:flex-row max-lg:gap-4'>
            <div className='space-y-1'>
              <h4 className='max-lg:h-[54px] text-[80px] font-bold leading-[100%] tracking-[-1px] text-[#079BEE] max-lg:text-[44px]'>
                {dict.num_of_users}
                <span className='text-[40px] uppercase max-lg:text-[20px]'>
                  {dict.mil}
                </span>
                {dict.plus}
              </h4>
              <p className='font-bold text-2xl leading-[30px] text-black'>
                {dict.users}
              </p>
            </div>
            <div className='space-y-1'>
              <h4 className='max-lg:h-[54px] text-[80px] font-bold leading-[100%] tracking-[-1px] text-[#079BEE] max-lg:text-[44px]'>
                {dict.num_of_games}
              </h4>
              <p className='font-bold text-2xl leading-[30px] text-black'>
                {dict.games}
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/2 px-[75px] py-[113px] bg-[#EEEEEE] max-lg:w-full max-lg:px-4 max-lg:py-10'>
          <ul className='flex flex-col gap-10'>
            <li className='flex gap-6 max-lg:gap-5'>
              <div className='bg-[#E3FCFF] rounded-[50%] aspect-square min-w-[50px] h-[50px] flex items-center justify-center max-lg:min-w-10 max-lg:h-10'>
                <Image
                  src={CalendarIcon}
                  alt='calendar-icon'
                  width={24}
                  height={24}
                  className='max-lg:w-[19.2px] max-lg:h-[19.2px]'
                />
              </div>
              <div className='space-y-2 max-lg:space-y-3'>
                <h4 className='text-2xl font-bold leading-[30px] text-black max-lg'>
                  {dict.title_1}
                </h4>
                <p className='font-normal text-sm leading-[140%] text-[#757575]'>
                  {dict.description_1}
                </p>
              </div>
            </li>
            <li className='flex gap-6 max-lg:gap-5'>
              <div className='bg-[#E3FCFF] rounded-[50%] aspect-square min-w-[50px] h-[50px] flex items-center justify-center max-lg:min-w-10 max-lg:h-10'>
                <Image
                  src={PenIcon}
                  alt='calendar-icon'
                  width={24}
                  height={24}
                  className='max-lg:w-[19.2px] max-lg:h-[19.2px]'
                />
              </div>
              <div className='space-y-2 max-lg:space-y-3'>
                <h4 className='text-2xl font-bold leading-[30px] text-black'>
                  {dict.title_2}
                </h4>
                <p className='font-normal text-sm leading-[140%] text-[#757575]'>
                  {dict.description_2}
                </p>
              </div>
            </li>
            <li className='flex gap-6 max-lg:gap-5'>
              <div className='bg-[#E3FCFF] rounded-[50%] aspect-square min-w-[50px] h-[50px] flex items-center justify-center max-lg:min-w-10 max-lg:h-10'>
                <Image
                  src={TeamIcon}
                  alt='calendar-icon'
                  width={24}
                  height={24}
                  className='max-lg:w-[19.2px] max-lg:h-[19.2px]'
                />
              </div>
              <div className='space-y-2 max-lg:space-y-3'>
                <h4 className='text-2xl font-bold leading-[30px] text-black'>
                  {dict.title_3}
                </h4>
                <p className='font-normal text-sm leading-[140%] text-[#757575]'>
                  {dict.description_3}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-[68px] relative max-lg:mt-10'>
        <div className='flex justify-center animate-wiggle animate-infinite animate-duration-[2000ms] animate-delay-1000 z-[1] max-lg:max-w-[90%] max-lg:mx-auto'>
          <Image src={Witch} alt='witch' width={533} height={437} />
        </div>
        <Image
          src={Map}
          alt='pin map'
          width={24}
          height={24}
          className='w-full h-full relative bottom-20 max-md:bottom-10'
        />
      </div>
    </section>
  );
}
