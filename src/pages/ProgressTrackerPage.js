import React from 'react';
// import '../components/TeacherPage.css';
import '../components/ProgressTracker.css';
import Navbar from '../components/Navbar';
import TeacherPageLinks from '../components/TeacherPageLinks';
import ProgressTracker from '../components/ProgressTracker';

function ProgressTrackerPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className='body'>
          <TeacherPageLinks></TeacherPageLinks>
          <ProgressTracker></ProgressTracker>
      </div>
    </>
  )
}

export default ProgressTrackerPage