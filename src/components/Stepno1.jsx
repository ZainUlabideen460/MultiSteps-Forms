import React, {useState, useEffect } from 'react';
import logo from '../Image/figma-logo.webp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Freelancerfile from './Freelancerfile';
import InputComp from './InputComp';
import Handlechangeeffect from './Handlechangeeffect';

const Stepno1 = ({ name, setName, formdata, setformdata, checked, setChecked  }) => {
 
    React.useEffect(() => {
        const StoreName = localStorage.getItem('loadingTourStep1');
        const StoreCheack = localStorage.getItem('loadingToureCheck');
        if (StoreName) {
          setName(StoreName)
        }
        if (StoreCheack === "true") {
          setChecked(true)
        }
    
      }, [])
    
    //   React.useEffect(() => {
    //     if (name) {
    //       localStorage.setItem('loadingTourStep1', name);
    //     }
    //     if (checked) {
    //       localStorage.setItem('loadingToureCheck', checked.toString());
    //     }
    //   }, [name, checked])
    
    
      const handleChangeCheck = (event) => {
        setChecked(event.target.checked);
        setformdata({
          nameerror: false
        });
      };
      const handleChange = (e) => {
        setName(e.target.value);
        setformdata({
          nameerror: false
        });
    
      };
    
      return (
        <div>
             <Handlechangeeffect  setName={setName} setChecked={setChecked} />
          <Box>
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
                paddingLeft: { lg: "70px", xs: "10px" },
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
                    color: "#333333"
                  }}>What is Your Name?</Typography>
                  <Typography sx={{ fontSize: "15px", fontWeight: "500", paddingTop: "15px", color: "gray" }}>This is how you'll show up in the Figma file</Typography>
                </Box>
                <Box>
                    
                  <InputComp sx={{ width: { lg: "550px", xs: "300px"  } }}
                    label="Name"
                    variant="outlined"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                  />
                  {
                    formdata.nameerror && <>
                   <Typography sx={{ color: "red" }}>please write name</Typography></>
                  }
                </Box>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start"
                }}>
                  <Box sx={{ display: "flex" }}> <Checkbox
                    checked={checked}
                    onChange={handleChangeCheck}
                    inputProps={{ 'aria-label': 'controlled checkbox' }}
                  />
                    {/* {checked ? "Checked" : "Unchecked"} */}
                    <p>Subscribe to Figma tips and updates</p>
                  </Box>
                  {formdata.checkboxerror && <Typography sx={{ color: "red" }}>please fill the box</Typography>}
                  <Typography sx={{ width: "80%", textAlign: 'start', fontSize: "13px", color: "gray" }}>
                    By opting in, you are consenting to receive product, service, and
                    event updates from Figma. You can unsubscribe at any time.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{
                backgroundColor: "#F1F1F1",
                width: { lg: "50%", xs: "100%" },
                height: "100vh",
                // padding:'20px',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Freelancerfile name={name} />
              </Box>
            </Box>
          </Box>
        </div>
      );
    }
    

export default Stepno1;
