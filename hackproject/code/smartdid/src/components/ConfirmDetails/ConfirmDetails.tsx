import React, { FC } from 'react';
import styles from './ConfirmDetails.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ConfirmDetailsProps {
  handleNext: any
}

const ConfirmDetails: FC<ConfirmDetailsProps> = (props) => {

  const nextStep = () => {
    props.handleNext(1);
  }

  return(
       <div className={styles.ConfirmDetails}>

         <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25ch' },
             p: 1,
             m: 5,
             justifyContent: 'space-evenly',
//              border: '1px solid grey',
             boxShadow: 1,
          }}
          noValidate
          autoComplete="off" >
          Thank you for your <b>Loan Application 12345</b>.  We need a CoSigner for your application to complete the loan.

          <b>CoSignerKey 4321</b> please share this Key with your CoSigner to resume your application.

          </Box>


         <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25ch' },
             p: 1,
             m: 5,
             justifyContent: 'space-evenly',
//              border: '1px solid grey',
             boxShadow: 1,
          }}
          noValidate
          autoComplete="off" >
        <h2>College Details</h2>
        <TextField
               id="collegeState"
               label="College State"
               defaultValue="State"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="collegeName"
               label="College Name"
               defaultValue="College Name"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="loanType"
               label="Loan Type"
               defaultValue="Undergraduate Loan"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
        </Box>

         <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25ch' },
             p: 1,
             m: 5,
             justifyContent: 'space-evenly',
//              border: '1px solid grey',
             boxShadow: 1,
          }}
          noValidate
          autoComplete="off" >
          <h2>Student Details</h2>
           <TextField
               id="fname"
               label="First name"
               defaultValue="John"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
              <TextField
                id="mname"
                label="Middle name"
                defaultValue=""
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
             <TextField
               id="lname"
               label="Last name"
               defaultValue="Doe"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="dob"
               label="Date of Birth"
               defaultValue="01/01/1999"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="address"
               label="Address"
               defaultValue="Hello World"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="country"
               label="Country"
               defaultValue="Country"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="email"
               label="Email"
               defaultValue="email"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="phone"
               label="Phone"
               defaultValue="000-000-0000"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="citizenship"
               label="Citizenship"
               defaultValue="U.S. Citizen"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
        </Box>

        <Button variant="contained"  onClick={nextStep}>CLOSE</Button>
     </div>
)};

export default ConfirmDetails;
