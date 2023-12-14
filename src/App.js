JS

import React from 'react';
import './App.css';
import PiggyLogo from './Piggylogo.png'; // Importing the image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={PiggyLogo} alt="Logo" className="App-logo" />
      </header>
      <section className="App-content">
        <h2>The Future of Logistics</h2>
      </section>
      <section className="App-coming-soon">
        <p>Coming Soon...</p>
      </section>
      <footer className="App-footer">
        <p>© Piggybackit 2024</p>
      </footer>
    </div>
  );
}

export default App;
