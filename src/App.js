import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home'; 
import Footer from './Footer'; 
import ContactForm from './ContactForm';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
