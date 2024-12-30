import React from 'react';
import NavBar from '../components/NavBar';
import Content from '../components/Content';
import Service from '../components/service';
import Temoignage from '../components/temoignage';
import About from '../components/about';
import Footer from '../components/footer';




const Principale = () => {
  return (
    <>
   
      <NavBar />
      <Content />
      <Service />
      <Temoignage />
      <About />
      
      <Footer />
    </>
  );
}

export default Principale;