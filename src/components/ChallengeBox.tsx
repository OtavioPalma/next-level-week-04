import { NextPage } from 'next';
import classes from '../styles/components/ChallengeBox.module.scss';

export const ChallengeBox: NextPage = () => {
  const hasActiveChallenge = true;

  return (
    <div className={classes.challengeBox}>
      {hasActiveChallenge ? (
        <div className={classes.challengeBox_active}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="workout" />

            <strong>Novo desafio</strong>

            <p>
              Caminhe por 3 minutos e estique suas pernas para você ficar
              saudável!
            </p>
          </main>

          <footer>
            <button type="button" className={classes.challengeBox_failedButton}>
              Falhei
            </button>

            <button
              type="button"
              className={classes.challengeBox_succeededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={classes.challengeBox_inactive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level up" />
            Avance de nível completando desafios
          </p>
        </div>
      )}
    </div>
  );
};
