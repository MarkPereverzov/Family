import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Screenshots from './pages/Screenshots/Screenshots';
import Gallery from './pages/Gallery/Gallery';
import Sidebar from './widgets/Sidebar/Sidebar';
import Plans from './pages/Plans/Plans';
import Video from './pages/Video/Video';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />


        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
