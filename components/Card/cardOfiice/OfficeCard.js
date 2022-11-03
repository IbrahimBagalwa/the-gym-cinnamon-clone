import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CardOffice({ title, officeData }) {
  const [scrolled, setSrolled] = useState(false);
  return (
    <section className='mb-28 container mx-auto'>
      <h2 className='text-[54px] text-secondary font-mont-bold w-[480px] h-[144px] leading-tight mx-16 mt-20'>
        {title}
      </h2>
      <div
        className={`flex justify-between transition-all duration-700 w- gap-8 ml-16 w-[1263px] ${
          scrolled ? '-translate-x-[50%]' : 'translate-x-[0%]'
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
      <div className='flex mx-16 gap-12 cursor-pointer mt-14'>
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
    <div className='w-[544px] h-[483px]'>
      <Image
        width='544'
        height='378'
        src={image}
        alt={title}
        className='py-4'
      />
      <div className='group'>
        <div className='flex items-center gap-8 text-secondary text-2xl font-mont-bold w-[352px] h-[72px] group-hover:text-primary'>
          <Image src={icon} width='18' height='18' alt='location' />
          <h2> {title}</h2>
        </div>
        <p className='text-base text-card-paragrah w-[506px] group-hover:text-primary pl-12 font-primary-font'>
          {detail}
        </p>
      </div>
    </div>
  );
};