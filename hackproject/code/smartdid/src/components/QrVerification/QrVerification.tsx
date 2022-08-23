import React, { FC } from 'react';
import styles from './QrVerification.module.css';
import Button from '@mui/material/Button';

interface QrVerificationProps {
  handleNext: any
}

const QrVerification: FC<QrVerificationProps> = (props) => 
{

  const nextStep = () => {
    props.handleNext(1);
  }

  return(
    <div className={styles.QrVerification}>
      QrVerification Component
      <Button variant="contained"  onClick={nextStep}>Verify</Button>
    </div>
  );
}


export default QrVerification;
