import { NextPage } from 'next';
import { Fragment, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import classes from '../styles/components/Countdown.module.scss';

let countdownTimeout: NodeJS.Timeout;

export const Countdown: NextPage = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleResetCountdown = (): void => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  };

  const handleCountdown = (): void => {
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  return (
    <Fragment>
      <div className={classes.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={classes.countdown_button}>
          Ciclo encerrado
          <img src="icons/checked.svg" alt="finished cicle" />
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={`${classes.countdown_button} ${classes.countdown_button__active}`}
          onClick={handleResetCountdown}
        >
          Abandonar ciclo
          <img src="icons/minus.svg" alt="end cicle" />
        </button>
      ) : (
        <button
          type="button"
          className={classes.countdown_button}
          onClick={handleCountdown}
        >
          Iniciar um ciclo
          <img src="icons/plus.svg" alt="start cicle" />
        </button>
      )}
    </Fragment>
  );
};
