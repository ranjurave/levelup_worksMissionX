import React from 'react'
import './StudentProfiles.css'

function StudentIndividualProfile(props) {
  return (
    <div className="student">
        <img src="images/Aiden Andrews/Ellipse 38.png" alt="Ellipse"/>
        <h5>{props.Name}</h5>
  </div>
  )
}

export default StudentIndividualProfile