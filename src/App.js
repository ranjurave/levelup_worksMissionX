import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TeacherPage from './components/TeacherPage';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <TeacherPage/>
      </Router>
    </div>
  );
}

export default App;
