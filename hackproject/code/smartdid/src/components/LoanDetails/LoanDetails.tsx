import React, { FC, useState, useEffect, SetStateAction } from 'react';
import styles from './LoanDetails.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box/Box';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle/AlertTitle';

const sharedVerifiedData = React.createContext('');

interface LoanDetailsProps {
//   setLoanData: any
}

const LoanDetails: FC<LoanDetailsProps> = (props) =>
{
  const baseDfsLoanApiUrl = 'http://localhost:3003/';
Fix  const baseVerifyApiUrl = 'http://localhost:3002/';

  const [img, setImg] = useState<string>();

  const [showLoanDetails, setShowLoanDetails] = useState<boolean>(false);
  //showSuccess
  const [showSuccess, setshowSuccess] = useState<boolean>(false);
  const handleGetLoanDetails = async () => {
    console.log("Inside handleGetLoanDetails")

    //Fetch Loan Details
    const loanDetailsRes = await axios.get(baseDfsLoanApiUrl+'main');
    console.log(loanDetailsRes.data)
    setShowLoanDetails(true);
    //Verification
    const res = await fetch(baseVerifyApiUrl+'getVerifyInviteURL');

    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);

    const resp = await axios.get(baseVerifyApiUrl+'getVerifyRelationshipDid');
    const verifiedData = await axios.post(baseVerifyApiUrl+'issueCreds',
                    {"relationshipDid": resp.data.relationshipDid,"credentialData":loanDetailsRes.data});

    console.log(verifiedData);
    setImg(null);
    setshowSuccess(true);
  };

//   useEffect(() => {
//     handleGetLoanDetails();
//   }, []);

  return(
          <Box className={styles.boxContainer}>
            <article>
            <TextField
                required
                id="loanID"
                name="Loan ID"
                label="Loan ID"
                variant="standard"
              />
              <Button variant="contained" sx={{mt:1.7, ml:3}}  onClick={handleGetLoanDetails}>Get Loan Details</Button>
            </article>
          {
            showLoanDetails ? <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 4, width: '15ch' },
               p: 5,
               m: 5,
               justifyContent: 'space-evenly'
            }}
            autoComplete="off" >
            <Box
            component="form"
            sx={{
               p: 1,
               justifyContent: 'space-evenly',
  //              border: '1px solid grey',
               boxShadow: 1,
            }}
            noValidate
            autoComplete="off">
            <TextField
                              id="firstname"
                              label="First Name"
                              defaultValue="John"
                              InputProps={{
                                readOnly: true,
                              }}
                              variant="standard"
                         />
                          <TextField
                               id="lastname"
                               label="Last Name"
                               defaultValue="Doe"
                               InputProps={{
                                 readOnly: true,
                               }}
                               variant="standard"
                          />
                          <TextField
                               id="college"
                               label="College Name"
                               defaultValue="University of Illinois"
                               InputProps={{
                                 readOnly: true,
                               }}
                               variant="standard"
                          />
                          <TextField
                               id="loanAmount"
                               label="Loan Amount"
                               defaultValue="50000.00 USD"
                               InputProps={{
                                 readOnly: true,
                               }}
                               variant="standard"
                          />
            </Box> 
                        {img ? <article className={styles.QrImage}>
                          <Box
                            component="img"
                            sx={{
                              height: 300,
                              width: 350,
                              maxHeight: { xs: 400 },
                              maxWidth: { xs: 400 },
                            }}
                            className={styles.ImageToScan}
                            alt="QR Code"
                            src={`${img}`}
                          />
                            </article> :  <article>{showSuccess ? <Alert severity="success">
            <AlertTitle sx={{textAlign: 'left'}}>Digital Credentials Issued</AlertTitle>
              <strong>Congratulations!</strong> Digital Credentials are issued by Discover for your loan.
          </Alert> : <span>Loading QR code</span>}</article>}

                           </Box> : <span></span>
          }   
         
             </Box>
  );
}


export default LoanDetails;
