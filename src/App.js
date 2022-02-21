import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/HomePage';
import Quotes from './pages/QuotesPage';
import './styles/app.css';

const App = () => (
  <div className="App">
    <nav>
      <ul className="nav">
        <li id="logo"> Math Magicians </li>
        <ul className="nav nav-child">
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/calculator"> Calculator </Link></li>
          <li><Link to="/quote"> Quote </Link></li>
        </ul>
      </ul>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<Quotes />} />
      </Routes>
    </main>
  </div>
);

export default App;
