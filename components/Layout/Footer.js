import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';

export default function Footer() {
  return (
    <section className='bg-hero-pattern bg-secondary-bg pt-24'>
      <section className='flex flex-col mx-auto container overflow-hidden'>
        <div className='grid grid-cols-3 lg:ml-16 md:ml-8'>
          <div>
            <Image
              src='/images/logo-w.svg'
              width='150'
              height='200'
              alt='logo'
              className='hiddden md:block mb-8'
            />
            <ul className='text-paragrah-color font-primary-font text-base leading-8 py-4 '>
              <li className='text-white'>Home</li>
              <li>Projects </li>
              <li> Services </li>
              <li> About Us</li>
              <li> Careers</li>
              <li> Blog</li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h4 className='text-white lg:text-[32px] font-primary-font font-bold mb-10  mx-auto flex flex-col'>
              All software, zero bullshit.
            </h4>
            <div className='text-paragrah-color font-primary-font text-sm grid grid-cols-3'>
              <div className='leading-6 md:w-[100px] lg:w-[500px]'>
                <p className='text-default font-bold'>Zagreb</p>
                <p>Slavonska avenija 6,</p>
                <p> 10000, Zagreb, Croatia</p>
                <p>+385 99 347 3103</p>
              </div>
              <div className='leading-6 md:w-[100px] lg:w-[500px]'>
                <p className='text-default font-bold'>New York</p>
                <p>500 7th Ave, New York,</p>
                <p>NY 10018, United States</p>
              </div>
              <div className='leading-6 md:w-[100px] lg:w-[500px]'>
                <p className='text-default font-bold'>Belgrade</p>
                <p>Bulevar vojvode Mišića 37</p>
                <p>11000, Belgrade, Serbia</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='grid grid-cols-3 gap-32'>
            <p className='self-end underline font-primary-font text-sm lg:mx-16 md:mx-8 text-default'>
              hello@cinnamon.agency
            </p>
            <div className='flex lg:justify-between col-span-2 lg:mr-16 md:-ml-4 lg:-ml-0'>
              <div className='text-white'>
                <p className='mb-2 text-base font-primary-font font-bold'>
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
                <Button styles='px-20 md:pr-18'>Subscribe</Button>
              </div>
              <div className='md:ml-2'>
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
          </div>
          <div className='border-b border-paragrah-color lg:mx-16 md:mx-8 my-5'></div>
          <div className='text-white flex lg:mx-16 mx-8 py-8 justify-between'>
            <div className='flex gap-4 text-paragrah-color text-base font-primary-font'>
              <p>© 2022 Cinnamon</p>
              <p className='underline'>Privacy Policy</p>
            </div>
            <div className='flex gap-4'>
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
