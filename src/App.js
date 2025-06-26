import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Main from './components/Main/Main';
import Details from './components/Details/Details';
import WelcomePage from './components/WelcomePage'; // new import
import useStyles from './styles';

const TrackerLayout = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={4} className={classes.mobile}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} sm={3} className={classes.main}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.desktop}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.last}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/tracker" element={<TrackerLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
