import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownProviderData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  handleCountdown: () => void;
  handleResetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownProviderData);

export const CountdownProvider: React.FC<CountdownProviderProps> = ({
  children,
}) => {
  const { handleNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleCountdown = (): void => {
    setIsActive(true);
  };

  const handleResetCountdown = (): void => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      handleNewChallenge();
    }
  }, [isActive, time, handleNewChallenge]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        handleCountdown,
        handleResetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
