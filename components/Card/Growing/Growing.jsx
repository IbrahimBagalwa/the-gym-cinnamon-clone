import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function Growing({ title, description, careers }) {
  return (
    <section className='bg-hero-pattern bg-secondary-bg py-24'>
      <div className='container mx-auto '>
        <div className='flex w-[1263px] h-[291px] items-center gap-[120px] mx-16'>
          <div className='w-[448px] h-[291px]'>
            <h2 className='w-[448px] h-[72px] font-mont-bold text-[54px] text-grow-color mb-8'>
              {title}
            </h2>
            <p className='w-[430px] h-[104px] text-base font-primary-font text-paragrah-color mb-4'>
              {description}
            </p>
            <Button title='See all Positions' />
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
    <div className='flex items-center justify-center h-[120px] gap-[10px]'>
      <p className='w-[400px] font-mont-semibold text-grow-color text-2xl'>
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
