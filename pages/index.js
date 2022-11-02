import Image from 'next/image';
import Button from '../components/Button/Button';
import CardImage from '../components/Card/ImageCard/CardImage';
import Service from '../components/Card/ServiceCard/Service';
import { cardData } from '../components/data/cardData';
import { data } from '../components/data/data';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      {data.map((item) => {
        return (
          <div key={item.id} className='mb-32'>
            <CardImage {...item} />
          </div>
        );
      })}
      <Service title='Our services' cardData={cardData} />
      <section className='bg-default'>
        <div className=' mx-auto container w-full relative'>
          <div className='-mb-44 relative pt-28'>
            <h2 className='text-center text-secondary text-[54px] font-primary-font font-bold leading-10'>
              Have a project in mind?
            </h2>
            <h2 className='text-center text-secondary text-[54px] font-primary-font font-bold mb-14'>
              Let's work together.
            </h2>
            <div className='w-full flex'>
              <Button title='Contact us' styles='mx-auto px-12' />
            </div>
          </div>
        </div>
        <Image
          width='450'
          height='600'
          src='/images/job-application.webp'
          alt='job'
          className=''
        />
      </section>
    </>
  );
}
