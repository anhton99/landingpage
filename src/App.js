import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import ProductInfo from './components/productInfo/ProductInfo';
import LinhVucApDung from './components/linhVucApDung/LinhVucApDung';
import DichVu from './components/DichVu/DichVu';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <CssBaseline /> 
            <Header />
            <Hero />
            <About /> 
            <ProductInfo /> 
            <DichVu /> 
            <LinhVucApDung /> 
            <Partners /> 
            <Footer />            
    </ThemeProvider>
  );
}

export default App;