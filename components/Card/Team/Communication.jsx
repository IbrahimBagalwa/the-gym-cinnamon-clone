import Image from 'next/image';
import React from 'react';

export default function Communication() {
  return (
    <section className='lg:pt-20 pb-32'>
      <div className='mx-auto container'>
        <div className='flex lg:mx-16 mx-8 items-center lg:gap-[280px]'>
          <div>
            <div className='text-[#5135ff1a] text-[258px] font-mont-bold lg:-ml-[75px] -ml-[60px]'>
              “
            </div>
            <h3 className='lg:w-[658px] lg:h-[112px] text-secondary font-mont-bold lg:text-[40px] md:text-[30px] -mt-[270px]'>
              They’re consistent, and the communication is good.
            </h3>
            <p className='lg:w-[600px] h-[78px] font-primary-font text-base text-card-paragrah mb-[32px] mt-[32px]'>
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that’s focused on customers.
            </p>
          </div>
          <Image
            src='/images/pingLogo.webp'
            width='200'
            height='68'
            alt='pigLogo'
            className='hidden lg:block'
          />
        </div>
        <div className='lg:flex items-center gap-4 lg:mx-16 mx-8'>
          <Image width='68' height='68' src='/images/GarinProfile.webp' />
          <div>
            <h5 className='text-secondary text-2xl font-mont-bold h-[36px]'>
              Garin Toren,
            </h5>
            <p className='text-secondary text-base font-primary-font'>
              CEO, ping
            </p>
          </div>
        </div>
        <div className='flex lg:justify-between lg:mb-10 md:flex-col'>
          <div className='flex lg:mx-16 mx-8 gap-12 cursor-pointer mt-14'>
            <Image
              width='48'
              height='27'
              alt='chevron'
              src='/images/arrow-left.webp'
              className='hover:-translate-y-2 duration-500'
            />
            <Image
              width='48'
              height='27'
              alt='chevron'
              src='/images/arrow-right.webp'
              className='hover:-translate-y-2 duration-500'
            />
          </div>
          <div className='text-primary flex lg:mx-16  mx-8 gap-4 text-base font-primary-font font-bold cursor-pointer mt-14'>
            <Image
              width='8'
              height='12'
              alt='chevron'
              src='/images/chevron.svg'
            />{' '}
            <p className='border-b-2 border-primary'>VIEW CASE STUDY</p>
          </div>
        </div>
      </div>
    </section>
  );
}
