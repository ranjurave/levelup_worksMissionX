import { Link } from 'react-router-dom';
import React from 'react'
import './Teacher.css'
import TeacherLinks from './TeacherLinks';
import ProgressTracker from './ProgressTracker';
import StudentProfiles from './StudentProfiles';
function Teacher() {
  return (
  <>
    <div className='body'>
        <TeacherLinks></TeacherLinks>
        <ProgressTracker></ProgressTracker>
        {/* <StudentProfiles></StudentProfiles> */}
    </div>
    </>
  )
}

export default Teacher