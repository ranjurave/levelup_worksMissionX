import React from 'react'
import axios from "axios";
import { useState } from 'react';
import './ProgressTracker.css'
import './TeacherBodySection.css';
import StudentProgress from './StudentProgress';

function ProgressTracker() {

  const [projectsComplted, setProjectsCompleted] = useState({
    name:"",
    projectsComplted:0,
    projectsList:[]
  });
  const [progress, setProgress] = useState([projectsComplted]);
  
  axios.get("http://localhost:3001/progress").then((response)=>{
    console.log(response);
    setProgress(response.data);
  });

  const ProgressElement = progress.map((progress)=>{
    
    return <StudentProgress
    key={progress.id}
    {...progress}
    />;
  } )

  return (
    <>
      <div className='contents'>
          <div className='contents-inner'>
            <div className='contents-heading'>
            <h1>BEGINNER COURSE</h1>
            <h3>EXPORT AS SPREADSHEET</h3>
            </div>
            <div className='contents-list'>
              {ProgressElement}
              {/* <div className='student-progress'>
                <div className='student-details'>
                  <h4>COURTNEY BRISTOL</h4>
                  <h6>1/15 Projects Completed</h6>
                </div>
                <div className='project-details'>
                  <div className='project-button'>
                    1
                  </div>
                  <div className='project-button'>
                    2
                  </div>
                  <div className='project-button'>
                    3
                  </div>
                  <div className='project-button'>
                    4
                  </div>
                  <div className='project-button'>
                    5
                  </div>
                  <div className='project-button'>
                    6
                  </div>
                  <div className='project-button'>
                    7
                  </div>
                  <div className='project-button'>
                    8
                  </div>
                  <div className='project-button'>
                    9
                  </div>
                  <div className='project-button'>
                    10
                  </div>
                  <div className='project-button'>
                    11
                  </div>
                  <div className='project-button'>
                    12
                  </div>
                  <div className='project-button'>
                    13
                  </div>
                  <div className='project-button'>
                    14
                  </div>
                  <div className='project-button'>
                    15
                  </div>
                </div>
              </div>
              <div className='student-progress'>
                <div className='student-details'>
                  <h4>AIDEN ANDREWS</h4>
                  <h6>4/15 Projects Completed</h6>
                </div>
                <div className='project-details'>
                  <div className='project-button'>
                    1
                  </div>
                  <div className='project-button'>
                    2
                  </div>
                  <div className='project-button'>
                    3
                  </div>
                  <div className='project-button'>
                    4
                  </div>
                  <div className='project-button'>
                    5
                  </div>
                  <div className='project-button'>
                    6
                  </div>
                  <div className='project-button'>
                    7
                  </div>
                  <div className='project-button'>
                    8
                  </div>
                  <div className='project-button'>
                    9
                  </div>
                  <div className='project-button'>
                    10
                  </div>
                  <div className='project-button'>
                    11
                  </div>
                  <div className='project-button'>
                    12
                  </div>
                  <div className='project-button'>
                    13
                  </div>
                  <div className='project-button'>
                    14
                  </div>
                  <div className='project-button'>
                    15
                  </div>
                </div>
              </div>
              <div className='student-progress'>
                <div className='student-details'>
                  <h4>COURTNEY BRISTOL</h4>
                  <h6>1/15 Projects Completed</h6>
                </div>
                <div className='project-details'>
                  <div className='project-button'>
                    1
                  </div>
                  <div className='project-button'>
                    2
                  </div>
                  <div className='project-button'>
                    3
                  </div>
                  <div className='project-button'>
                    4
                  </div>
                  <div className='project-button'>
                    5
                  </div>
                  <div className='project-button'>
                    6
                  </div>
                  <div className='project-button'>
                    7
                  </div>
                  <div className='project-button'>
                    8
                  </div>
                  <div className='project-button'>
                    9
                  </div>
                  <div className='project-button'>
                    10
                  </div>
                  <div className='project-button'>
                    11
                  </div>
                  <div className='project-button'>
                    12
                  </div>
                  <div className='project-button'>
                    13
                  </div>
                  <div className='project-button'>
                    14
                  </div>
                  <div className='project-button'>
                    15
                  </div>
                </div>
              </div>
              <div className='student-progress'>
                <div className='student-details'>
                  <h4>AIDEN ANDREWS</h4>
                  <h6>4/15 Projects Completed</h6>
                </div>
                <div className='project-details'>
                  <div className='project-button'>
                    1
                  </div>
                  <div className='project-button'>
                    2
                  </div>
                  <div className='project-button'>
                    3
                  </div>
                  <div className='project-button'>
                    4
                  </div>
                  <div className='project-button'>
                    5
                  </div>
                  <div className='project-button'>
                    6
                  </div>
                  <div className='project-button'>
                    7
                  </div>
                  <div className='project-button'>
                    8
                  </div>
                  <div className='project-button'>
                    9
                  </div>
                  <div className='project-button'>
                    10
                  </div>
                  <div className='project-button'>
                    11
                  </div>
                  <div className='project-button'>
                    12
                  </div>
                  <div className='project-button'>
                    13
                  </div>
                  <div className='project-button'>
                    14
                  </div>
                  <div className='project-button'>
                    15
                  </div>
                </div>
              </div>
              <div className='student-progress'>
                <div className='student-details'>
                  <h4>COURTNEY BRISTOL</h4>
                  <h6>1/15 Projects Completed</h6>
                </div>
                <div className='project-details'>
                  <div className='project-button'>
                    1
                  </div>
                  <div className='project-button'>
                    2
                  </div>
                  <div className='project-button'>
                    3
                  </div>
                  <div className='project-button'>
                    4
                  </div>
                  <div className='project-button'>
                    5
                  </div>
                  <div className='project-button'>
                    6
                  </div>
                  <div className='project-button'>
                    7
                  </div>
                  <div className='project-button'>
                    8
                  </div>
                  <div className='project-button'>
                    9
                  </div>
                  <div className='project-button'>
                    10
                  </div>
                  <div className='project-button'>
                    11
                  </div>
                  <div className='project-button'>
                    12
                  </div>
                  <div className='project-button'>
                    13
                  </div>
                  <div className='project-button'>
                    14
                  </div>
                  <div className='project-button'>
                    15
                  </div>
                </div>
              </div> */}
              </div>
          </div>
      </div>
    </>
  )
}

export default ProgressTracker