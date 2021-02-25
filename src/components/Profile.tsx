import { NextPage } from 'next';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import classes from '../styles/components/Profile.module.scss';

export const Profile: NextPage = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={classes.profile}>
      <img src="https://github.com/otaviopalma.png" alt="github user" />

      <div>
        <strong>Otávio Palma</strong>

        <p>
          <img src="icons/level.svg" alt="level up" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
