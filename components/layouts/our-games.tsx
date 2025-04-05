import { cn } from '@/lib/utils';
import { DictionaryData } from '@/types/data';
import { Playfair_Display as FontSans } from 'next/font/google';
import { Fragment } from 'react';
import GameItem from './game-item';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
const gameData = {
  items: Array(12)
    .fill(0)
    .map((_, index) => ({ id: index + 1 })),
};
export default function OurGames({ dict }: DictionaryData) {
  return (
    <section className='px-20 mx-auto max-lg:mt-12 max-md:px-4'>
      <h3
        className={cn(
          'text-black font-black text-[60px] leading-[60px] tracking-[3.6px] text-center mb-6 max-lg:text-[40px] max-lg:leading-[50px] max-lg:tracking-[0.6px] max-lg:mb-[15px]',
          fontSans.className
        )}
      >
        {dict.title}
      </h3>
      <p className='text-[#757575] font-normal text-sm leading-[140%] text-center w-[860px] mx-auto max-lg:w-full'>
        {dict.description}
      </p>
      <div className='mt-40 grid grid-cols-4 gap-10 text-black container max-lg:mt-10 max-lg:grid-cols-2 max-lg:gap-[15px] max-lg:px-0'>
        <div className='col-start-1 space-y-10 max-lg:space-y-5'>
          {gameData.items.slice(0, 3).map(({ id }) => (
            <Fragment key={id}>
              <GameItem
                id={id.toString()}
                image={`/images/${id}.jpg`}
                title={dict[`game_${id}`]}
                desc={dict.game_desc}
              />
            </Fragment>
          ))}
        </div>
        <div className='col-start-2 space-y-10 mt-20 max-lg:mt-5 max-lg:space-y-5'>
          {gameData.items.slice(3, 6).map(({ id }) => (
            <Fragment key={id}>
              <GameItem
                id={id.toString()}
                image={`/images/${id}.jpg`}
                title={dict[`game_${id}`]}
                desc={dict.game_desc}
              />
            </Fragment>
          ))}
        </div>
        <div className='col-start-3 space-y-10 max-lg:col-start-1 max-lg:space-y-5'>
          {gameData.items.slice(6, 9).map(({ id }) => (
            <Fragment key={id}>
              <GameItem
                id={id.toString()}
                image={`/images/${id}.jpg`}
                title={dict[`game_${id}`]}
                desc={dict.game_desc}
              />
            </Fragment>
          ))}
        </div>
        <div className='col-start-4 space-y-10 mt-20 max-lg:col-start-2 max-lg:mt-5 max-lg:space-y-5'>
          {gameData.items.slice(9, 12).map(({ id }) => (
            <Fragment key={id}>
              <GameItem
                id={id.toString()}
                image={`/images/${id}.jpg`}
                title={dict[`game_${id}`]}
                desc={dict.game_desc}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
