import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { FC } from 'react';
import styles from './ApplicantLanding.module.css';

interface ApplicantLandingProps {
  firstStepComplete: any
}

const ApplicantLanding: FC<ApplicantLandingProps> = (props) => {
  
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  const nextStep = () => {
    props.firstStepComplete(checked);
  }

  return (
    <Box className={styles.boxContainer} sx={{boxShadow: 1}}>
      <article>
      <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label="Military / Other Benefits eligibility" />
      </article>
      <article>
      <Button variant="contained" onClick={nextStep}>START HERE</Button>
      </article>
      
    </Box>
)};

export default ApplicantLanding;
