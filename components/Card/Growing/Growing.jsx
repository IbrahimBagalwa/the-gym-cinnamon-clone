import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function Growing({ title, description, careers }) {
  return (
    <section className='bg-hero-pattern bg-secondary-bg py-24'>
      <div className='container mx-auto '>
        <div className='flex lg:w-[1263px] lg:h-[291px] md:flex-col lg:flex-row lg:items-center lg:gap-[120px] md:gap-16 lg:mx-16 mx-8'>
          <div className='w-[448px] lg:h-[291px]'>
            <h2 className='lg:w-[448px] lg:h-[72px] font-mont-bold text-[54px] text-grow-color lg:mb-8 md:mb-4'>
              {title}
            </h2>
            <p className='lg:w-[430px] h-[104px] text-base font-primary-font text-paragrah-color mb-4'>
              {description}
            </p>
            <Button>See all Positions</Button>
          </div>
          <div>
            {careers.map((car) => {
              return (
                <div key={car.id} className='border-b border-[#3f3f3f]'>
                  {' '}
                  <Careers {...car} />{' '}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Careers({ career, icon }) {
  return (
    <div className='flex lg:items-center lg:justify-center lg:h-[120px] lg:gap-[10px] md:justify-between md:py-6'>
      <p className='lg:w-[400px] font-mont-semibold text-grow-color text-2xl'>
        {career}
      </p>
      <Image
        width='48'
        height='27'
        src={icon}
        alt='chevron'
        className='hover:-translate-y-2 duration-700 cursor-pointer'
      />
    </div>
  );
}
