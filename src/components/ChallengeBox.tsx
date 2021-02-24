import { NextPage } from 'next';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import classes from '../styles/components/ChallengeBox.module.scss';

export const ChallengeBox: NextPage = () => {
  const { activeChallenge, handleResetChallenge } = useContext(
    ChallengesContext,
  );

  return (
    <div className={classes.challengeBox}>
      {activeChallenge ? (
        <div className={classes.challengeBox_active}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="workout" />

            <strong>Novo desafio</strong>

            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={classes.challengeBox_failedButton}
              onClick={handleResetChallenge}
            >
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
