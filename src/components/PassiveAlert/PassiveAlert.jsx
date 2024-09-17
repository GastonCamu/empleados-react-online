import React, { useEffect, useState } from 'react';
import s from './PassiveAlert.module.css';

const PassiveAlert = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const totalDuration = 3200;
    const interval = 100;

    const decrementProgress = () => {
      setProgress((prev) => {
        const newProgress = prev - (interval / totalDuration) * 100;
        if (newProgress <= 0) {
          clearInterval(progressInterval);
          onClose();
        }
        return newProgress;
      });
    };

    const progressInterval = setInterval(decrementProgress, interval);

    return () => clearInterval(progressInterval);
  }, [onClose]);

  const icon = type === 'error' ? '/assets/img/icon-error-50.png' : '/assets/img/icon-correct-50.png';

  return (
    <div className={`${s.passiveAlertWrapper}`}>
      <div className={s.progressBarContainer}>
        <div
          className={s.progressBar}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className={s.passiveAlert}>
        <div className={s.messageContainer}>
          <img draggable="false" className={s[type]} src={icon} alt={type} />
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default PassiveAlert;
