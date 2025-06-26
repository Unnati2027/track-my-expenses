import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container } from '@material-ui/core';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h3" gutterBottom>Welcome to Expense Tracker</Typography>
      <Typography variant="subtitle1" gutterBottom>Track your income and expenses with ease.</Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate('/tracker')}
      >
        Enter App
      </Button>
    </Container>
  );
};

export default WelcomePage;
