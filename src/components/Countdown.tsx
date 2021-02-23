import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import classes from '../styles/components/Countdown.module.scss';

export const Countdown: NextPage = () => {
  const [time, setTime] = useState(1 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleCountdown = (): void => {
    setActive(true);
  };

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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

      <button
        type="button"
        className={classes.countdown_button}
        onClick={handleCountdown}
      >
        Iniciar um ciclo
      </button>
    </Fragment>
  );
};
