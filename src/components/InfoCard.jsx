import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try adding: <br /> 
      In Income or Expense say{isIncome ? 'Income ' : 'Expense '} 
    add an amount say {isIncome ? 'Rs.100 ' : 'Rs.50 '}  
    choose Category say {isIncome ? 'Salary ' : 'Travel '}
    for a Date say {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;