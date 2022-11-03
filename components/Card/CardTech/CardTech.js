import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CardTech({ title, titleLink, techData }) {
  return (
    <section>
      <section className='mb-28 container mx-auto'>
        <h2 className='text-[54px] text-secondary font-mont-bold w-[480px] h-[144px] leading-tight mx-16 mt-14 mb-14'>
          {title}
        </h2>
        <div className='flex items-center justify-around gap-6 mx-16'>
          {techData.map((tech) => {
            return (
              <div key={tech.id}>
                <TechCard {...tech} />
              </div>
            );
          })}
        </div>
        <div className='text-primary flex mx-16 gap-4 text-base font-primary-font font-bold cursor-pointer mt-14'>
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
const TechCard = ({ image, subtitle, title, detail }) => {
  return (
    <>
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
        <p className='text-card-paragrah text-base font-primary-font  py-1'>
          {detail}
        </p>
        <h2 className=' text-secondary text-2xl font-mont-bold w-[352px] h-[72px] group-hover:text-primary py-1'>
          {title}
        </h2>
      </Link>
    </>
  );
};
