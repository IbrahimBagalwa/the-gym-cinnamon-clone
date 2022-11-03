import Image from 'next/image';
import React from 'react';

export default function Communication() {
  return (
    <section className='pt-20 pb-32'>
      <div className='mx-auto container'>
        <div className='flex mx-16 items-center gap-[280px]'>
          <div>
            <div className='text-[#5135ff1a] text-[258px] font-mont-bold -ml-[75px]'>
              “
            </div>
            <h3 className='w-[658px] h-[112px] text-secondary font-mont-bold text-[40px] -mt-[270px]'>
              They’re consistent, and the communication is good.
            </h3>
            <p className='w-[600px] h-[78px] font-primary-font text-base text-card-paragrah mb-[32px] mt-[32px]'>
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
          />
        </div>
        <div className='flex items-center gap-4 mx-16'>
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
        <div className='flex justify-between mb-10'>
          <div className='flex mx-16 gap-12 cursor-pointer mt-14'>
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
          <div className='text-primary flex mx-16 gap-4 text-base font-primary-font font-bold cursor-pointer mt-14'>
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
