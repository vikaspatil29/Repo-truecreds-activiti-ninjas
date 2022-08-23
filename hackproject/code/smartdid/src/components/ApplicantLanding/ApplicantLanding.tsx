import Button from '@mui/material/Button';
import React, { FC } from 'react';
import styles from './ApplicantLanding.module.css';

interface ApplicantLandingProps {
  handleNext: any
}

const ApplicantLanding: FC<ApplicantLandingProps> = (props) => {
  
  
  const nextStep = () => {
    props.handleNext(1);
  }

  return (
  <div className={styles.ApplicantLanding}>
    ApplicantLanding Component
    <Button variant="contained" onClick={nextStep}>Apply Loan</Button>
  </div>
)};

export default ApplicantLanding;
