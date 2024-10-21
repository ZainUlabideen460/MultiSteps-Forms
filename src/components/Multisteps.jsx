import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stepsconfig from './Stepsconfig';

// Styled Linear Progress
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}));

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [team, setteam] = useState('');
  const [emailOne, setemailOne] = useState('');
  const [emailTwo, setemailTwo] = useState('');
  const [emailThree, setemailThree] = useState('');
  const [choosePlan, setchoosePlan] = useState('');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const [applies, setapplies] = useState(() => {
    try {
      const savedApplies = localStorage.getItem('loadingTourApplies');
      return savedApplies ? JSON.parse(savedApplies) : [];
    } catch (error) {
      console.error("Error loading saved selections:", error);
      return [];
    }
  });
  const [figmaProduct, setfigmaProduct] = useState('');
  const [formdata, setformdata] = useState({
    nameerror: false,
    checkboxerror: false,
    workerror: false,
    teamerror: false,
    applieserror: false,
    figmaerror: false,
    emailOneerror: false,
    emailTwoerror: false,
    emailThreeerror: false,
    errorChosePlane: false,
  });
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  React.useEffect(() => {
    const savestep = localStorage.getItem('landingTourStep')
    if (savestep) {
      setStep(parseInt(savestep))
      console.log(savestep)
    }

  }, [])

  // Handle step progress
  const handleNext = () => {
    if (step === 1) {
      if (!name) {
        setformdata({
          nameerror: true,
        })
        return;

      }
      if (!checked) {
        setformdata({
          checkboxerror: true
        })
        return;
      }
    }
    if (step === 2) {
      if (!work) {
        setformdata({
          workerror: true
        })

        return;
      }
    }
    if (step === 3) {
      if (!team) {
        setformdata({
          teamerror: true
        })
        return;
      }
    }

    if (step === 4) {
      const emailErrors = [];
      if (!emailOne || !emailRegex.test(emailOne)) {
        emailErrors.push('emailOneerror');
      }
      if (!emailTwo || !emailRegex.test(emailTwo)) {
        emailErrors.push('emailTwoerror');
      }
      if (!emailThree || !emailRegex.test(emailThree)) {
        emailErrors.push('emailThreeerror');
      }
      if (emailErrors.length > 0) {
        setformdata((prev) => ({
          ...prev,
          emailOneerror: emailErrors.includes('emailOneerror'),
          emailTwoerror: emailErrors.includes('emailTwoerror'),
          emailThreeerror: emailErrors.includes('emailThreeerror'),
        }));
        return;
      }
    }
    if (step === 5) {
      if (applies.length === 0) {
        setformdata({
          applieserror: true
        })
        return;
      }
    }
    if (step === 6) {
      if (!figmaProduct) {
        setformdata({
          figmaerror: true
        })
        return;
      }
    }
    if (step === 7) {
      if (!choosePlan) {
        setformdata({
          errorChosePlane: true
        })
      }

    }
    if (step < 7) {
      setStep(step + 1);
      localStorage.setItem('landingTourStep', step);
    }
    else if (step === 7) {
      localStorage.setItem('landingTourCompleted', 'landingTourCompleted');
      handleOpen();
    }
  };
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Render step content based on current step
  const renderStepContent = () => {
    const StepComponent = Stepsconfig[step - 1]?.component;
    const stepProps = {
      ...Stepsconfig[step - 1]?.props,
      name,
      setName,
      checked,
      setChecked,
      work,
      setWork,
      team,
      setteam,
      emailOne,
      setemailOne,
      emailTwo,
      setemailTwo,
      emailThree,
      setemailThree,
      applies,
      setapplies,
      figmaProduct,
      setfigmaProduct,
      choosePlan,
      setchoosePlan,
      formdata,
      setformdata,
    };

    return StepComponent ? <StepComponent {...stepProps} /> : null;
  };
  const progress = (step / 7) * 100;

  return (
    <Box>

      <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Stack spacing={2} sx={{ flexGrow: 1, width: { lg: "20%", xs: "70%" }, marginX: { lg: "10rem", xs: "4rem" }, marginBottom: "-3rem" }}>
          <BorderLinearProgress variant="determinate" value={progress} />
        </Stack>
        <br />
        {renderStepContent()

        }
        <Stack direction="row" spacing={2} sx={{ marginTop: "1rem", marginLeft: "3rem", marginBottom: "2rem" }}>
          <Button variant="contained" disabled={step === 1} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {step === 7 ? 'Submit' : 'Next'}
          </Button>
        </Stack>
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            textAlign: 'center',
            p: 4,
          }}>
            <Typography sx={{
              fontWeight: 'bold',
            }} id="modal-modal-title" variant="h5" component="h2">
              Wellcome to Figma
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              You just Duplicated the file from the community! To get started, let us show you some of the things that
              make Figma spacial and different form other design tools.
            </Typography>
            <Button onClick={() => navigate('/home')} sx={{ backgroundColor: "black", color: "white", padding: "10px", marginTop: "10px", }}>ok</Button>
            <Typography sx={{
              marginTop: "10px",
              fontWeight: 'bold',
            }}>No,Thanks</Typography>
          </Box>
        </Modal>
      </div>
    </Box>
  );
}
