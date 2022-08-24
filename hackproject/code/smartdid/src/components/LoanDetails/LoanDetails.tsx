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
  const baseApiUrl = 'http://localhost:3002/';

  const [img, setImg] = useState<string>();

  const handleGetLoanDetails = async () => {
      console.log("Inside handleGetLoanDetails")
    const res = await fetch(baseApiUrl+'getVerifyInviteURL');

    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);

    const resp = await axios.get(baseApiUrl+'getVerifyRelationshipDid');
    const verifiedData = await axios.post(baseApiUrl+'issueCreds',
                    {"relationshipDid": resp.data.relationshipDid,
                    "credentialData":{"first_name":"test",
                                        "last_name":"test",
                                        "address":"address",
                                        "zipcode":"60000",
                                         "phone":"30012312222",
                                         "email":"test@test.com",
                                          "college_name":"test college",
                                          "college_state":"IL",
                                          "college_course_name":"PHD",
                                          "college_couse_type":"PHD",
                                          "ssn":"1231233211",
                                          "dod_id":"12121",
                                          "affiliation":"test",
                                          "benefits_number":"2323test",
                                          "rank":"high",
                                          "date_of_birth":"12-12-2000",
                                          "active_duty_indicator":"N",
                                           "discover_account_no":"12121212121212",
                                           "discover_account_type":"loan"}})
    console.log(verifiedData);


//     if(verifiedData.data.verification_result == 'ProofValidated')
//     {
// //       props.setLoanData(verifiedData.data.requested_presentation.revealed_attrs);
//     }
//     else
//     {
//       console.log('Verification Failed!')
//     }

  };

//   useEffect(() => {
//     handleGetLoanDetails();
//   }, []);

  return(
    <div className={styles.QrVerification}>
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
            </Grid>
            </Grid>
          </React.Fragment>
    </div>
  );
}


export default LoanDetails;
