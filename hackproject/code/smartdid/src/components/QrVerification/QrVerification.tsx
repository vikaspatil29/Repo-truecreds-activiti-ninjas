import React, { FC, useState, useEffect, SetStateAction } from 'react';
import styles from './QrVerification.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box/Box';
import axios from 'axios';


interface QrVerificationProps {
  handleNext: any
}

const QrVerification: FC<QrVerificationProps> = (props) => 
{

  const baseApiUrl = 'http://localhost:3001/';
  const nextStep = () => {
    props.handleNext(1);
  }

  const [img, setImg] = useState<string>();

  const fetchImage = async () => {
    const res = await fetch(baseApiUrl+'getVerifyInviteURL');
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
    axios.get(baseApiUrl+'getVerifyRelationshipDid').then(data => {
      console.log(data);
    })
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
      <Button variant="contained"  onClick={nextStep}>Verify</Button>
    </div>
  );
}


export default QrVerification;
