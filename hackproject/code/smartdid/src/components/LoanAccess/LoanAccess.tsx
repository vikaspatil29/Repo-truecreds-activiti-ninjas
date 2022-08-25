import Button from '@mui/material/Button/Button';
import React, { FC, useRef, useState } from 'react';
import styles from './LoanAccess.module.css';
import Box from '@mui/material/Box/Box';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from '@mui/material/TextField/TextField';
import Typography from '@mui/material/Typography/Typography';

interface LoanAccessProps {
  firstStepComplete: any
}

const LoanAccess: FC<LoanAccessProps> = (props) => {

  const nextStep = () => {
    props.firstStepComplete(checked);
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = event => {
    setTextInput(event.target.value);
};



  return (
    <Box className={styles.boxContainer} sx={{boxShadow: 1}}>
      <article>
      <Typography variant="h5" noWrap>
          Co-Sign an existing loan application
        </Typography>
      </article>
      <article>
      <TextField id="standard-basic" label="Enter Loan number" variant="standard" value= {textInput} onChange= {handleTextInputChange}/>
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
