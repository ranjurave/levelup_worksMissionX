import { Link } from 'react-router-dom';
import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
  <>
    <div className='body'>
        <div className='links'>
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
        <div className='contents'>
            <div className='contents-inner'>
                BodySection
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection