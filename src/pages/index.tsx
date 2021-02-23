import { NextPage } from 'next';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import classes from '../styles/pages/Home.module.scss';

export const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <ExperienceBar />

      <section>
        <div className={classes.container_profile}>
          <Profile />
        </div>

        <div />
      </section>
    </div>
  );
};

export default Home;
