import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Teacher from './components/Teacher';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Teacher/>
      </Router>
    </div>
  );
}

export default App;
