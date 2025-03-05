import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Personal from './pages/Personal/Personal';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li className="navbar-main">
              <Link to="/">
                <p className="navbar-main-logoText"><span className="navbar-main-logoText-span">P</span>ersonal</p>
              </Link></li>
            <li className="navbar-about"><Link to="/About">About</Link></li>
            <li className="navbar-personal"><Link to="/Personal">Personal Test</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Personal" element={<Personal />} />
        </Routes>

        <footer className="footer-container">
          <p className="footer-text">© 2025.02 Choi Jiyoung Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
