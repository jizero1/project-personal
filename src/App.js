import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
