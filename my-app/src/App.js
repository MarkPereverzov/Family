import React from 'react';
import './App.css';
import Sidebar from './widgets/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Screenshots from './pages/Screenshots/Screenshots';
import Plans from './pages/Plans/Plans';
import  Links from './containers/Links/Links'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Links />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
