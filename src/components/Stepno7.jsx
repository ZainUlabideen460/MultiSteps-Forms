import React, {useState, useEffect } from 'react';
import logo from '../Image/figma-logo.webp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import tickIcone from '../Image/tick.png';
import Handlechangeeffect from './Handlechangeeffect';
const Stepno7 = ({ choosePlan, setchoosePlan, formdata, setformdata }) => {
  
        React.useEffect(() => {
          const StoreChoosePlan = localStorage.getItem('loadingTourChoosePlan');
      
          if (StoreChoosePlan) {
            setchoosePlan(StoreChoosePlan)
          }
        }, []);
        // React.useEffect(() => {
        //   if (choosePlan) {
        //     localStorage.setItem('loadingTourChoosePlan', choosePlan)
        //   }
        // }, [choosePlan])
        const handleStarter = () => {
          setchoosePlan("starter")
          setformdata({
            errorChosePlane: false
          })
        };
        const handleprofessional = () => {
          setchoosePlan("professional")
          setformdata({
            errorChosePlane: false
          })
        }
        const handleOrganization = () => {
          setchoosePlan("organization")
          setformdata({
            errorChosePlane: false
          })
        }

        return (
          <Box>
            <Handlechangeeffect choosePlan={choosePlan} />
            <Box sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
              paddingLeft: "80px",
            }}>
              <img src={logo} height="60px" width="50px" alt="upload logo" />
            </Box>
            <Box sx={{ marginX: "auto", fontWeight: "600", fontSize: "30px", paddingBottom: "20px" }}>
              Which plan would you like?
            </Box>
            <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Box onClick={handleStarter} sx={{
                width: '260px',
                height: "400px",
                border: "2px solid gray",
                borderRadius: "5px",
                backgroundColor: choosePlan === "starter" ? "#87CEEB" : "none"
              }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", textAlign: "start", paddingX: "15px", paddingTop: "20px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.3rem" }}>
                    <Box> <Typography sx={{ fontWeight: "700", fontSize: "20px" }} >Starter</Typography>
                      <Typography sx={{ color: "gray", fontSize: "13px" }}>for team typing Figma</Typography>
                    </Box>
                    <Box>
                      <Typography><span style={{ fontWeight: "600 " }}>Free</span>,but limited feature  </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid black" }}></div>
                  </Box>
                </Box>
                <hr style={{ width: "90%" }} />
                <Box sx={{ paddingLeft: "0.7rem", fontSize: "12px", fontWeight: "500", paddingTop: "1rem" }}>
                  <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" /> 1 project with 3 file</Box>
                  <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" /> Limited pages in file</Box>
                  <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />30-day version history</Box>
      
      
                </Box>
              </Box>
              {
                formdata.errorChosePlane && <p> please select</p>
              }
              <Box onClick={handleprofessional} sx={{
                width: '260px',
                height: "400px",
                border: "2px solid gray",
                borderRadius: "5px",
      
                // backgroundColor:'gray'
                backgroundColor: choosePlan === "professional" ? "#87CEEB" : "none"
              }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", textAlign: "start", paddingX: "15px", paddingTop: "20px" }}>
                  <Box>  <Typography sx={{ fontWeight: "700", fontSize: "20px" }} >Professional</Typography>
                    <Typography sx={{ color: "gray", fontSize: "13px" }}>for professional team</Typography>
      
                  </Box>
                  <Box>
                    <div onClick={handleprofessional} style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid black" }}></div>
                  </Box>
      
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", paddingX: "15px", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: "600" }}>Figma</Typography>
                    <Typography><span style={{ fontWeight: "600" }}>$12</span>/seat/mo</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: "600" }}>FigJam</Typography>
                    <Typography><span style={{ fontWeight: "600" }}>$3</span>/seat/mo</Typography>
                  </Box>
                </Box>
                <hr style={{ width: "90%" }} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }} >
                  <Box sx={{ paddingLeft: "0.7rem", fontSize: "12px", fontWeight: "500" }}>
                    <Box sx={{ display: "flex" }}><img src={tickIcone} alt="" height="20px" />Unlimited Projects</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" /> Unlimited Pages</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Unlimited file</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Unlimited version history</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Custom premissions</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Shareable team libraries</Box>
                  </Box>
                  <Box sx={{ fontWeight: "500" }}>
                    Free for Education when <span style={{ color: "blue" }}>verified</span>
                  </Box>
                </Box>
              </Box>
      
              <Box onClick={handleOrganization} sx={{
                width: '260px',
                height: "400px",
                border: "2px solid gray",
                borderRadius: "5px",
                // backgroundColor:'gray'
                backgroundColor: choosePlan === "organization" ? "#87CEEB" : "none"
              }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", textAlign: "start", paddingX: "15px", paddingTop: "20px" }}>
                  <Box>  <Typography sx={{ fontWeight: "700", fontSize: "20px" }} >Organiation</Typography>
                    <Typography sx={{ color: "gray", fontSize: "13px" }}>For bringing team together</Typography>
      
                  </Box>
                  <Box>
                    <div onClick={handleprofessional} style={{ width: "20px", height: "20px", borderRadius: "50%", border: "2px solid black" }}></div>
                  </Box>
      
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", paddingX: "15px", paddingTop: "1rem", paddingBottom: "1rem" }}>
                  <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: "600" }}>Figma</Typography>
                    <Typography><span style={{ fontWeight: "600" }}>$45</span>/seat/mo</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                    <Typography sx={{ fontWeight: "600" }}>FigJam</Typography>
                    <Typography><span style={{ fontWeight: "600" }}>$5</span>/seat/mo</Typography>
                  </Box>
                </Box>
                <hr style={{ width: "90%" }} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }} >
                  <Box sx={{ fontWeight: "600" }}>
                    Everything in Professional, plus
                  </Box>
                  <Box sx={{ paddingLeft: "0.7rem", fontSize: "12px", fontWeight: "500" }}>
                    <Box sx={{ display: "flex" }}><img src={tickIcone} alt="" height="20px" />Unlimited Projects</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" /> Unlimited Pages</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Unlimited file</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Unlimited version history</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Custom premissions</Box>
                    <Box sx={{ display: "flex", paddingTop: "3px" }}><img src={tickIcone} alt="" height="20px" />Shareable team libraries</Box>
                  </Box>
      
                </Box>
              </Box>
      
            </Box>
          </Box>
        )
      }

export default Stepno7
