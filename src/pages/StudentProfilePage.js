import React from 'react';
import '../components/TeacherPage.css';
import '../components/StudentProfiles.css';
import Navbar from '../components/Navbar';
import TeacherPageLinks from '../components/TeacherPageLinks';
import StudentProfiles from '../components/StudentProfiles';

function StudentProfilePage() {
  return (
    <>
      <Navbar></Navbar>
      <div className='body'>
          <TeacherPageLinks></TeacherPageLinks>
          <StudentProfiles></StudentProfiles>
      </div>
    </>
  )
}

export default StudentProfilePage