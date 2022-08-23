import React, { FC } from 'react';
import styles from './ConfirmDetails.module.css';
import Button from '@mui/material/Button';

interface ConfirmDetailsProps {
  handleNext: any
}

const ConfirmDetails: FC<ConfirmDetailsProps> = (props) => {

  const nextStep = () => {
    props.handleNext(1);
  }

  return(
    <div className={styles.ConfirmDetails}>
    ConfirmDetails Component
    <Button variant="contained"  onClick={nextStep}>Submit</Button>
    </div>
)};

export default ConfirmDetails;
