import Image from 'next/image';
import React from 'react';

export default function CardImage({
  picture,
  colorCover,
  subtitle,
  title,
  description,
}) {
  return (
    <div className='container mx-auto'>
      <div className='lg:mx-16 mt-40 overflow-hidden group'>
        <div className={'cursor-pointer overflow-hidden group ' + colorCover}>
          <Image
            src={picture}
            width='1200'
            height='500'
            alt='big-image'
            className='mx-auto group-hover:scale-105 transition-all duration-700 '
          />
        </div>
        <div className='flex justify-start items-center gap-8 text-card-color text-xs font-mont-bold uppercase mt-8'>
          {subtitle.map((sub, index) => {
            return <h3 key={index}>{sub}</h3>;
          })}
        </div>
        <div className='mt-8'>
          <h2 className='text-[40px] font-mont-bold text-secondary w-2/4'>
            {title}
          </h2>
          <p className='text-card-paragrah font-primary-font pr-62 w-3/5 text-base mt-4'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
