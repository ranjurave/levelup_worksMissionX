import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes >
          <Route path='/' exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//TODO from 45.00 minutes
//TODO optimise button.js
