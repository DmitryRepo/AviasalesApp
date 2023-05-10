import React from 'react';

import classes from './PriceSwitcher.module.scss';

const PriceSwitcher = () => {
  return (
    <div className={classes['fast-fly-switcher']}>
      <button className={`${classes.btn} btn-lg btn-primary `} onClick={() => {}} type="button">
        Самый дешевый
      </button>
      <button className={`${classes.btn} btn-lg btn-primary `} onClick={() => {}} type="button">
        Самый быстрый
      </button>
      <button className={`${classes.btn} btn-lg btn-primary `} onClick={() => {}} type="button">
        Оптимальный
      </button>
    </div>
  );
};

export default PriceSwitcher;
