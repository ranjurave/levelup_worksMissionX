import { Link } from 'react-router-dom';
import React from 'react'
import './TeacherSection.css'
import TeacherLinksSection from './TeacherLinksSection';
import TeacherProgressTracker from './TeacherProgressTracker';
import StudentProfiles from './StudentProfiles';
function TeacherSection() {
  return (
  <>
    <div className='body'>
        <TeacherLinksSection></TeacherLinksSection>
        <TeacherProgressTracker></TeacherProgressTracker>
        {/* <StudentProfiles></StudentProfiles> */}
    </div>
    </>
  )
}

export default TeacherSection