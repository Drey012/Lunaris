import React, { useEffect } from 'react';
import './css/global.scss';
import Header from './js/header';
import Content from './js/content';
import { ThemeProvider } from './js/themeContext.jsx';
import Footer from './js/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
      easing: 'ease-in-out', 
      mirror: true, 
    });
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
