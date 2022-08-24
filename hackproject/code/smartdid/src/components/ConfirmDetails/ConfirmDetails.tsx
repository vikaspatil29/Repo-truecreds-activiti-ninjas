import React, { FC } from 'react';
import styles from './ConfirmDetails.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

interface ConfirmDetailsProps {
  handleNext: any,
  verifiedData: any
}

const ConfirmDetails: FC<ConfirmDetailsProps> = (props) => {

  const nextStep = () => {
    props.handleNext(1);
  }

  console.log(props.verifiedData);

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
          <Button variant="contained"  color="success" endIcon={<SendIcon />} onClick={nextStep}>Complete</Button>
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
               value={props.verifiedData.college_state.value}
               defaultValue="State"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="collegeName"
               label="College Name"
               value={props.verifiedData.college_name.value}
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
               value={props.verifiedData.first_name.value}
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
               value={props.verifiedData.last_name.value}
               defaultValue="Doe"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="dob"
               label="Date of Birth"
               value={props.verifiedData.date_of_birth.value}
               defaultValue="01/01/1999"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="ssn"
               label="SSN"
               value={props.verifiedData.social_security_number.value}
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
               value = {props.verifiedData.address.value}
               defaultValue="1234, new streat, city, state, 60000"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="email"
               label="Email"
               value = {props.verifiedData.email.value}
               defaultValue="email"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
             <TextField
               id="phone"
               label="Phone"
               value = {props.verifiedData.phone.value}
               defaultValue="000-000-0000"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
             />
        </Box>
     </div>
)};

export default ConfirmDetails;
