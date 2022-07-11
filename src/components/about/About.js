import React from 'react';
import {Box} from '@mui/material';

function About() {
  return (
      <Box sx={{backgroundColor: "#ede7f6", paddingTop: "20px", paddingBottom: "40px"}} id="about">
      <Box sx={{ flexGrow: 1, color: "#800080", margin: "auto", width: "90%"}}>

      <p style={{ marginTop: "40px", fontWeight: "600", fontSize: "40px" }}>Về DPZ</p>
      <p style={{ fontWeight: "400", fontSize: "20px" }}>DpZ cung cấp giải pháp dữ liệu thông minh dựa trên những công nghệ ưu việt
        để tiếp sức cho sự đột phá của các doanh nghiệp.Chúng tôi tăng cường hệ thống của bạn,
        giúp các phòng nhóm cộng tác dễ dàng cung cấp dịch vụ trải nghiệp khách hàng tốt hơn.
      </p>
    </Box>
    </Box>


  )
}

export default About