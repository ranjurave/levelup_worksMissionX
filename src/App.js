import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <HeroSection/>
      </Router>
    </div>
  );
}

export default App;
