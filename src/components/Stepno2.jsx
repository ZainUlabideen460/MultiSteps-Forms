import React, {useState, useEffect } from 'react';
import logo from '../Image/figma-logo.webp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Freelancerfile from './Freelancerfile';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Handlechangeeffect from './Handlechangeeffect';


const Stepno2 = ({ name, work, setWork, formdata, setformdata}) => {
    React.useEffect(() => {
        const Storework = localStorage.getItem('landingToureWork');
        if (Storework) {
          setWork(Storework);
        }
      }, []);
    //   React.useEffect(() => {
    //     if (work) {
    //       localStorage.setItem('landingToureWork', work);
    //     }
    //   }, [work]);
    
      const handleWorkChange = (event) => {
        setWork(event.target.value);
        setformdata({
          workerror: false,
        });
      };
    
      return (
        <div>
            <Handlechangeeffect work={work}/>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: '40px',
                paddingLeft: { lg: '70px', xs: "20px" },
                width:"50%",
               
              }}
            >
              <Box sx={{ paddingTop: '70px' }}>
                <img src={logo} alt="logo" height="50px" width="50px" />
              </Box>
    
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: 600,
                    color: '#333333',
                  }}
                >
                  What kind of work do you do?
                </Typography>
              </Box>
    
              <Box sx={{ width: { lg: "65%", xs: "100%" } }}>
                <ToggleButtonGroup
                  value={work}
                  exclusive
                  onChange={handleWorkChange}
                  aria-label="work selection"
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingX: '20px',
                  }}
                >
                  {[
                    'Product management',
                    'User research',
                    'Educator',
                    'Software development',
                    'Student',
                    'Design',
                    'Marketing',
                    'Other',
                  ].map((option) => (
                    <ToggleButton
                      key={option}
                      value={option}
                      sx={{
                        color: 'black',
                        fontSize: '15px',
                        fontWeight: '700',
                        textTransform: 'unset',
                        border: '2px solid gray', 
                        borderRadius: '10px',
                        marginBottom: '10px',
                        marginRight: '10px', 
                        '&:not(:first-of-type)': {
                          borderLeft: '2px solid gray',
                          borderRadius: '3px',
                        },
                        '&.Mui-selected': {
                          backgroundColor: 'lightgray', 
                          border: '2px solid #1976d2', 
                        },
                        '&.Mui-selected + .Mui-selected': {
                          borderLeft: '2px solid #1976d2', 
                        },
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                      }}
                    >
                      {option}
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
                {formdata.workerror && (
                  <Typography sx={{ color: 'red' }}>please select your work</Typography>
                )}
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: '#F1F1F1',
                width: { lg: "50%", xs: "100%" },
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Freelancerfile name={name} />
            </Box>
          </Box>
        </div>
      );
    }

export default Stepno2;
