import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Herosection from './components/herosection';
import Navebar from './components/Navebar';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import { Toaster } from "react-hot-toast";

export const App=()=> {
  return <Router>
    <Navebar />
    <Herosection />
    <Services />
    <About />
    <Contact />
    <Footer />
    <Toaster />
  </Router>;
}

