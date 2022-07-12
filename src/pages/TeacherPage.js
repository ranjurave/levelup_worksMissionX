import React from "react";
import { useState } from "react";
import "../components/Ranju/TeacherSideNavbar.css";
import StudentProfiles from "../components/Ranju/StudentProfiles";
import ProgressTracker from "../components/Ranju/ProgressTracker";
import StudentRequest from "../components/Ranju/StudentRequest";
import Navbar from "../components/Ranju/NavbarComponents/Navbar";

function TeacherPage() {
  const [teacherpage, setTeacherPage] = useState(<ProgressTracker />);
  function pageClicked(page) {
    console.log(page);
    setTeacherPage(page);
  }

  const [navbarExpand, setNavbarState] = useState(true);
  function collapse() {
    console.log("collapse clicked");
    if (navbarExpand) {
    }
    setNavbarState(navbarExpand ? false : true);
  }

  return (
    <>
      <Navbar />
      <div className="body">
        <div className={navbarExpand ? "links" : "links-collapsed"}>
          <div className="link-contents">
            <div className="link-profile">
              <img src="images/Ellipse 38/Ellipse 38.png" alt="Ellipse" />
            </div>
            <div
              onClick={() => pageClicked(<ProgressTracker />)}
              className={navbarExpand ? "link-item" : "link-item-collapsed"}
            >
              <img
                src="images/Progress light/Progress light.png"
                alt="progress"
              />
              {navbarExpand ? "PROGRESS TRACKER" : ""}
            </div>
            <div
              onClick={() => pageClicked(<StudentProfiles />)}
              className={navbarExpand ? "link-item" : "link-item-collapsed"}
            >
              <img
                src="images/Icon awesome-user-graduate/Icon awesome-user-graduate.png"
                alt="progress"
              />
              {navbarExpand ? "STUDENT PROFILES" : ""}
            </div>
            <div
              onClick={() => pageClicked(<StudentRequest />)}
              className={navbarExpand ? "link-item" : "link-item-collapsed"}
            >
              <img
                src="images/Icon material-live-help/Icon material-live-help.png"
                alt="progress"
              />
              {navbarExpand ? "HELP REQUESTS" : ""}
            </div>
            <div className={navbarExpand ? "link-item" : "link-item-collapsed"}>
              <img src="images/submit proj/submit proj.png" alt="progress" />
              {navbarExpand ? "PROJECT SUBMISSIONS" : ""}
            </div>
            <div className={navbarExpand ? "link-item" : "link-item-collapsed"}>
              <img
                src="images/library light/library light.png"
                alt="progress"
              />
              {navbarExpand ? "PROJECT LIBRARY" : ""}
            </div>
          </div>
          <div
            className={
              navbarExpand ? "collapse-button-right" : "collapse-button-left"
            }
          >
            <div onClick={collapse}>
              <div
                className={navbarExpand ? "arrow-box-right" : "arrow-box-left"}
              >
                <div
                  className={navbarExpand ? "arrow-left" : "arrow-right"}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={
              navbarExpand
                ? "link-bottom-buttons"
                : "link-bottom-buttons-collapsed"
            }
          >
            <div>
              <img
                src="images/Icon awesome-user-circle/Icon awesome-user-circle.png"
                alt="profile"
              />
              {navbarExpand ? "Profile" : ""}
            </div>
            <div>
              <img
                src="images/Icon material-settings/Icon material-settings.png"
                alt="profile"
              />
              {navbarExpand ? "Settings" : ""}
            </div>
            <div>
              <img
                src="images/Icon awesome-sign-out-alt/Icon awesome-sign-out-alt.png"
                alt="profile"
              />
              {navbarExpand ? "Logout" : ""}
            </div>
          </div>
        </div>
        {teacherpage}
      </div>
    </>
  );
}
export default TeacherPage;
