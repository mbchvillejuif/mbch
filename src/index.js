import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './index.css';
import Principale from './screens/Principale';
import NavBar from './components/NavBar';
import Portfolio from './screens/Portfolio';
import Contact from './screens/Contact';
import send_msg from './php/send_msg.php';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <Link to="/">Principale</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/send_msg.php">php</Link>
      </nav>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Principale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/send_msg.php" element={<php />} />
      </Routes>
      <NavBar />
    </Router>
  </React.StrictMode>
);



