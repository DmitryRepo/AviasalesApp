import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo} />
    </div>
  );
};

export default Header;
