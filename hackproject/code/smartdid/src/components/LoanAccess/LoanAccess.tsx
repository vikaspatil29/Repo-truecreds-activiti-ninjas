import Button from '@mui/material/Button/Button';
import React, { FC } from 'react';
import styles from './LoanAccess.module.css';

interface LoanAccessProps {
  handleNext: any
}

const LoanAccess: FC<LoanAccessProps> = (props) => {
  
  const nextStep = () => {
    props.handleNext(1);
  }

  return (
  <div className={styles.LoanAccess}>
    LoanAccess Component
    <Button variant="contained"  onClick={nextStep}>Access Loan</Button>
  </div>
)};

export default LoanAccess;
