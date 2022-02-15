import React from 'react';
import Calculator from '../components/Calculator';
// Styles
import '../styles/calculatorPage.css';

const CalculatorPage = () => (
  <div className="calculator-parent">
    <h1> Let&apos;s do some math! </h1>
    <Calculator />
  </div>
);

export default CalculatorPage;
