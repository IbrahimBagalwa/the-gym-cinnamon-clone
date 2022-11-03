import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function TeamCard({ title, description, image, gap }) {
  return (
    <section className=' bg-default w-full'>
      <div className=' container mx-auto'>
        <div
          className={`flex w-[1120px] h-[192px] items-center  gap-${gap} mx-16 pt-32`}
        >
          <h2 className='font-mont-bold text-[54px] text-secondary w-[448px] h-[144px]'>
            Agile team <br /> on demand
          </h2>
          <div>
            <p className='text-base font-primary-font w-[352px] text-card-paragrah h-[104px]'>
              {description}
            </p>
            <Button title='See How It Works' />
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <Image src={image} width='338' height='220' alt={title} className='' />
      </div>
    </section>
  );
}
