import { NextPage } from 'next';
import { ExperienceBar } from '../components/ExperienceBar';

export const Home: NextPage = () => {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
  );
};

export default Home;
