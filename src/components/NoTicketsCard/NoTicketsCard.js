import React from 'react';

const NoTicketsCard = () => (
  <div
    style={{
      height: 230,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    className="alert alert-dismissible alert-primary"
  >
    Рейсов, подходящих под заданные фильтры, не найдено
  </div>
);

export default NoTicketsCard;
