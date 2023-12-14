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
        <div className="circle-container">
          <div className="circle-text">
            <p></p>
          </div>
          <div className="coming-soon">Coming Soon</div>
        </div>
      </section>
      <footer className="App-footer">
        <p>© Piggybackit 2024</p>
      </footer>
    </div>
  );
}

export default App;
