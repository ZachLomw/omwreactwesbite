import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home'; // Adjust the path as necessary
import Contact from './Contact'; // Adjust the path as necessary
import Footer from './Footer'; // Ensure Footer is imported

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Other routes can be added here as needed */}
      </Routes>
      <Footer /> {/* Footer added here */}
    </Router>
  );
}

export default App;
