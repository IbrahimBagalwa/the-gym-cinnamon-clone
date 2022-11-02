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
    </>
  );
}
