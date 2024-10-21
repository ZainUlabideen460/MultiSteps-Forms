import React, {useState, useEffect } from 'react';
import logo from '../Image/figma-logo.webp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Freelancerfile from './Freelancerfile';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputComp from './InputComp';
import copylinklogo from '../Image/copy-link-logo.png'
import { Button } from '@mui/material'
import Handlechangeeffect from './Handlechangeeffect';
const Stepno5 = ({ name, applies, setapplies, formdata, setformdata }) => {
        React.useEffect(() => {
          try {
            const savedApplies = localStorage.getItem('loadingTourApplies');
            if (savedApplies) {
              const parsedApplies = JSON.parse(savedApplies);
              if (!applies || applies.length === 0 || JSON.stringify(applies) !== savedApplies) {
                setapplies(parsedApplies);
              }
            }
          } catch (error) {
            console.error("Error loading saved selections:", error);
          }
        }, []);
        // React.useEffect(() => {
        //   if (applies && applies.length > 0) {
        //     try {
        //       localStorage.setItem('loadingTourApplies', JSON.stringify(applies));
        //     } catch (error) {
        //       console.error("Error saving selections:", error);
        //     }
        //   }
        // }, [applies]);
      
        const handleTeamChange = (event, newValues) => {
          setapplies(newValues || []);
          setformdata(prev => ({
            ...prev,
            applieserror: !newValues || newValues.length === 0
          }));
          if (newValues && newValues.length > 0) {
            localStorage.setItem('loadingTourApplies', JSON.stringify(newValues));
          }
          setformdata({
            applieserror: false
          })
        };
      
        const options = [
          "Just checking things out",
          "Looking for new work tool",
          "Using it for fun",
          "Using it for school",
          "Setting it up for my team",
          "Starting a new job or project",
          "Other"
        ];
      
        return (
          <div>
            <Handlechangeeffect applies={applies}/>
            <Box sx={{
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Box sx={{
                width: { lg: '50%', xs: "auto" },
                display: 'flex',
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "40px",
                paddingLeft: "70px",
              }}>
                <Box sx={{ paddingTop: "70px" }}>
                  <img src={logo} alt="logo" height="50px" width="50px" />
                </Box>
                <Box>
                  <Typography sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: "#333333",
                    textAlign: "start",
                  }}>
                    What brings you to Figma today?
                  </Typography>
                  <Typography sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    textAlign: "start",
                    paddingTop: "15px",
                    color: "gray"
                  }}>
                    Select everything that applies
                  </Typography>
                </Box>
                <Box>
                 
                  <ToggleButtonGroup
                    value={applies || []}
                    onChange={handleTeamChange}
                    aria-label="work selection"
                    sx={{ display: 'flex', flexWrap: 'wrap', paddingX: "20px" }}
                    multiple
                  >
                    {options.map((option, index) => (
                      <ToggleButton
                        key={option}
                        value={option}
                        sx={{
                          border: "2px solid #ccc",  
                          borderRadius: "10px",
                          paddingLeft: "10px",
                          marginBottom: "10px",  
                          marginRight: "10px",   
                          fontSize: "15px",
                          fontWeight: 500,
                          '&:not(:first-of-type)': {
                            borderLeft: '2px solid #ccc',
                            borderRadius: '3px',
                          },
                          '&.Mui-selected': {
                            border: "2px solid #1976d2",  
                            backgroundColor: '#e3f2fd',
                          },
                          '&.Mui-selected + .Mui-selected': {
                            borderLeft: "2px solid #1976d2", 
                          },
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                          }
                        }}
                      >
                        {option}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                  {(formdata.applieserror || (!applies || applies.length === 0)) && (
                    <Typography sx={{ color: "red", marginTop: "10px" }}>
                      Please select at least one option
                    </Typography>
                  )}
                </Box>
              </Box>
      
              <Box sx={{
                backgroundColor: "#F1F1F1",
                width:{lg:"50%",xs:"100%"},
                height: "100vh",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Freelancerfile name={name} />
              </Box>
            </Box>
          </div>
        );
      }

export default Stepno5
