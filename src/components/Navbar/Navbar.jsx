import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import FilterItem from '../FilterItem/FilterItem';
import * as actions from '../../redux/actions/actions';

import classes from './Navbar.module.scss';

const Navbar = ({ filtersStatus, changeFilterStatus }) => {
  const onFilterChange = (event) => {
    changeFilterStatus(event.target.value, filtersStatus);
  };
  const renderFilters = (filtersData) => {
    const filters = Object.entries(filtersData);
    return filters.map((item) => (
      <FilterItem
        key={uuidv4()}
        onFilterChange={onFilterChange}
        value={item[0]}
        checked={item[1]}
      />
    ));
  };

  return (
    <div className={classes.navbar}>
      <form className={classes.form}>
        <fieldset className={classes['form-group']}>
          <legend className={`mt-6 ${classes.title}`}>Количество пересадок</legend>
          {renderFilters(filtersStatus)}
        </fieldset>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filtersStatus: state.filtersStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilterStatus: (filter, filtersStatus) =>
      dispatch(actions.changeFilterStatus(filter, filtersStatus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
