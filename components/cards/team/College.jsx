import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function College({ title, description, image }) {
  return (
    <section className='w-full '>
      <div className='container mx-auto '>
        <div
          className={`flex lg:w-[1120px] lg:h-[192px] lg:items-center flex-col lg:flex-row lg:gap-[200px] lg:mx-16 mx-8 lg:pt-72 lg:mt-10 lg:py-0 py-20`}
        >
          <Image
            width='300'
            height='198'
            src={title}
            alt='title'
            className='mb-10 lg:mb-0'
          />
          <div className=''>
            <p className='text-base font-primary-font lg:w-[352px] text-card-paragrah lg:h-[104px] lg:mb-4 mb-8'>
              {description}
            </p>
            <Button>See How It Works</Button>
          </div>
        </div>
      </div>
      <div className='justify-end hidden lg:flex'>
        <Image
          src={image}
          width='556'
          height='402'
          alt='people'
          className='-mt-56'
        />
      </div>
    </section>
  );
}
