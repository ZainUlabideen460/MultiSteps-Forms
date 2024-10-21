import React, {useState, useEffect } from 'react';
import logo from '../Image/figma-logo.webp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Freelancerfile from './Freelancerfile';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Handlechangeeffect from './Handlechangeeffect';

const Stepno6 = ({ name, figmaProduct, setfigmaProduct, formdata, setformdata }) => {
        React.useEffect(() => {
          const StoreFigmaProduct = localStorage.getItem('loadingTourFigmaProduct');
      
          if (StoreFigmaProduct) {
            setfigmaProduct(StoreFigmaProduct)
          }
      
        },[])
      
        // React.useEffect(() => {
        //   if (figmaProduct) {
        //     localStorage.setItem('loadingTourFigmaProduct', figmaProduct)
        //   }
        // }, [figmaProduct])
        const handleWorkChange = (event) => {
          setfigmaProduct(event.target.value);
          setformdata({
            figmaerror: false
          })
        };
        return (
          <div>
            <Handlechangeeffect figmaProduct={figmaProduct}/>
            <Box sx={{
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                gap: "40px",
                paddingLeft: "70px",
                height: '100vh',
              }}>
                <Box sx={{
                  paddingTop: "70px"
                }}>
                  <img src={logo} alt="logo" height="50px" width="50px" />
                </Box>
                <Box>
                  <Typography sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    color: "#333333",
                    textAlign:"start",
                  }}>Have you use figma <br />products before?</Typography>
                  <Typography sx={{ fontSize: "15px", fontWeight: "500", textAlign: "start", paddingTop: "15px", color: "gray" }}>
                    Select just one</Typography>
                </Box>
                <Box>
                  <Box>
                    {/* <ToggleButtonGroup
             value={figmaProduct}
             exclusive
             onChange={handleWorkChange}
             aria-label="work selection"
             sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', width:"80%" }}
           >
             <ToggleButton sx={{color:"black",fontSize:"15px",fontWeight:"700" ,textTransform:"unset"}} value="Yes,many times">Yes,many times</ToggleButton>
             <ToggleButton sx={{color:"black",fontSize:"15px",fontWeight:"700" ,textTransform:"unset",border:"2px solid red"}} value="Yes,a few times">Yes,a few times</ToggleButton>
             <ToggleButton sx={{color:"black",fontSize:"15px",fontWeight:"700" ,textTransform:"unset"}} value="No,its my first time">No,its my first time</ToggleButton>
           </ToggleButtonGroup> */}
      
                    <ToggleButtonGroup
                      value={figmaProduct}
                      exclusive
                      onChange={handleWorkChange}
                      aria-label="work selection"
                      sx={{ display: 'flex', flexWrap: 'wrap', width: { lg: "80%", xs: "100%" } }}
                    >
                      <ToggleButton
                        sx={{
                          color: "black",
                          fontSize: "15px",
                          fontWeight: "700",
                          textTransform: "unset",
                          marginTop: "10px",
                          border: "2px solid gray",  // Apply full border
                          marginRight: "10px",      // Spacing between buttons
                          '&:not(:first-of-type)': {
                            borderLeft: '2px solid gray', // Ensure left border isn't collapsed
                          },
                          '&.Mui-selected': {
                            backgroundColor: 'lightgray', // Maintain style for selected button
                          },
                        }}
                        value="Yes,many times"
                      >
                        Yes, many times
                      </ToggleButton>
      
                      <ToggleButton
                        sx={{
                          color: "black",
                          fontSize: "15px",
                          fontWeight: "700",
                          textTransform: "unset",
                          marginTop: "10px",
                          border: "2px solid gray",  // Apply full border
                          marginRight: "10px",      // Spacing between buttons
                          '&:not(:first-of-type)': {
                            borderLeft: '2px solid gray', // Ensure left border isn't collapsed
                          },
                          '&.Mui-selected': {
                            backgroundColor: 'lightgray', // Maintain style for selected button
                          },
                        }}
                        value="Yes,a few times"
                      >
                        Yes, a few times
                      </ToggleButton>
      
                      <ToggleButton
                        sx={{
                          color: "black",
                          fontSize: "15px",
                          fontWeight: "700",
                          textTransform: "unset",
                          border: "2px solid gray",
                          marginRight: "10px",
                          marginTop: "10px",
                          '&:not(:first-of-type)': {
                            borderLeft: '2px solid gray',
                          },
                          '&.Mui-selected': {
                            backgroundColor: 'lightgray',
                          },
                        }}
                        value="No,its my first time"
                      >
                        No, it's my first time
                      </ToggleButton>
                    </ToggleButtonGroup>
      
                    {
                      (formdata.figmaerror || figmaProduct === '') && (
                        <Typography sx={{ color: "red", marginTop: "10px" }}>
                          Please select one option
                        </Typography>
                      )
                    }
                  </Box>
                </Box>
              </Box>
              <Box sx={{
                backgroundColor: "#F1F1F1",
                width: { lg: "50%", xs: "100%" },
                height: "100vh",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Freelancerfile name={name} />
              </Box>
            </Box>
          </div>
        )
      }

export default Stepno6
