import React from 'react';
import logo from '../Image/figma-logo.webp'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getByDisplayValue } from '@testing-library/react';
import clickimg from '../Image/click-mouse-logo.png'

const Freelancerfile = ({ name }) => {
  return (
    <Box
   sx={{
    backgroundColor:"white",
    height:"60%",
    width:"80%",
    borderRadius:"10px",
    marginTop:"30px"

   }}
    > 
        <Box  sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding: '10px',
        paddingX:"10px"
     
    }}>
            <Box>
                <img src={logo} alt="Figma Logo" height="30px" />
            </Box>
            <Box><Typography>My first Freelancer File</Typography></Box>
            <Box sx={{
                height: '30px',
                width: '30px',
                borderRadius: '50%',
                backgroundColor: '#FF6347',
                color:"white",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '600',
            }}>M</Box>
        </Box>
<Box sx={{
    padding: '10px',
    paddingX:"30px",
    // backgroundColor: '#F1F1F1',
    display: 'flex',
    flexDirection: 'column',
  
    justifyContent:'center',
    alignItems: 'center',
    marginTop:"3rem"
   
   
 }}>
    <img src={clickimg} alt="" height="40px" /> 
     <Typography variant='body1' sx={{
        width:"auto",
        backgroundColor:"#FF6347",
        // padding:"2px 10px",
       fontSize:"25px",
       fontWeight:"600",
       color:"white",
       marginLeft:{md:"90px",xs:"20px"},
       marginTop:"10px"
     }}> {name}</Typography></Box>
   
    </Box>
  );
};

export default Freelancerfile;
