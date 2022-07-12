import axios from "axios";
import { useState } from 'react';
import './StudentProfiles.css'
import './TeacherBodySection.css'
import StudentIndividualProfile from "./StudentIndividualProfile";

function StudentProfiles() {
  const [studentList, setStudentList] = useState([]);
  axios.get("http://localhost:3001/students").then((response)=>{
    console.log(response);
    setStudentList(response.data);
  });

  const StudentElement = studentList.map((student)=>{
    return <StudentIndividualProfile
    key={student.id}
    {...student}
    />;
  } )

  return (
    <>
      <div className='contents'>
        <div className='contents-inner'>
          <div className='contents-list'>
              {StudentElement}
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentProfiles