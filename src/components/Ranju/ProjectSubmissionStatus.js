import React from 'react'
import './ProgressTracker.css'
import './TeacherBodySection.css';
import ProjectStatus from './ProjectStatus';

function ProjectSubmissionStatus() {
  return (
    <div className='student-progress'>
    <div className='student-details'>
      <h4>Aiden Andrews</h4>
      <h6>4/15 Projects Completed</h6>
    </div>
    <div className='project-details'>
      <ProjectStatus/>
      <div className='project-button-complete'>
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
  )
}

export default ProjectSubmissionStatus