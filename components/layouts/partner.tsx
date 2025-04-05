'use client';
import { partnerList } from '@/factory/data';
import { cn } from '@/lib/utils';
import { DictionaryData } from '@/types/data';
import { Playfair_Display as FontSans } from 'next/font/google';
import Image from 'next/image';
import Slider, { CustomArrowProps, Settings } from 'react-slick';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <Image {...props} width={40} height={40} src={'/icons/next.svg'} alt='next' />
);

const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => (
  <Image {...props} width={40} height={40} src={'/icons/prev.svg'} alt='prev' />
);

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '100px',
      },
    },
  ],
};

export default function Partner({ dict }: DictionaryData) {
  return (
    <section className='mt-[128px] bg-[#F6F6F6] pt-[109px] pb-[120px] text-center max-lg:mt-12 max-lg:py-10'>
      <h3
        className={cn(
          'text-black font-black text-[60px] leading-[60px] tracking-[3.6px] mb-10 max-lg:text-[40px] max-lg:leading-[50px] max-lg:tracking-[0.6px]',
          fontSans.className
        )}
      >
        {dict.title}
      </h3>
      <div className='max-w-[1540px] max-[1540px]:w-[calc(100%-80px)] mx-auto text-black'>
        <Slider {...settings}>
          {partnerList.map((item, index) => (
            <Image
              src={item.image}
              alt={`partner-${index}`}
              key={index}
              width={260}
              height={100}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
