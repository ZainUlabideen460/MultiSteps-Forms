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
import { Button } from '@mui/material';
import Handlechangeeffect from './Handlechangeeffect';
const Stepno4 = ({name, emailOne, emailTwo, emailThree, setemailOne, setemailTwo, setemailThree, formdata, setformdata }) => {

        const copyLink = "https://mui.com/material-ui/react-button-group/";
      
        const handleCopyLink = () => {
          navigator.clipboard.writeText(copyLink);
        };
        React.useEffect(() => {
          const storeEmailOne = localStorage.getItem('loadingTourEmailOne');
          const storeEmailTwo = localStorage.getItem('loadingTourEmailTwo');
          const storeEmailThree = localStorage.getItem('loadingTourEmailThree');
          if (storeEmailOne) {
            setemailOne(storeEmailOne)
          }
          if (storeEmailTwo) {
            setemailTwo(storeEmailTwo)
          }
          if (storeEmailThree) {
            setemailThree(storeEmailThree)
          }
        }, []);
        // React.useEffect(() => {
        //   if (emailOne) {
        //     localStorage.setItem('loadingTourEmailOne', emailOne);
        //   }
        //   if (emailTwo) {
        //     localStorage.setItem('loadingTourEmailTwo', emailTwo);
        //   }
        //   if (emailThree) {
        //     localStorage.setItem('loadingTourEmailThree', emailThree);
        //   }
        // }, [emailOne, emailTwo, emailThree])
        
        const handleChangeone = (e) => {
          setemailOne(e.target.value); 
          setformdata({
            emailOneerror: false,
          });
        };
        
        const handleChangetwo = (e) => {
          setemailTwo(e.target.value); 
          setformdata({
            emailTwoerror: false,
          })
        };
        
        const handleChangethree = (e) => {
          setemailThree(e.target.value); 
          setformdata({
            emailThreeerror: false,
          });
        };
      
        return (
          <div>
            <Handlechangeeffect emailOne={emailOne} emailTwo={emailTwo} emailThree={emailThree}/>
            <Box>
              <Box sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Box sx={{
                  width: { lg: "50%", xs: "100%" },
                  display: 'flex',
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "40px",
                  paddingLeft: { lg: "70px", xs: "20px" },
      
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
                      color: "#333333", textAlign: "start",
                    }}>What to Invite <br /> some corllaborators? </Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: "500", paddingTop: "15px", color: "gray" }}>
                      invite them to your to Design,brainstrom,and build together</Typography>
                  </Box>
                  <Box>
               
                    <InputComp
                      type="email"
                      placeholder="sneha@example.com"
                      label="Email Address"
                      value={emailOne}
                      onChange={handleChangeone}
                    />
      
                    {
                      formdata.emailOneerror && <Typography sx={{ color: "red" }}>Please enter a valid email</Typography>
                    }
                  </Box>
                  <Box>
                    <InputComp sx={{ width: { lg: "530px", xs: "300px" } }}
                      label="oscar@example.com"
                      variant="outlined"
                      type="email"
                      placeholder="oscar@example.com"
                      value={emailTwo}
                      onChange={handleChangetwo}
                    />
                    {
                      formdata.emailTwoerror && <Typography sx={{ color: "red" }}>Please enter a valid email</Typography>
                    }
                  </Box>
                  <Box>
                    <InputComp sx={{ width: { lg: "530px", xs: "300px" } }}
                      label="molly@example.com"
                      variant="outlined"
                      type="email"
                      placeholder="molly@example.com"
                      value={emailThree}
                      onChange={handleChangethree}
                    />
                    {
                      formdata.emailThreeerror && <Typography sx={{ color: "red" }}>Please enter a valid email</Typography>
                    }
                  </Box>
                  <Box sx={{
                    marginTop: "-2rem"
                  }}>
                    <Button sx={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#1976d2",
                      textTransform: "unset"
                    }} onClick={handleCopyLink}><img src={copylinklogo} alt='upload-logo' height="20px" />  Copy link to Invite</Button>
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
            </Box>
          </div>
        )
      }
export default Stepno4
