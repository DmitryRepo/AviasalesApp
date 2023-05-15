import React from 'react';

import classes from './TicketCard.module.scss';

const TicketCard = ({ ticketData }) => {
  return (
    <div className={classes['ticket-card']}>
      <div className={classes['ticket-card__title']}>
        <div className="ticket-card__price">Price {ticketData.price}</div>
        <img
          className={classes['ticket-card__carrier-logo']}
          src={`https://pics.avs.io/99/36/${ticketData.carrier}.png`}
          alt="logo"
        />
      </div>

      <div className={classes['ticket-card__info_destination']}>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>Mаршрут </div>
          <div>{`${ticketData.segments[0].origin}-${ticketData.segments[0].destination}`}</div>
          <div className={classes.info}>Время</div>
          <div>{`${ticketData.segments[0].date},${ticketData.segments[0].duration}`}</div>
        </div>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.info}>{`${ticketData.segments[0].duration}`}</div>
        </div>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>ПЕРЕСАДКИ</div>
          <div className={classes.info}>{ticketData.segments[0].stops}</div>
        </div>
      </div>

      <div className={classes['ticket-card__info_destination-back']}>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>Mаршрут</div>
          <div>{`${ticketData.segments[1].origin}-${ticketData.segments[1].destination}`}</div>
          <div className={classes.info}>Время</div>
          <div>{`${ticketData.segments[1].date},${ticketData.segments[1].duration}`}</div>
        </div>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.info}>{`${ticketData.segments[1].duration}`}</div>
        </div>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>ПЕРЕСАДКИ</div>
          <div className={classes.info}>{ticketData.segments[1].stops}</div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
