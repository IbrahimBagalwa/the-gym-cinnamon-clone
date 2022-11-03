import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function CollegeTeam({ title, description, image }) {
  return (
    <section className=' w-full'>
      <div className=' container mx-auto'>
        <div
          className={`flex lg:w-[1120px] lg:h-[192px] lg:items-center md:flex-col lg:flex-row lg:gap-[200px] lg:mx-16 mx-8 lg:pt-52 lg:mt-20 md:py-20`}
        >
          <Image
            width='300'
            height='198'
            src={title}
            alt='title'
            className='md:mb-10'
          />
          <div>
            <p className='text-base font-primary-font lg:w-[352px] text-card-paragrah lg:h-[104px] lg:mb-4 mb-8'>
              {description}
            </p>
            <Button title='See How It Works' />
          </div>
        </div>
      </div>
      <div className='lg:flex hidden justify-end'>
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
