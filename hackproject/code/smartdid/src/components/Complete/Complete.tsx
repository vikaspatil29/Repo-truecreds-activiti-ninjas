import Button from '@mui/material/Button/Button';
import React, { FC } from 'react';
import styles from './Complete.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';

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
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '25ch' },
             p: 1,
             m: 5,
//              justifyContent: 'center',
//              border: '1px solid grey',
             boxShadow: 1,
          }}
          noValidate
          autoComplete="off" >
          Congratulations. <b>Loan Application 12345</b> is approved. Now you can download the Digital Student Loan Certificates into your Digital Wallet app.

          <Button variant="contained"  endIcon={<SendIcon />} onClick={nextStep}>Complete</Button>

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
          <h2>CoSigner Details</h2>
           <TextField
               id="fname"
               label="First name"
               defaultValue="Mike"
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
               id="ssn"
               label="SSN"
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
           <h4> Contact Details</h4>
             <TextField
               id="address"
               label="Address"
               defaultValue="1234, new streat, city, state, 60000"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="country"
               label="Country of Residence"
               defaultValue="USA"
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
           <h4> Income Details</h4>
             <TextField
               id="employmentStatus"
               label="Employment Status"
               defaultValue="full time employed"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="grossAnnualIncome"
               label="Gross Annual Income"
               defaultValue="Amount"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="monthlyHousingPayment"
               label="Monthly Housing Payment"
               defaultValue="Amount"
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
               id="ssn"
               label="SSN"
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
           <h4> Contact Details</h4 >
             <TextField
               id="address"
               label="Address"
               defaultValue="1234, new streat, city, state, 60000"
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
        </Box>
  </div>
)};

export default Complete;
