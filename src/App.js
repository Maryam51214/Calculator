import React from 'react';
import Calculator from './components/Calculator'; // Import the Calculator component
import './App.css'; // Import your CSS file for global styles

function App() {
  return (
    <div className="app">
      <h1>Scientific Calculator</h1>
      <Calculator /> {/* Render the Calculator component */}
    </div>
  );
}

export default App;
