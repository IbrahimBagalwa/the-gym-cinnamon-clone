import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

export default function Footer() {
  return (
    <section className='pt-24 bg-hero-pattern bg-secondary-bg'>
      <section className='container flex flex-col mx-auto overflow-hidden'>
        <div className='grid mx-8 md:mx-0 md:grid-cols-3 lg:ml-16 md:ml-8'>
          <div>
            <Image
              src='/images/logo-w.svg'
              width='150'
              height='200'
              alt='logo'
              className='mb-8 hiddden md:block'
            />
            <h4 className='text-white lg:text-[32px] text-2xl font-primary-font font-bold mb-10  mx-auto flex flex-col md:hidden block'>
              All software, zero bullshit.
            </h4>
            <ul className='hidden py-4 text-base leading-8 text-paragrah-color font-primary-font md:block'>
              <li className='text-white'>Home</li>
              <li>Projects </li>
              <li> Services </li>
              <li> About Us</li>
              <li> Careers</li>
              <li> Blog</li>
            </ul>
            <ul className='flex justify-between py-4 text-base leading-8 text-paragrah-color font-primary-font md:hidden'>
              <div>
                <li className='text-white'>Home</li>
                <li>Projects </li>
                <li> Services </li>
              </div>
              <div>
                <li> About Us</li>
                <li> Careers</li>
                <li> Blog</li>
              </div>
            </ul>
          </div>
          <div className='col-span-2'>
            <h4 className='text-white lg:text-[32px] font-primary-font font-bold mb-10  mx-auto flex flex-col hidden md:block'>
              All software, zero bullshit.
            </h4>
            <div className='grid grid-cols-2 text-sm gap-14 mt-14 md:mt-0 md:gap-0 md:grid-cols-3 text-paragrah-color font-primary-font'>
              <div className='leading-6 md:w-[100px] lg:w-[500px]'>
                <p className='font-bold text-default'>Zagreb</p>
                <p>Slavonska avenija 6,</p>
                <p className='text-xs text-sm'> 10000, Zagreb, Croatia</p>
                <p>+385 99 347 3103</p>
              </div>
              <div className='leading-6 md:w-[100px] lg:w-[500px]'>
                <p className='font-bold text-default'>New York</p>
                <p className='text-xs text-sm'>500 7th Ave, New York,</p>
                <p>NY 10018, United States</p>
              </div>
              <div className='leading-6 md:w-[100px] lg:w-[500px]'>
                <p className='font-bold text-default'>Belgrade</p>
                <p className='text-xs md:text-sm'>Bulevar vojvode Mišića 37</p>
                <p>11000, Belgrade, Serbia</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mx-8 mt-14 md:mx-0 md:mt-0'>
          <div className='grid gap-32 md:grid-cols-3'>
            <p className='self-end hidden text-sm underline md:block font-primary-font lg:mx-16 md:mx-8 text-default'>
              hello@cinnamon.agency
            </p>
            <div className='flex flex-col col-span-2 md:flex-row lg:justify-between lg:mr-16 md:-ml-4 lg:-ml-0'>
              <div className='mb-10 text-white md:mb-0'>
                <p className='mb-2 text-base font-bold font-primary-font'>
                  Our newsletter
                </p>
                <div class='relative z-0 mb-9 w-full group'>
                  <input
                    type='email'
                    name='floating_email'
                    id='floating_email'
                    class='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-white appearance-none dark:text-white dark:border-white focus:border-white focus:border-b-2 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                  />
                  <label
                    for='floating_email'
                    className='peer-focus:font-medium absolute text-sm  dark:text-default duration-300 transform -translate-y-6
                scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Your E-mail
                  </label>
                </div>
                <Button styles='md:px-20 md:pr-18 px-32'>Subscribe</Button>
              </div>
              <div className='self-center md:self-auto md:ml-2'>
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
              <p className='block mt-10 text-sm text-center underline md:hidden font-primary-font lg:mx-16 md:mx-8 text-default'>
                hello@cinnamon.agency
              </p>
            </div>
          </div>
          <div className='my-5 border-b border-paragrah-color lg:mx-16 md:mx-8 md:hidden'></div>
          <div className='flex justify-center gap-4 md:hidden'>
            <Image width='21' height='21' src='/images/linkd.svg' alt='linkd' />
            <Image
              width='21'
              height='21'
              src='/images/glob.svg'
              alt='linkedin'
            />
            <Image width='21' height='21' src='/images/be.svg' alt='linkedin' />
            <Image
              width='21'
              height='21'
              src='/images/inst.svg'
              alt='linkedin'
            />
            <Image width='21' height='21' src='/images/fb.svg' alt='linkedin' />
            <Image
              width='21'
              height='21'
              src='/images/wif.svg'
              alt='linkedin'
            />
          </div>
          <div className='my-5 border-b border-paragrah-color lg:mx-16 md:mx-8'></div>
          <div className='flex justify-between py-8 mx-8 text-white lg:mx-16'>
            <div className='flex items-center gap-4 text-base md:items-start text-paragrah-color font-primary-font'>
              <p>© 2022 Cinnamon</p>
              <p className='underline'>Privacy Policy</p>
            </div>
            <div className='hidden gap-4 md:flex m'>
              <Image
                width='21'
                height='21'
                src='/images/linkd.svg'
                alt='linkd'
              />
              <Image
                width='21'
                height='21'
                src='/images/glob.svg'
                alt='linkedin'
              />
              <Image
                width='21'
                height='21'
                src='/images/be.svg'
                alt='linkedin'
              />
              <Image
                width='21'
                height='21'
                src='/images/inst.svg'
                alt='linkedin'
              />
              <Image
                width='21'
                height='21'
                src='/images/fb.svg'
                alt='linkedin'
              />
              <Image
                width='21'
                height='21'
                src='/images/wif.svg'
                alt='linkedin'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
