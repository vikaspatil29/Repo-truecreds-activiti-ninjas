import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';

export default function LoanDetails() {

  const handleGetLoanDetails = () => {
    console.log("inside handleGetLoanDetails");
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              id="loanID"
              name="Loan ID"
              label="Loan ID"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button variant="contained"  color="success" endIcon={<SendIcon />} onClick={handleGetLoanDetails}>Get Loan Details</Button>
          </Box>
          </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
               id="firstname"
               label="First Name"
               defaultValue="John"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
               id="lastname"
               label="Last Name"
               defaultValue="Doe"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
               id="college"
               label="College Name"
               defaultValue="University of Illinois"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
               id="loanAmount"
               label="Loan Amount"
               defaultValue="amount"
               InputProps={{
                 readOnly: true,
               }}
               variant="standard"
          />
        </Grid>

      <Grid item xs={12}>
            QRCODE
      </Grid>

      </Grid>
    </React.Fragment>
  );
}