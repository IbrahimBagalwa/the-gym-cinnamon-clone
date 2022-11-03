import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function About({ title, image, description, items }) {
  return (
    <section className='bg-default '>
      {/* <div className=' w-[1263px] h-[1156]'> */}
      <div className='flex py-28'>
        <div className='container mx-auto'>
          <div className='w-[820px] h-[666px] mx-16'>
            <div>
              <h2 className='w-[1120px] h-[72px] font-mont-bold text-secondary text-[54px] mb-6'>
                {title}
              </h2>
              <p className='w-[448px] h-[78px] text-base text-card-paragrah font-primary-font mb-6'>
                {description}
              </p>
            </div>
            <div className='flex flex-wrap'>
              {items.map((item) => {
                return <Career key={item.id} {...item} />;
              })}
            </div>
            <div className='pt-16'>
              <Button title='Read About us' />
            </div>
          </div>
        </div>
        <Image
          width='340'
          height='539'
          src={image}
          alt='about'
          className='py-20'
        />
      </div>
      {/* </div> */}
    </section>
  );
}

function Career({ name }) {
  return (
    <div className='py-3'>
      <div className='w-[389px] h-[36px] font-mont-bold text-xl text-secondary'>
        {name}
      </div>
    </div>
  );
}
