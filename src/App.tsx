import React from 'react';
import './App.css';
import './api'
import Display from './components/Display';

// center button, click and displays ayah from Quran
// need to send HTTP GET request to Quran API
// need to display ayah in arabic and english
// need to display ayah number, surah number and name, juz number
// need to display if sajda is required

function App() {
  return (
    <div><Display/></div>
  );
}

export default App;
