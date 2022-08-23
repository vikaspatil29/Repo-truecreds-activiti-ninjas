import Button from '@mui/material/Button/Button';
import React, { FC } from 'react';
import styles from './Complete.module.css';

interface CompleteProps {
  handleNext: any
}

const Complete: FC<CompleteProps> = (props) => 
{

  const nextStep = () => {
    props.handleNext(2);
  }

  return (
  <div className={styles.Complete}>
    Complete Component
    <Button variant="contained"  onClick={nextStep}>Complete</Button>
  </div>
)};

export default Complete;
