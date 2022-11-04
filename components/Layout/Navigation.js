import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';

export default function Navigation() {
  const [nav, setNav] = useState(false);

  const changeBG = () => {
    window.scrollY >= 2 ? setNav(true) : setNav(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBG);
  }, [nav]);

  return (
    <section
      className={`fixed w-full mt-8 h-24 -top-8 z-40 ${
        nav ? 'bg-white text-secondary' : 'bg-transparent text-default'
      }`}
    >
      <div className='flex items-center justify-between  mx-auto container py-5'>
        {nav ? (
          <Image
            src='/images/logo-dark.svg'
            width='150'
            height='200'
            alt='logo'
            className='lg:mx-16 mx-8'
          />
        ) : (
          <Image
            src='/images/logo-w.svg'
            width='150'
            height='200'
            alt='logo'
            className='lg:mx-16 mx-8'
          />
        )}
        <div className='lg:flex items-center hidden lg:gap-8 lg:mx-16'>
          <ul className='lg:flex items-center justify-between lg:gap-8 hidden text-base font-mont-semibold'>
            <li className='cursor-pointer hover:text-primary'>Projects</li>
            <li className='cursor-pointer hover:text-primary'>Services</li>
            <li className='cursor-pointer hover:text-primary'>About Us</li>
            <li className='cursor-pointer hover:text-primary'>Careers</li>
            <li className='cursor-pointer hover:text-primary'>Blog</li>
          </ul>
          <div className='lg:flex items-center lg:gap-8 hidden'>
            <div
              className={
                nav
                  ? 'ring-2 ring-primary rounded-full p-3'
                  : 'ring-2 rounded-full p-3 ring-white hover:bg-primary hover:ring-primary'
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='15'
                height='15'
                viewBox='0 0 24 24'
                fill='white'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className={
                  nav
                    ? 'stroke-primary fill-primary'
                    : 'stroke-white fill-white'
                }
              >
                <polygon points='5 3 19 12 5 21 5 3'></polygon>
              </svg>
            </div>
            <Button>Contact Us</Button>
          </div>
        </div>
        <div className='lg:hidden mx-8'>
          {nav ? (
            <Image
              src='/images/menu-dark.svg'
              width='30'
              height='30'
              alt='menu'
            />
          ) : (
            <Image src='/images/menu.svg' width='30' height='30' alt='menu' />
          )}
        </div>
      </div>
    </section>
  );
}
