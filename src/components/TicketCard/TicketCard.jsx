import React from 'react';

import { minutesToHours, departureArrive } from '../../utils/timeTransform';
import { stopTransform, transplantsTransform } from '../../utils/tramsformTicketCardData';

import classes from './TicketCard.module.scss';

const TicketCard = ({ ticketData }) => {
  return (
    <div className={classes['ticket-card']}>
      <div className={classes['ticket-card__title']}>
        <div className="ticket-card__price">{ticketData.price} P</div>
        <img
          className={classes['ticket-card__carrier-logo']}
          src={`https://pics.avs.io/99/36/${ticketData.carrier}.png`}
          alt="logo"
        />
      </div>

      <div className={classes['ticket-card__info_destination']}>
        <div className={classes['ticket-card__info_destination__block']}>
          <div
            className={classes.title}
          >{`${ticketData.segments[0].destination}-${ticketData.segments[0].origin}`}</div>

          <div className={classes.info}>
            {departureArrive(ticketData.segments[0].date, ticketData.segments[0].duration)}
          </div>
          <div></div>
        </div>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.info}>{minutesToHours(ticketData.segments[0].duration)}</div>
        </div>
        <div className={classes['ticket-card__info_destination__block']}>
          <div className={classes.title}>{stopTransform(ticketData.segments[0].stops)}</div>
          <div className={classes.info}>{transplantsTransform(ticketData.segments[0].stops)}</div>
        </div>
      </div>

      <div className={classes['ticket-card__info_destination-back']}>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div
            className={classes.title}
          >{`${ticketData.segments[1].destination}-${ticketData.segments[1].origin}`}</div>
          <div className={classes.info}>
            {departureArrive(ticketData.segments[1].date, ticketData.segments[1].duration)}
          </div>
        </div>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>В ПУТИ</div>
          <div className={classes.info}>{minutesToHours(ticketData.segments[1].duration)}</div>
        </div>
        <div className={classes['ticket-card__info_destination-back__block']}>
          <div className={classes.title}>{stopTransform(ticketData.segments[1].stops)}</div>
          <div className={classes.info}>{transplantsTransform(ticketData.segments[1].stops)}</div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
