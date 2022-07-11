import React from 'react';
import { Grid, 
         Typography, 
         Box,
         Paper,
         styled
} from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
function ProductInfo() {
  const sectionItems = [
    {
      id: 1,
      icon: <CloudQueueOutlinedIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Truy cập Thế giới Dữ liệu và Dịch vụ',
      sentence:
        'Easily discover and securely share live governed data across your business, with your customers and business partners, and with any organization that is part of the Data Cloud.',
    },
    {
      id: 2,
      icon: <ShieldOutlinedIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Hệ thống quản trị và bảo mật dữ liệu hiện đại',
      sentence: 'Unify your data warehouses, data lakes, and other siloed data to comply with data privacy regulations such as GDPR and CCPA.'
    },
    {
      id: 3,
      icon: <ShowChartOutlinedIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Xây dựng và thúc đẩy doanh nghiệp của bạn phát triển với dữ liệu', 
      sentence: 'Democratize data analytics across your business so users at all levels and with varying expertise can make data-driven decisions. Create and run modern integrated data applications to best serve your customers, employees, or business partners.',
    },
    {
      id: 4,
      icon: <AllInclusiveIcon sx={{ fontSize: 50 }} color="secondary" />,
      name: 'Kết nối không giới hạn với nền tảng của DpZ', 
      sentence: 'Unify, integrate, analyze, and share previously siloed data with a near-zero management platform that delivers virtually unlimited scale and concurrency.',
    }
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderColor: '#ede7f6'
  }));


  return (
    <>
    {/* <Box sx={{ 
      flexGrow: 1, 
      border: "solid #ede7f6", 
      color: "#800080", 
      backgroundColor: "#ede7f6", padding: "20px"}}>

    <p style={{ marginTop: "40px", fontWeight: "600", fontSize: "40px" }}></p>
    </Box> */}
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff", paddingLeft: "40px", paddingRight: "40px" }} id="productinfo">
      <Box sx={{ margin: "30px auto" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }} alignItems="stretch">
          
          { sectionItems.map((item) => 
            (<Grid item 
                    xs={6}>
              <Item 
                elevation={0} 
                variant='outlined'
                sx={{
                  // backgroundColor: '#f2f0f1',
                  display: 'block',
                  minWidth: '200px',
                  borderRadius: '10px',
                  margin: '10px !important',
                  height: '100%',
                  // width: '40vw',
                  // height: '45vw',
                }}>
              {item.icon}
            <Typography color="secondary" fontWeight={500} fontSize={20}>{item.name}</Typography>
            <Typography>{item.sentence}</Typography>
              </Item>
            </Grid>))
          }
        </Grid>
      </Box>
    </Box>
    </>
  )
}

export default ProductInfo