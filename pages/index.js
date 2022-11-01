import CardImage from '../components/Card/ImageCard/CardImage';
import { data } from '../components/data/data';
import Hero from '../components/Hero/Hero';
import Navigation from '../components/Layout/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      {data.map((item) => {
        return (
          <div key={item.id}>
            <CardImage {...item} />
          </div>
        );
      })}
    </>
  );
}
