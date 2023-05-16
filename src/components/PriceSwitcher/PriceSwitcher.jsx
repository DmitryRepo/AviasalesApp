import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../../redux/actions/actions';

import classes from './PriceSwitcher.module.scss';

const PriceSwitcher = () => {
  const dispatch = useDispatch();
  const [cheapButtonActive, setCheapButtonActive] = useState(false);
  const [fastButtonActive, setFastButtonActive] = useState(false);

  let classButtonCheap = 'btn-light';
  let classButtonFast = 'btn-light';

  if (cheapButtonActive) {
    classButtonCheap = 'btn-primary';
    classButtonFast = 'btn-light';
  }

  if (fastButtonActive) {
    classButtonFast = 'btn-primary';
    classButtonCheap = 'btn-light';
  }

  return (
    <div className={classes['fast-fly-switcher']}>
      <button
        className={`${classes[`${classButtonCheap}`]} btn-lg ${classButtonCheap}`}
        onClick={() => {
          setCheapButtonActive(true);
          setFastButtonActive(false);
          dispatch(actions.sortByPrice());
        }}
        type="button"
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${classes[`${classButtonFast}`]} btn-lg ${classButtonFast}`}
        onClick={() => {
          setFastButtonActive(true);
          setCheapButtonActive(false);
          dispatch(actions.sortByFast());
        }}
        type="button"
      >
        САМЫЙ БЫСТРЫЙ
      </button>
    </div>
  );
};

export default PriceSwitcher;
