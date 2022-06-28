import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgressTrackerPage from './pages/ProgressTrackerPage';
import StudentProfilePage from './pages/StudentProfilePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProgressTrackerPage/>} />  
          <Route path="/ProgressTrackerPage" element={<ProgressTrackerPage/>} />
          <Route path="/StudentProfilePage" element={<StudentProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
