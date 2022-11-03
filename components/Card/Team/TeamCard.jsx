import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function TeamCard({ title, description, image, gap }) {
  return (
    <section className=' bg-default w-full'>
      <div className=' container mx-auto'>
        <div
          className={`lg:flex lg:w-[1120px] lg:h-[192px] items-center py-20 lg:py-0  lg:gap-${gap} lg:mx-16 lg:pt-32 mx-8`}
        >
          <h2 className='font-mont-bold text-[54px] text-secondary lg:w-[448px] lg:h-[144px]'>
            Agile team <br /> on demand
          </h2>
          <div className='lg:hidden block'>
            <Image
              src={image}
              width='338'
              height='220'
              alt={title}
              className=''
            />
          </div>
          <div className=''>
            <p className='text-base font-primary-font lg:w-[352px] text-card-paragrah lg:h-[104px] pb-8 lg:pb-0'>
              {description}
            </p>
            <Button title='See How It Works' />
          </div>
        </div>
      </div>
      <div className='hidden lg:flex justify-end'>
        <Image src={image} width='338' height='220' alt={title} className='' />
      </div>
    </section>
  );
}
