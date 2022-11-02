import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

export default function Footer() {
  return (
    <section className='bg-hero-pattern bg-secondary-bg mt-6 pt-24'>
      <div className='flex items-center justify-between mx-16'>
        <Image
          src='/images/logo-w.svg'
          width='150'
          height='200'
          alt='logo'
          className=''
        />
        <h4 className='text-white text-[32px] font-primary-font font-bold pr-64'>
          All software, zero bullshit.
        </h4>
      </div>
      <div className='flex items-center justify-between mx-16'>
        <ul className='text-paragrah-color font-primary-font text-base leading-8 py-4'>
          <li className='text-white'>Home</li>
          <li>Projects </li>
          <li> Services </li>
          <li> About Us</li>
          <li> Careers</li>
          <li> Blog</li>
        </ul>
        <div className='text-paragrah-color font-primary-font text-sm flex space-x-24 py-8'>
          <div className='leading-6'>
            <p className='text-default font-bold'>Zagreb</p>
            <p>Slavonska avenija 6,</p>
            <p> 10000, Zagreb, Croatia</p>
            <p>+385 99 347 3103</p>
          </div>
          <div className='leading-6'>
            <p className='text-default font-bold'>New York</p>
            <p>500 7th Ave, New York,</p>
            <p>NY 10018, United States</p>
          </div>
          <div className='leading-6'>
            <p className='text-default font-bold'>Belgrade</p>
            <p>Bulevar vojvode Mišića 37</p>
            <p>11000, Belgrade, Serbia</p>
          </div>
        </div>
      </div>
      <div className='flex text-white items-center justify-between border-b border-paragrah-color py-4 mx-16 mt-20'>
        <p className='self-end underline font-primary-font text-sm text-default'>
          hello@cinnamon.agency
        </p>
        <div className='ml-32'>
          <p className='mb-2 text-base font-primary-font font-bold'>
            Our newsletter
          </p>
          <div class='relative z-0 mb-6 w-full group'>
            <input
              type='email'
              name='floating_email'
              id='floating_email'
              class='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-white appearance-none dark:text-white dark:border-white focus:border-primary focus:border-b-2 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              for='floating_email'
              className='peer-focus:font-medium absolute text-sm  dark:text-default duration-300 transform -translate-y-6 
              scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Your E-mail
            </label>
          </div>
          <div className='mt-8'>
            <Button title='Subscribe' styles='px-20' />
          </div>
        </div>
        <div className=''>
          <Image
            src='/images/footer-img.svg'
            width='216'
            height='65'
            alt='footer-img'
            className='mb-8'
          />
          <Image
            src='/images/footer-im2.webp'
            width='216'
            height='65'
            alt='footer-img'
          />
        </div>
      </div>
      <div className='text-white'>
        <div>
          <p>© 2022 Cinnamon</p>
          <p>Privacy Policy</p>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </section>
  );
}
