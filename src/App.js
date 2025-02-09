import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Personal from './pages/Personal/Personal';
import Cart from './pages/Cart/Cart';

function App() {

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul>
            <li className="navbar-main"><Link to="/">Main</Link></li>
            <li className="navbar-about"><Link to="/About">About</Link></li>
            <li className="navbar-shop"><Link to="/Shop">Shop</Link></li>
            <li className="navbar-personal"><Link to="/Personal">Personal Test</Link></li>
            <li className="navbar-cart"><Link to="/Cart">Cart</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Personal" element={<Personal/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
