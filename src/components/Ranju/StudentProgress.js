import axios from 'axios';
import React, { useState } from 'react'
import './ProgressTracker.css'
import './TeacherBodySection.css';
import ProjectSubmissionStatus from './ProjectSubmissionStatus';

function StudentProgress(props) {
  const [studentProgressList, setStudentProgressList] = useState([]);
  axios.get("http://localhost:3001/progress").then((response)=>{
    //console.log(response);
    setStudentProgressList(response.data);
  });

  // const ProgressElement = studentProgressList.map((StudentProgress)=>{
  //   return <StudentIndividualProfile
  //   key={StudentProgress.id}
  //   {...StudentProgress}
  //   />;
  // } )

  return (
    <ProjectSubmissionStatus/>
    // <div className='student-progress'>
    //   <div className='student-details'>
    //     <h4>Aiden Andrews</h4>
    //     <h6>4/15 Projects Completed</h6>
    //   </div>
    //   <div className='project-details'>
    //     <div className='project-button-complete'>
    //       1
    //     </div>
    //     <div className='project-button'>
    //       2
    //     </div>
    //     <div className='project-button'>
    //       3
    //     </div>
    //     <div className='project-button'>
    //       4
    //     </div>
    //     <div className='project-button'>
    //       5
    //     </div>
    //     <div className='project-button'>
    //       6
    //     </div>
    //     <div className='project-button'>
    //       7
    //     </div>
    //     <div className='project-button'>
    //       8
    //     </div>
    //     <div className='project-button'>
    //       9
    //     </div>
    //     <div className='project-button'>
    //       10
    //     </div>
    //     <div className='project-button'>
    //       11
    //     </div>
    //     <div className='project-button'>
    //       12
    //     </div>
    //     <div className='project-button'>
    //       13
    //     </div>
    //     <div className='project-button'>
    //       14
    //     </div>
    //     <div className='project-button'>
    //       15
    //     </div>
    //   </div>
    // </div>
  )
}

export default StudentProgress