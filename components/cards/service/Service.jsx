import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function Service({ title, cardData }) {
  return (
    <section className='bg-hero-pattern bg-secondary-bg lg:mt-6 lg:pt-44 lg:pb-28 pb-44 md:pt-20 md:w-full'>
      <div className='mx-auto container'>
        <div className=' lg:flex w-[1120px] h-[803px] gap-[100px] lg:mx-16 mx-8'>
          <div className=' w-[352px] lg:h-[730px]'>
            <h1 className='text-white text-[54px] font-primary-font font-bold text-start lg:-mt-5 mb-8'>
              {title}
            </h1>
          </div>
          <div className='grid grid-cols-2 w-[640px] h-[664px] gap-[100px]'>
            {cardData.map((card) => {
              return (
                <div key={card.id} className='lg:-mb-10'>
                  <CardService {...card} />
                </div>
              );
            })}
            <div className=''>
              <Button>See our services</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const CardService = ({ subtitle, description, picture }) => {
  return (
    <div className=''>
      <Image
        src={picture}
        width='48'
        height='48'
        alt={subtitle}
        className='mb-3'
      />
      <h5 className='text-2xl font-primary-font font-semibold text-white py-6 md:pr-4'>
        {subtitle}
      </h5>
      <p className='text-paragrah-color text-base md:pb-8'>{description}</p>
    </div>
  );
};
