import React from 'react';
import Calculator from './components/Calculator'; 
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center' }} >
    <h1>Scientific Calculator</h1>
      <Calculator /> 
      {/* Render the Calculator component */}
    </div>
  );
}

export default App;
