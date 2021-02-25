import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesProviderData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  handleLevelUp: () => void;
  handleExperience: (experience: number) => void;
  handleChallenges: () => void;
  handleNewChallenge: () => void;
  handleResetChallenge: () => void;
  handleCompleteChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesProviderData);

export const ChallengesProvider: React.FC<ChallengesProviderProps> = ({
  children,
}) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null,
  );

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const handleLevelUp = (): void => {
    setLevel(level + 1);
  };

  const handleExperience = (experience: number): void => {
    setCurrentExperience(currentExperience + experience);
  };

  const handleChallenges = (): void => {
    setChallengesCompleted(challengesCompleted + 1);
  };

  const handleNewChallenge = (): void => {
    const random = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[random] as Challenge;

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio 🎉', {
        body: `Valendo ${challenge.amount}xp !`,
        silent: true,
      });
    }
  };

  const handleResetChallenge = (): void => {
    setActiveChallenge(null);
  };

  const handleCompleteChallenge = (): void => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        handleLevelUp,
        handleExperience,
        handleChallenges,
        handleNewChallenge,
        handleResetChallenge,
        handleCompleteChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
