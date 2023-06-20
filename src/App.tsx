import React from 'react';
import logo from './logo.svg';
import './App.css';

// center button, click and displays ayah from Quran
// need to send HTTP GET request to Quran API
// need to display ayah in arabic and english
// need to display ayah number, surah number and name, juz number
// need to display if sajda is required

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <div className="AyahDisplay">
        <button>Choose an Ayah</button>
      </div>


    </div>
  );
}

export default App;
