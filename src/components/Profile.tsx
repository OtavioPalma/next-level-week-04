import { NextPage } from 'next';
import classes from '../styles/components/Profile.module.scss';

export const Profile: NextPage = () => {
  return (
    <div className={classes.profile}>
      <img src="https://github.com/otaviopalma.png" alt="github user" />

      <div>
        <strong>Otávio Palma</strong>

        <p>
          <img src="icons/level.svg" alt="level up" />
          Level 1
        </p>
      </div>
    </div>
  );
};
