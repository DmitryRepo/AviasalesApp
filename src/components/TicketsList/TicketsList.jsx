import React from 'react';

import TicketCard from '../TicketCard/TicketCard';

import classes from './TicketsList.module.scss';

const TicketsList = () => {
  return (
    <div className={classes['tickets-list']}>
      <TicketCard />
      <button
        type="button"
        className="btn btn-primary"
        style={{ width: '100%', height: '50px' }}
        onClick={() => {}}
      >
        Показать еще
      </button>
    </div>
  );
};

export default TicketsList;
