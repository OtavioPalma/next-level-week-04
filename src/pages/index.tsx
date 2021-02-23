import { NextPage } from 'next';
import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import classes from '../styles/pages/Home.module.scss';

export const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className={classes.container_profile}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div />
      </section>
    </div>
  );
};

export default Home;
