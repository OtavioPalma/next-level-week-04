import { NextPage } from 'next';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import classes from '../styles/components/ExperienceBar.module.scss';

export const ExperienceBar: NextPage = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel = Math.round(
    (currentExperience / experienceToNextLevel) * 100,
  );

  return (
    <header className={classes.experienceBar}>
      <span>0 xp</span>

      <div>
        <div
          style={{
            width: `${percentToNextLevel}%`,
            transition: 'all 1s ease-in-out',
          }}
        />

        <span
          className={classes.experienceBar_currentExperience}
          style={{
            left: `${percentToNextLevel}%`,
            transition: 'all 1s ease-in-out',
          }}
        >
          {currentExperience} xp
        </span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};
