import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Footer from './Footer';
import ContactForm from './ContactForm';
import StripeFinished from './StripeSubmitted';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/stripefinished" element={<StripeFinished />} /> {/* Fixed this line */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
