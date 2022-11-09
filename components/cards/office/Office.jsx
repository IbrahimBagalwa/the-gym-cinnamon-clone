import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Office({ title, officeData }) {
  const [scrolled, setSrolled] = useState(false);
  return (
    <section className='container mx-auto mb-28'>
      <h2 className='text-[54px] text-secondary font-mont-bold w-[480px] h-[144px] leading-tight lg:mx-16 mx-8 mt-20'>
        {title}
      </h2>
      <div
        className={`flex justify-between overflow-x-auto lg:overflow-x-visible transition-all duration-700  gap-8 lg:ml-16 md:w-[770px] w-[540px] mx-8 lg:w-[1263px] ${
          scrolled ? 'lg:-translate-x-[44.7%]' : 'lg:translate-x-[0%]'
        }`}
      >
        {officeData.map((office) => {
          return (
            <div key={office.id}>
              <SingleCardOffice {...office} />
            </div>
          );
        })}
      </div>
      <div className='hidden gap-12 mx-8 cursor-pointer lg:flex lg:mx-16 mt-14'>
        <Image
          width='48'
          height='27'
          alt='chevron'
          src='/images/arrow-left.webp'
          className={`${
            scrolled ? 'hover:-translate-y-2 duration-500' : 'grayscale'
          } `}
          onClick={() => setSrolled(false)}
        />
        <Image
          width='48'
          height='27'
          alt='chevron'
          src='/images/arrow-right.webp'
          className={`${
            scrolled ? 'grayscale' : 'hover:-translate-y-2 duration-500'
          } `}
          onClick={() => setSrolled(true)}
        />
      </div>
    </section>
  );
}
const SingleCardOffice = ({ image, detail, title, icon }) => {
  return (
    <div className='md:w-[544px] w-[310px] md:h-[483px]'>
      <Image
        width='544'
        height='378'
        src={image}
        alt={title}
        className='py-4'
      />
      <div className='group'>
        <div className='flex items-center gap-8 text-secondary text-2xl font-mont-bold w-[352px] mt-4 group-hover:text-primary'>
          <Image src={icon} width='18' height='18' alt='location' />
          <h2> {title}</h2>
        </div>
        <p className='text-base text-card-paragrah w-[506px] group-hover:text-primary pl-12 font-primary-font mt-2'>
          {detail}
        </p>
      </div>
    </div>
  );
};
