import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import './styles/app.css';

const App = () => (
  <main className="App">
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/calculator"> Calculator </Link>
      <Link to="/quote"> Quote </Link>
    </nav>
    <Routes>
      <Route path="calculator" element={<Calculator />} />
    </Routes>
  </main>
);

export default App;
