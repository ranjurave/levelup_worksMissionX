import { Link } from 'react-router-dom';
import React, {useState, MouseEvent} from 'react'
import './TeacherPageLinks.css'

function TeacherPageLinks() {
  return(
    <>
        <div className='links'>
            <div className='link-contents'>
            <div className='link-profile'>
                <Link to="/" className="links-logo">
                    <img src="images/Ellipse 38/Ellipse 38.png" alt="Ellipse"/>
                </Link>
            </div>
            <a href='/' className='link-item'>
                <img src="images/Progress light/Progress light.png" alt="progress"/> 
                PROGRESS TRACKER
            </a>
            <a href='/' className='link-item'>
                <img src="images/Icon awesome-user-graduate/Icon awesome-user-graduate.png" alt="progress"/>
                STUDENT PROFILES
            </a>
            <a href='/' className='link-item'>
                <img src="images/Icon material-live-help/Icon material-live-help.png" alt="progress"/>
                HELP REQUESTS
            </a>
            <a href='/' className='link-item'>
                <img src="images/submit proj/submit proj.png" alt="progress"/>
                PROJECT SUBMISSIONS
            </a>
            <a href='/' className='link-item'>
                <img src="images/library light/library light.png" alt="progress"/>
                PROJECT LIBRARY
            </a>
            </div>
            <div className='link-bottom-buttons'>
                <div>
                    <img src="images/Icon awesome-user-circle/Icon awesome-user-circle@2x.png" alt="profile"/>
                    Profile
                </div>
                <div>
                    <img src="images/Icon material-settings/Icon material-settings@2x.png" alt="profile"/>
                    Settings
                </div>
                <div>
                    <img src="images/Icon awesome-sign-out-alt/Icon awesome-sign-out-alt@2x.png" alt="profile"/>
                    Logout
                </div>
            </div>
        </div>
    </>
  )
}
export default TeacherPageLinks