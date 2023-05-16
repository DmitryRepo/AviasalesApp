import React from 'react';

import PriceSwitcher from '../PriceSwitcher/PriceSwitcher';
import TicketsList from '../TicketsList/TicketsList';

import classes from './Main.module.scss';

const Main = () => {
  return (
    <div className={classes.main}>
      <PriceSwitcher />
      <TicketsList />
    </div>
  );
};

export default Main;
