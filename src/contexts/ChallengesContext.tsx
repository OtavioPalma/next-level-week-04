import { createContext, ReactNode, useState } from 'react';
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
  handleLevel: () => void;
  handleExperience: (experience: number) => void;
  handleChallenges: () => void;
  startNewChallenge: () => void;
  handleResetChallenge: () => void;
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

  const handleLevel = (): void => {
    setLevel(level + 1);
  };

  const handleExperience = (experience: number): void => {
    setCurrentExperience(currentExperience + experience);
  };

  const handleChallenges = (): void => {
    setChallengesCompleted(challengesCompleted + 1);
  };

  const startNewChallenge = (): void => {
    const random = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[random] as Challenge;

    setActiveChallenge(challenge);
  };

  const handleResetChallenge = (): void => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        handleLevel,
        handleExperience,
        handleChallenges,
        startNewChallenge,
        handleResetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
