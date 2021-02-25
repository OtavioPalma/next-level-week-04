import { NextPage } from 'next';
import { Fragment, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import classes from '../styles/components/Countdown.module.scss';

export const Countdown: NextPage = () => {
  const {
    isActive,
    hasFinished,
    minutes,
    seconds,
    handleCountdown,
    handleResetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
