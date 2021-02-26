import { NextPage } from 'next';
import React, { useContext, useRef } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import classes from '../styles/components/LevelUpModal.module.scss';

export const LevelUpModal: NextPage = () => {
  const { level, handleCloseLevelUpModal } = useContext(ChallengesContext);
  const overlay = useRef(null);

  const handleMouseOverlay = (ev: React.MouseEvent): void => {
    if (overlay.current === ev.target) {
      handleCloseLevelUpModal();
    }
  };

  const handleKeyboardOverlay = (ev: React.KeyboardEvent): void => {
    console.log(ev.key);
    if (ev.key === '27') {
      handleCloseLevelUpModal();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classes.overlay}
      ref={overlay}
      onClick={handleMouseOverlay}
      onKeyDown={handleKeyboardOverlay}
    >
      <div className={classes.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>

        <p>Você alcançou um novo level!</p>

        <button type="button" onClick={handleCloseLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
};
