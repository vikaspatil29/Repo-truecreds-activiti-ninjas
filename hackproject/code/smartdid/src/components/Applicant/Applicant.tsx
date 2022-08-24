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
  const steps = ['Apply', 'Verify', 'Submit'];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        return <ApplicantLanding handleNext={handleNext} />;
      case 1:
        return <QrVerification setVerifiedData={setVerifiedData} />;
      case 2:
        return <ConfirmDetails handleNext={handleNext} verifiedData={verifiedData} />;
      default:
        return <div>Not Found</div>;
    }
  };

return (
  <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
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
