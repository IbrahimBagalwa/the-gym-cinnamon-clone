import Image from 'next/image';
import Button from '../components/Button/Button';
import OfficeCard from '../components/Card/cardOfiice/OfficeCard';
import CardTech from '../components/Card/CardTech/CardTech';
import Growing from '../components/Card/Growing/Growing';
import CardImage from '../components/Card/ImageCard/CardImage';
import Service from '../components/Card/ServiceCard/Service';
import About from '../components/Card/Team/About';
import CollegeTeam from '../components/Card/Team/College';
import Communication from '../components/Card/Team/Communication';
import TeamCard from '../components/Card/Team/TeamCard';
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
import { officeData, techData } from '../components/data/techData';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      {data.map((item) => {
        return (
          <div key={item.id} className='lg:mb-32 mb-10'>
            <CardImage {...item} />
          </div>
        );
      })}

      <Service title='Our services' cardData={cardData} />
      {teamData.map((team) => {
        return <TeamCard key={team.id} {...team} />;
      })}
      <Communication />
      {aboutData.map((about) => {
        return <About {...about} items={items} />;
      })}
      {collegeData.map((college) => {
        return <CollegeTeam key={college.id} {...college} />;
      })}
      {growData.map((grow) => {
        return <Growing {...grow} careers={careerData} />;
      })}
      <OfficeCard title='Our offices' officeData={officeData} />
      <CardTech
        title='Stay in the loop on tech topics'
        titleLink='VIEW MORE BLOGS'
        techData={techData}
      />
      <section className='bg-default'>
        <div className=' mx-auto container w-full relative'>
          <div className='-mb-44 relative pt-28'>
            <h2 className='text-center text-secondary text-[54px] font-mont-bold leading-10'>
              Have a project in mind?
            </h2>
            <h2 className='text-center text-secondary text-[54px] font-mont-bold  mb-14'>
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
    </div>
  );
}
