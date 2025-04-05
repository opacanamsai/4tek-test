import Image from 'next/image';

export default function GameItem({
  id,
  image,
  title,
  desc,
}: {
  image: string;
  id: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      key={id}
      className='rounded-[20px] shadow-[0px_4px_10px_0px_#00000040] w-fit h-fit relative'
    >
      <Image
        src={image}
        alt='fairy'
        width={410}
        height={560}
        className='w-fit h-fit rounded-[20px]'
      />
      <div className='text-white px-8 space-y-4 absolute bottom-10 max-xl:pl-2 max-xl:pr-[18px] max-xl:bottom-[11px]'>
        <p className='font-bold text-[48px] leading-[60px] tracking-[-1px] max-xxl:text-2xl max-xxl:leading-[30px] max-xxl:tracking-[0px]'>
          {title}
        </p>
        <p className='font-normal text-sm leading-[140%] max-xl:text-xs max-xl:leading-[15px] max-xl:tracking-[0.9px]'>
          {desc}
        </p>
      </div>
    </div>
  );
}
