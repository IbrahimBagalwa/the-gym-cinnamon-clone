import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { detailData, techData } from '../../data/techData';

export default function CardTech({ title, titleLink }) {
  return (
    <section>
      <section className='mb-28 container mx-auto'>
        <h2 className='text-[54px] text-secondary font-mont-bold w-[480px] h-[144px] leading-tight lg:mx-16 mx-8 mt-14 mb-14'>
          {title}
        </h2>
        <div className='flex md:mx-8 lg:items-center justify-around gap-6 lg:mx-16'>
          <TechCard details={detailData} />
        </div>
        <div className='text-primary flex lg:mx-16 mx-8 gap-4 text-base font-primary-font font-bold cursor-pointer mt-14'>
          <Image
            width='8'
            height='12'
            alt='chevron'
            src='/images/chevron.svg'
          />{' '}
          <p className='border-b-2 border-primary'>{titleLink}</p>
        </div>
      </section>
    </section>
  );
}
const TechCard = () => {
  return (
    <>
      {techData.map((tech) => {
        const { image, subtitle, title, detail } = tech;
        return (
          <div>
            <Image
              width='352'
              height='216'
              src={image}
              alt={subtitle}
              className='py-4'
            />
            <Link href='#' className='cursor-pointer group'>
              <p className='text-xs text-secondary font-mont-bold group-hover:text-primary py-2'>
                {subtitle}
              </p>
              <Detail {...detail} />
              <h2 className=' text-secondary text-2xl font-mont-bold lg:w-[352px] h-[72px] group-hover:text-primary py-1 md:w-[230px] md:h-[90px]'>
                {title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

function Detail({ author, date, min, id }) {
  return (
    <div
      key={id}
      className='w-[320px] grid grid-flow-col gap-[6px] items-center'
    >
      <div className='whitespace-nowrap text-ellipsis overflow-hidden'>
        {author}
      </div>
      <div className='bg-[#FFCB48] rounded-[50%] w-[6px] h-[6px]'></div>
      <div className='text-card-paragrah text-base font-primary-font'>
        {date}
      </div>
      <div className='bg-[#FFCB48] rounded-[50%] w-[6px] h-[6px]'></div>
      <div className='text-card-paragrah text-base font-primary-font'>
        {min}
      </div>
    </div>
  );
}
