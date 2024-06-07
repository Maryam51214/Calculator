import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch {
        setExpression('Error');
      }
  } else if (value === '√') {               
      try {
        const result = Math.sqrt(parseFloat(expression));
        setExpression(result.toString());
      } catch {
        setExpression('Error');
      }
    } else if (value === '^2') {
      try {
        const result = Math.pow(parseFloat(expression), 2);
        setExpression(result.toString());
      } catch {
        setExpression('Error');
      }
    } else if (value === '^3') {               
      try {
        const result = Math.pow(parseFloat(expression), 3);
        setExpression(result.toString());
      } catch {
        setExpression('Error');
      }
    } else  if (value === 'C') {
        setExpression('');
      } else if (value === '←') {
        setExpression(expression.slice(0, -1)); 
      } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <input className="display" type="text" value={expression} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('√')}>√</button>
        <button onClick={() => handleClick('^2')}>^2</button>
        <button onClick={() => handleClick('^3')}>^3</button>
        <br></br>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('←')}>←</button>
      </div>
    </div>
  );
}

export default Calculator;
