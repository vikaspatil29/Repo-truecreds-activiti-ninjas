import Button from '@mui/material/Button/Button';
import React, { FC } from 'react';
import styles from './LoanAccess.module.css';
import Box from '@mui/material/Box/Box';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from '@mui/material/TextField/TextField';
import Typography from '@mui/material/Typography/Typography';

interface LoanAccessProps {
  handleNext: any
}

const LoanAccess: FC<LoanAccessProps> = (props) => {
  
let loanId = '';

  const nextStep = () => {
    props.handleNext(1);
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };



  return (
    <Box className={styles.boxContainer}>
      <article>
      <Typography variant="h5" noWrap>
          Co-Sign an existing loan application
        </Typography>
      </article>
      <article>
      <TextField id="standard-basic" label="Enter Loan number" variant="standard" value={loanId} />
      </article>
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

export default LoanAccess;
