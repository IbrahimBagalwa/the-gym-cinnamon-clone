import Image from 'next/image';
import React from 'react';
import Button from '../../Button/Button';

export default function About({ title, image, description, items }) {
  return (
    <section className='bg-default '>
      <div className='flex py-28'>
        <div className='container mx-auto'>
          <div className='w-[820px] lg:h-[666px] lg:mx-16 mx-8'>
            <div>
              <h2 className='w-[1120px] lg:h-[72px] font-mont-bold text-secondary text-[54px] lg:mb-6'>
                {title}
              </h2>
              <p className='lg:w-[448px] w-[394px] lg:h-[78px] text-base text-card-paragrah font-primary-font lg:mb-6'>
                {description}
              </p>
            </div>
            <Image
              width='340'
              height='409'
              src={image}
              alt='about'
              className='md:block lg:hidden py-6'
            />
            <div className='lg:flex flex-wrap hidden'>
              {items.map((item) => {
                return <Career key={item.id} {...item} />;
              })}
            </div>
            <div className='lg:pt-16'>
              <Button>Read About us</Button>
            </div>
          </div>
        </div>
        <Image
          width='340'
          height='539'
          src={image}
          alt='about'
          className='lg:block hidden py-20'
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
