import React from 'react';

export default function Hero() {
  return (
    <div className='bg-hero-pattern bg-secondary-bg -mt-20- py-44'>
      <div className='container mx-auto'>
        <h1 className='lg:text-[80px] text-4xl lg:mx-16 font-mont-heavy leading-tight tracking-tight text-default mx-8'>
          Results focused design & development agency.
        </h1>
        <p className='text-paragrah-color text-xl md:w-[580px] leading-[34px] text-start lg:mx-16 font-primary-font mt-6 mx-8'>
          Extend your team with our high performing specialists or hire us to
          shape your product from scratch. Either way, we’ll get your product
          off the ground and build a momentum for your <br /> success.
        </p>
      </div>
    </div>
  );
}
