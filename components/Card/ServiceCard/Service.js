import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function Service({ title, cardData }) {
  return (
    <section className='bg-hero-pattern bg-secondary-bg mt-6 pt-44 pb-28 md:w-full'>
      <div className='grid grid-cols-[300px_200px_250px_250px] mx-auto container gap-[55px]'>
        <div className='col-span-2 row-span-3 lg:mx-16'>
          <h1 className='text-white text-[54px] font-primary-font font-bold text-start -mt-5'>
            {title}
          </h1>
        </div>
        {cardData.map((card) => {
          return (
            <div key={card.id} className=''>
              <CardService {...card} />
            </div>
          );
        })}
        <div className='py-8'>
          <Button title='See our services' />
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
      <h5 className='text-2xl font-primary-font font-semibold text-white py-6 pr-4'>
        {subtitle}
      </h5>
      <p className='text-paragrah-color text-base pb-8'>{description}</p>
    </div>
  );
};
