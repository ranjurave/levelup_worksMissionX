import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TeacherSection from './components/TeacherSection';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <TeacherSection/>
      </Router>
    </div>
  );
}

export default App;
