import React from 'react';

import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <form className={classes.form}>
        <fieldset className={classes['form-group']}>
          <legend className={`mt-6 ${classes.title}`}>Количество пересадок</legend>
        </fieldset>
      </form>
    </div>
  );
};

export default Navbar;
