import React, { FC, useState, useEffect, SetStateAction } from 'react';
import styles from './LoanDetails.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box/Box';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const sharedVerifiedData = React.createContext('');

interface LoanDetailsProps {
//   setLoanData: any
}

const LoanDetails: FC<LoanDetailsProps> = (props) =>
{
  const baseDfsLoanApiUrl = 'http://localhost:3003/';
  const baseVerifyApiUrl = 'http://localhost:3002/';

  const [img, setImg] = useState<string>();

  const handleGetLoanDetails = async () => {
    console.log("Inside handleGetLoanDetails")

    //Fetch Loan Details
    const loanDetailsRes = await axios.get(baseDfsLoanApiUrl+'main');
    console.log(loanDetailsRes.data)

    //Verification
    const res = await fetch(baseVerifyApiUrl+'getVerifyInviteURL');

    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);

    const resp = await axios.get(baseVerifyApiUrl+'getVerifyRelationshipDid');
    const verifiedData = await axios.post(baseVerifyApiUrl+'issueCreds',
                    {"relationshipDid": resp.data.relationshipDid,"credentialData":loanDetailsRes.data})
    //Test
//     const verifiedData = await axios.post(baseVerifyApiUrl+'issueCreds',
//                     {"relationshipDid": resp.data.relationshipDid,
//                     "credentialData":{"first_name":"test",
//                                         "last_name":"test",
//                                         "address":"address",
//                                         "zipcode":"60000",
//                                          "phone":"30012312222",
//                                          "email":"test@test.com",
//                                           "college_name":"test college",
//                                           "college_state":"IL",
//                                           "college_course_name":"PHD",
//                                           "college_couse_type":"PHD",
//                                           "ssn":"1231233211",
//                                           "dod_id":"12121",
//                                           "affiliation":"test",
//                                           "benefits_number":"2323test",
//                                           "rank":"high",
//                                           "date_of_birth":"12-12-2000",
//                                           "active_duty_indicator":"N",
//                                            "discover_account_no":"12121212121212",
//                                            "discover_account_type":"loan"}})
    console.log(verifiedData);

  };

//   useEffect(() => {
//     handleGetLoanDetails();
//   }, []);

  return(
          <Box sx={{p: 1,m: 1, justifyContent: 'space-evenly', boxShadow: 1}}>
              <TextField
                required
                id="loanID"
                name="Loan ID"
                label="Loan ID"
                variant="standard"
              />
              <Button variant="contained"  onClick={handleGetLoanDetails}>Get Loan Details</Button>
         <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '15ch' },
             p: 5,
             m: 5,
             justifyContent: 'space-evenly'
          }}
          autoComplete="off" >
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
                             defaultValue="amount"
                             InputProps={{
                               readOnly: true,
                             }}
                             variant="standard"
                        />
                      <article className={styles.QrImage}>
                        <Box
                          component="img"
                          sx={{
                            height: 300,
                            width: 350,
                            maxHeight: { xs: 400 },
                            maxWidth: { xs: 400 },
                          }}
                          alt="QR Code"
                          src={`${img}`}
                        />
                          </article>
                         </Box>
             </Box>
  );
}


export default LoanDetails;
