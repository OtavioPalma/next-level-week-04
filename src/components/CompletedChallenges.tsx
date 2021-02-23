import { NextPage } from 'next';
import classes from '../styles/components/CompletedChallenges.module.scss';

export const CompletedChallenges: NextPage = () => {
  return (
    <div className={classes.completedChallenges}>
      <span>Desafios completos</span>

      <span>5</span>
    </div>
  );
};
