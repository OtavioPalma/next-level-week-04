import { NextPage } from 'next';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import classes from '../styles/components/CompletedChallenges.module.scss';

export const CompletedChallenges: NextPage = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={classes.completedChallenges}>
      <span>Desafios completos</span>

      <span>{challengesCompleted}</span>
    </div>
  );
};
