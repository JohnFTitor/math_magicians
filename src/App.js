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
          <li><Link to="/math_magicians"> Home </Link></li>
          <li><Link to="/math_magicians/calculator"> Calculator </Link></li>
          <li><Link to="/math_magicians/quote"> Quote </Link></li>
        </ul>
      </ul>
    </nav>
    <main>
      <Routes>
        <Route path="math_magicians" element={<Home />} />
        <Route path="math_magicians/calculator" element={<CalculatorPage />} />
        <Route path="math_magicians/quote" element={<Quotes />} />
      </Routes>
    </main>
  </div>
);

export default App;
