import React, { FC, useState } from 'react';
import styles from './Applicant.module.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ApplicantLanding from '../ApplicantLanding/ApplicantLanding';
import QrVerification from '../QrVerification/QrVerification';
import ConfirmDetails from '../ConfirmDetails/ConfirmDetails';

interface ApplicantProps {}

const Applicant: FC<ApplicantProps> = () => {
  const [verifiedData, setVerData] = useState<any>();
  const [isMilitary, setMilitaryFlag] = useState<boolean>(false);
  const steps = ['Start Your Student Loan Application', 'Verify Your Digital Credentials', 'Find Your Loan Status'];

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
    setVerData(dataFromQrCode);
    setActiveStep(2);
  }

  const renderStepContent = (step: Number) => {
    switch (step) {
      case 0:
        return <ApplicantLanding firstStepComplete={firstStepComplete} />;
      case 1:
        return <QrVerification setVerifiedData={setVerifiedData}  isApplicant={true} isMilitary={isMilitary} />;
      case 2:
        return <ConfirmDetails handleNext={handleNext} verifiedData={verifiedData} />;
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

export default Applicant;
