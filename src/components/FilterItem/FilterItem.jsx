import React from 'react';

import classes from './FilterItem.module.scss';

const FilterItem = ({ value, checked, onFilterChange }) => {
  const label = {
    all: 'Все',
    zero: 'Без пересадок',
    one: '1 пересадка',
    two: '2 пересадки',
    three: '3 пересадки',
  };

  return (
    <div className={`form-check ${classes['form-check-plus']}`}>
      <label>
        <input
          type="checkbox"
          onChange={onFilterChange}
          defaultChecked={checked}
          className="form-check-input"
          value={value}
        />
        {label[value]}
      </label>
    </div>
  );
};

export default FilterItem;
