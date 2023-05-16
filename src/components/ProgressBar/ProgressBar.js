import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import calcProgress from '../../utils/calcProgress';

import classes from './ProgressBar.module.scss';

const ProgressBar = () => {
  const { uploaded } = useSelector((state) => state);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (uploaded) {
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  }, [uploaded]);
  if (visible) {
    return <Progress />;
  }
  return null;
};

export default ProgressBar;

const Progress = () => {
  const { ticketsData, uploaded } = useSelector((state) => state);
  return (
    <div>
      <div
        className={`progress-bar ${classes['progress-bar-plus']}`}
        role="progressbar"
        style={{ width: `${calcProgress(ticketsData, uploaded)}%`, height: 10 }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};
