import React from 'react';
import classes from './Main.module.scss';
import PriceFastSwitcher from '../PriceSwitcher/PriceSwitcher';
import TicketsList from '../TicketsList/TicketsList';

const Main = () => {
  return (
    <div className={classes.main}>
      <PriceFastSwitcher />
      <TicketsList />
    </div>
  );
};

export default Main;
