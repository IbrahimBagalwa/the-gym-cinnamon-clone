import Image from 'next/image';
import React from 'react';

export default function Picture({
  picture,
  colorCover,
  subtitle,
  title,
  description,
}) {
  return (
    <div className='container mx-auto'>
      <div className='mx-8 mt-24 overflow-hidden lg:mx-16 lg:mt-40 group'>
        <div className={'cursor-pointer overflow-hidden group ' + colorCover}>
          <Image
            src={picture}
            width='1200'
            height='500'
            alt='big-image'
            className='mx-auto transition-all duration-700 group-hover:scale-105 '
          />
        </div>
        <div className='flex items-center justify-start gap-8 mt-8 text-xs uppercase text-card-color font-mont-bold'>
          {subtitle.map((sub, index) => {
            return <h3 key={index}>{sub}</h3>;
          })}
        </div>
        <div className='mt-8'>
          <h2 className='text-[40px] font-mont-bold text-secondary lg:w-2/4'>
            {title}
          </h2>
          <p className='mt-4 text-base text-card-paragrah font-primary-font pr-62 lg:w-3/5'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
