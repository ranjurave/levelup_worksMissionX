import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TeacherPage/>} />  
          <Route path="/TeacherPage" element={<TeacherPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
