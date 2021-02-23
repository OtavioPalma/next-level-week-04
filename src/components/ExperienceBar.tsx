import { NextPage } from 'next';
import React from 'react';
import classes from '../styles/components/ExperienceBar.module.scss';

export const ExperienceBar: NextPage = () => {
  return (
    <header className={classes.experienceBar}>
      <span>0 xp</span>

      <div>
        <div style={{ width: '50%' }}></div>

        <span
          className={classes.experienceBar_currentExperience}
          style={{ left: '50%' }}
        >
          300px
        </span>
      </div>

      <span>600 xp</span>
    </header>
  );
};
