import React from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import ProgressBar from '../ProgressBar/ProgressBar';

import classes from './App.module.scss';

const App = () => {
  return (
    <section className={classes.app}>
      <Header />
      <ProgressBar />
      <section className={classes.content}>
        <Navbar />
        <Main />
      </section>
    </section>
  );
};

export default App;
