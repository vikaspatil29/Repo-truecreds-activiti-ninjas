import React, { FC, useState, useEffect, SetStateAction } from 'react';
import styles from './QrVerification.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box/Box';
import axios from 'axios';

const sharedVerifiedData = React.createContext('');

interface QrVerificationProps {
  setVerifiedData: any
}

const QrVerification: FC<QrVerificationProps> = (props) => 
{

  const baseApiUrl = 'http://localhost:3001/';
  // const nextStep = () => {
  //   props.handleNext(1);
  // }

  const [img, setImg] = useState<string>();

  const fetchImage = async () => {
    const res = await fetch(baseApiUrl+'getVerifyInviteURL');
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
    const resp = await axios.get(baseApiUrl+'getVerifyRelationshipDid');
    const verifiedData = await axios.post(baseApiUrl+'verifyCredentials', {"relationshipDid": resp.data.relationshipDid})
    console.log(verifiedData);
    if(verifiedData.data.verification_result == 'ProofValidated')
    {
      props.setVerifiedData(verifiedData.data.requested_presentation.revealed_attrs);
      //nextStep();
    }
    else
    {
      console.log('Verification Failed!')
    }
    
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return(
    <div className={styles.QrVerification}>
      QrVerification Component
      <article className={styles.QrImage}>

      {/* <img src={`/images/${imageName}`} /> */}
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
    </div>
  );
}


export default QrVerification;
