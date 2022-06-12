import { Link } from 'react-router-dom';
import React from 'react'
import './TeacherPage.css'
import TeacherLinks from './TeacherPageLinks';
import ProgressTracker from './ProgressTracker';
import StudentProfiles from './StudentProfiles';

function TeacherPage() {
  return (
  <>
    <div className='body'>
        <TeacherLinks></TeacherLinks>
        {/* Comment and uncomment 'ProgressTracker' and 'StudentProfiles' below, to load the pages manually */}
        <ProgressTracker></ProgressTracker>
        {/* <StudentProfiles></StudentProfiles> */}
    </div>
    </>
  )
}

export default TeacherPage