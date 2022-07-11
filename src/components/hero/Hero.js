import React from 'react';
import hero_img from '../../images/hero_img.jpeg'
import {Grid, Button, Stack, Box, Typography } from '@mui/material'
import logo from '../../images/logodpz_big.png'

function Hero() {
  return (
    <Box mb={10}>
      <Box>
        <Typography variant="h4" sx={{ 
              paddingTop: "60px",
              color: "#800080",
              minwidth: "500px",
              paddingLeft: "40px",
              paddingBottom: "0",
              textTransform: 'uppercase',
              fontWeight: '500'
              }}>Giải pháp dữ liệu cho mọi doanh nghiệp </Typography>
      </Box>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={5}>
          <div style={{ margin: "70px 0px 0px 50px"}} >
            <p style={{textAlign: "left"}}>
              <div>
                <img src={logo} alt="logo" style={{width: "50%", height: "50%"}} />
              </div> 
            </p>
            <Stack spacing={2} direction="row" sx={{ marginTop: "30px"}}>
              <Button variant="contained" color="secondary">Về chúng tôi</Button>
              <Button variant="outlined" color="secondary">Yêu Cầu Demo</Button>
            </Stack>
          </div>
        </Grid>
        <Grid item xs={7}>
          <img src={hero_img} 
               alt="hero" 
               style={{display: "flex", 
                       height: "60%",
                       width: "100%",
                       margin: "70px 0px 10px 0px",
                      }} />
        </Grid>
      </Grid>
    </Box>

  )
}

export default Hero