import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function CollegeTeam({ title, description, image }) {
  return (
    <section className=' w-full'>
      <div className=' container mx-auto'>
        <div
          className={`flex w-[1120px] h-[192px] items-center  gap-[200px] mx-16 pt-52 mt-20`}
        >
          <Image width='300' height='198' src={title} alt='title' />
          <div>
            <p className='text-base font-primary-font w-[352px] text-card-paragrah h-[104px] mb-4'>
              {description}
            </p>
            <Button title='See How It Works' />
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <Image
          src={image}
          width='556'
          height='402'
          alt='people'
          className='-mt-28'
        />
      </div>
    </section>
  );
}
