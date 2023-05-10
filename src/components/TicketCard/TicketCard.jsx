import React from 'react';

import classes from './TicketCard.module.scss';

const TicketCard = () => {
  return (
    <div className={classes['ticket-card']}>
      <div className={classes['ticket-card__title']}>
        <div className="ticket-card__price">Price</div>
        <img className={classes['ticket-card__carrier-logo']} src="" alt="logo" />
      </div>

      <div className={classes['ticket-card__info_destination']}>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>Mаршрут</div>
          <div className={classes.info}>Время</div>
        </div>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.info}>Время</div>
        </div>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>ПЕРЕСАДКИ</div>
          <div className={classes.info}>Количество пересадок</div>
        </div>
      </div>

      <div className={classes['ticket-card__info_destination-back']}>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>Mаршрут</div>
          <div className={classes.info}>Время</div>
        </div>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.info}>Время</div>
        </div>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>ПЕРЕСАДКИ</div>
          <div className={classes.info}>Количество пересадок</div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
