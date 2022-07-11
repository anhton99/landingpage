import React from 'react';
import {Box} from '@mui/material';

function About() {
  // backgroundColor: "#ede7f6"
  return (
      <Box sx={{backgroundColor: "#ede7f6", paddingTop: "20px", paddingBottom: "40px"}}>
      <Box sx={{ flexGrow: 1, color: "#800080", margin: "auto", width: "90%"}}>

      <p style={{ marginTop: "40px", fontWeight: "600", fontSize: "40px" }}>Về DPZ</p>
      <p style={{ fontWeight: "400", fontSize: "20px" }}>DpZ cung cấp giải pháp dữ liệu thông minh dựa trên những công nghệ ưu việt
        để tiếp sức cho sự đột phá của các doanh nghiệp.Chúng tôi tăng cường hệ thống của bạn,
        giúp các phòng nhóm cộng tác dễ dàng cung cấp dịch vụ trải nghiệp khách hàng tốt hơn.
      </p>
    </Box>

    {/* <Box sx={{ flexGrow: 1, border: "solid #ede7f6", color: "#800080", marginLeft: "35px", width: "70%", margin: "auto"}}>
        <Grid container spacing={1} columns={12}>
          <Grid item xs sx={{margin: "20px auto", boxSizing: "border-box"}}>
            <p><span style={{fontSize: "60px", fontWeight: "bold"}}>3</span><br />
            <span style={{fontSize: "20px"}}>năm nghiên cứu <br /> và phát triển</span></p>
          </Grid>
          <Grid item xs sx={{margin: "20px auto", boxSizing: "border-box"}}>
            <p><span style={{fontSize: "60px", fontWeight: "bold"}}>50</span><br />
            <span style={{fontSize: "20px"}}>khách hàng<br />doanh nghiệp</span></p>
          </Grid>
          <Grid item xs sx={{margin: "20px auto", boxSizing: "border-box"}}>
            <p><span style={{fontSize: "60px", fontWeight: "bold"}}>60</span><br />
            <span style={{fontSize: "20px"}}>đối tác trong<br /> và ngoài nước</span></p>
          </Grid>
        </Grid>
      </Box> */}
    </Box>


  )
}

export default About