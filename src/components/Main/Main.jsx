import React from 'react';

import PriceFastSwitcher from '../PriceSwitcher/PriceSwitcher';
import TicketsList from '../TicketsList/TicketsList';

import classes from './Main.module.scss';

const Main = () => {
  return (
    <div className={classes.main}>
      <PriceFastSwitcher />
      <TicketsList />
    </div>
  );
};

export default Main;
