import React, {useState, useEffect } from 'react';
import logo from '../Image/figma-logo.webp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Freelancerfile from './Freelancerfile';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Handlechangeeffect from './Handlechangeeffect';
const Stepno3 = ({ name, team, setteam, formdata, setformdata }) => {
    
        React.useEffect(() => {
          const StoreTeamData = localStorage.getItem('LodingTourTeam');
          if (StoreTeamData) {
            setteam(StoreTeamData);
          }
        }, []);
      
        // React.useEffect(() => {
        //   if (team) {
        //     localStorage.setItem('LodingTourTeam', team);
        //   }
        // }, [team]);
      
        const handleTeamChange = (event) => {
          setteam(event.target.value);
          setformdata({
            teamerror: false,
          });
        };
        return (
          <div>\
            <Handlechangeeffect team={team} />
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
                      textAlign: 'start',
                    }}
                  >
                    What do you usually <br />
                    collaborate with?
                  </Typography>
                  <Typography
                    sx={{ fontSize: '15px', fontWeight: '500', paddingTop: '15px', color: 'gray' }}
                  >
                    Select just one to describe your team
                  </Typography>
                </Box>
                <Box>
                  <ToggleButtonGroup
                    value={team}
                    exclusive
                    onChange={handleTeamChange}
                    aria-label="team selection"
                    sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width: "80%", }}
                  >
                    {[
                      'Students and educator',
                      'Teammates',
                      'Clients',
                      'Nobody(just me)',
                    ].map((option) => (
                      <ToggleButton
                        key={option}
                        value={option}
                        aria-label={option}
                        sx={{
                          color: 'black',
                          fontSize: '15px',
                          fontWeight: '700',
                          textTransform: 'unset',
                          border: '2px solid #ccc', 
                          borderRadius: '8px',      
                          padding: '10px 15px',     
                          '&:not(:first-of-type)': {
                            borderLeft: '2px solid #ccc',
                            borderRadius: '3px',
                          },
                          '&.Mui-selected': {
                            backgroundColor: '#e3f2fd',  
                            border: '2px solid #1976d2', 
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
                  {formdata.teamerror && (
                    <Typography sx={{ color: 'red' }}>Please select your team</Typography>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: '#F1F1F1',
                  width: { lg: "50%", xs: "auto" },
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

export default Stepno3
