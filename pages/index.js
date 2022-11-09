import Image from 'next/image';
import Button from '../components/Button/Button';
import Growing from '../components/cards/growing/Growing';
import Office from '../components/cards/office/Office';
import College from '../components/cards/team/College';
import Team from '../components/cards/team/Team';
import Tech from '../components/cards/tech/Tech';
import Service from '../components/cards/service/Service';
import Communication from '../components/cards/team/Communication';
import { cardData } from '../components/data/cardData';
import { data } from '../components/data/data';
import {
  aboutData,
  careerData,
  collegeData,
  growData,
  items,
  teamData,
} from '../components/data/teamData';
import { officeData } from '../components/data/techData';
import Hero from '../components/Hero/Hero';
import About from '../components/cards/team/About';
import Picture from '../components/cards/image/Picture';

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      {data.map((item) => {
        return (
          <div key={item.id} className='mb-10 lg:mb-32'>
            <Picture {...item} />
          </div>
        );
      })}

      <Service title='Our services' cardData={cardData} />
      {teamData.map((team) => {
        return <Team key={team.id} {...team} />;
      })}
      <Communication />
      {aboutData.map((about) => {
        return <About {...about} items={items} />;
      })}
      {collegeData.map((college) => {
        return <College key={college.id} {...college} />;
      })}
      {growData.map((grow) => {
        return <Growing {...grow} careers={careerData} />;
      })}
      <Office title='Our offices' officeData={officeData} />
      <Tech
        title='Stay in the loop on tech topics'
        titleLink='VIEW MORE BLOGS'
      />
      <section className='bg-default'>
        <div className='container relative w-full mx-auto '>
          <div className='relative lg:-mb-44 md:-mb-20 pt-28'>
            <h2 className='text-center text-secondary text-[54px] font-mont-bold leading-10 hidden md:block'>
              Have a project in mind?
            </h2>
            <h2 className='text-center text-secondary text-[54px] leading-[50px] md:leading-normal font-semibold  md:font-mont-bold  mb-14 '>
              Let's work together.
            </h2>
            <div className='flex w-full'>
              <Button styles='mx-auto px-12'>Contact us</Button>
            </div>
          </div>
        </div>
        <Image
          width='450'
          height='600'
          src='/images/job-application.webp'
          alt='job'
          className='md:w-[200px] w-[100px] lg:w-[450px]'
        />
      </section>
    </div>
  );
}
