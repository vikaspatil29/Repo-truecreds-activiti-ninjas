import React, { FC, useState } from 'react';
import styles from './Cosigner.module.css';
import QrVerification from '../QrVerification/QrVerification';
import LoanAccess from '../LoanAccess/LoanAccess';
import Complete from '../Complete/Complete';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CosignerProps {}

const Cosigner: FC<CosignerProps> = () => {
  
  const steps = ['CoSign a Student Loan Application ', 'Verify Your Digital Credentials', 'Find the Student Loan Status'];
  const [isMilitary, setMilitaryFlag] = useState<boolean>(false);
  let verifiedData:any;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const firstStepComplete = (isMil) => {
    setMilitaryFlag(isMil);
    setActiveStep(1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const setVerifiedData = (dataFromQrCode) => {
    verifiedData = dataFromQrCode;
  }

  const renderStepContent = (step: Number) => {
    switch (step) {
      case 0:
        return <LoanAccess firstStepComplete={firstStepComplete} />;
      case 1:
        return <QrVerification setVerifiedData={setVerifiedData} isApplicant={false} isMilitary={isMilitary} />;
      case 2:
        return <Complete handleNext={handleNext} />;
      default:
        return <div>Not Found</div>;
    }
  };
return (
  <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{
    "& .MuiStepConnector-line": {
      borderTopWidth: "4px",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },
    "& .MuiStepLabel-Label": {
      fontSize: "1.2rem",
    },
    "& .MuiStepLabel-alternativeLabel":
    {
      fontSize: "1.2rem",
    }
 }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {} = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {renderStepContent(activeStep)}
        </React.Fragment>
      )}
    </Box>
)};

export default Cosigner;
