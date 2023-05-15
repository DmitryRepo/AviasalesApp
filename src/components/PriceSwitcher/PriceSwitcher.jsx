import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/actions';

import classes from './PriceSwitcher.module.scss';

const PriceSwitcher = (props) => {
  const { sortByFast, sortByPrice } = props;
  return (
    <div className={classes['fast-fly-switcher']}>
      <button className={`${classes.btn} btn-lg btn-primary `} onClick={sortByPrice} type="button">
        Самый дешевый
      </button>
      <button className={`${classes.btn} btn-lg btn-primary `} onClick={sortByFast} type="button">
        Самый быстрый
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { randomValue: state.randomValue };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortByPrice: () => dispatch(actions.sortByPrice()),
    sortByFast: () => dispatch(actions.sortByFast()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceSwitcher);
