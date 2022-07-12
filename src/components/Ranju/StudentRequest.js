import React from "react";
import "./StudentRequests.css";
import './TeacherBodySection.css'

function StudentRequest() {
  return (
    <div className='contents'> {/* new div added to make it compatible with mine */}
    <div className='contents-inner'> {/* new div added to make it compatible with mine */}
    <div className="body-section-req">
      <div className="student-req">
        <div className="right-btns">
          <button className="reply">
            <div className="reply-icon img-spacing"></div>
            <p>REPLY</p>
          </button>
          <button className="mark">
            <div className="mark-icon img-spacing"></div>
            <p>MARK AS DONE</p>
          </button>
        </div>
        <div className="req-box">
          <input type="checkbox" className="checkBox"></input>
          <div className="single-req"></div>
        </div>
        <div className="req-box">
          <input type="checkbox" className="checkBox"></input>
          <div className="single-req"></div>
        </div>
        <div className="req-box">
          <input type="checkbox" className="checkBox"></input>
          <div className="single-req"></div>
        </div>
        <div className="req-box">
          <input type="checkbox" className="checkBox"></input>
          <div className="single-req"></div>
        </div>
        <div className="req-box">
          <input type="checkbox" className="checkBox"></input>
          <div className="single-req"></div>
        </div>
        <div className="req-box">
          <input type="checkbox" className="checkBox"></input>
          <div className="single-req"></div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default StudentRequest;
