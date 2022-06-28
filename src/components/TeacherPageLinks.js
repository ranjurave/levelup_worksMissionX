import './TeacherPageLinks.css';
import SidebarCollapse from './Buttons/SidebarCollapse';
import SidebarExpand from './Buttons/SidebarExpand';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function TeacherPageLinks() {
    const [menuCollapsed, setState] = useState(false);

    const collapse=()=>{
        setState(true);
    }
    const expland=()=>{
        setState(false);
    }

  return(
    <>
        <div className={menuCollapsed ?'links':'links-collapsed'}>
            <div className='link-contents'>
                <div className='link-profile'>
                    <img src="images/Ellipse 38/Ellipse 38.png" alt="Ellipse"/>
                </div>
                <Link to='/ProgressTrackerPage' className={menuCollapsed ? 'link-item':'link-item-collapsed'}>
                    <img src="images/Progress light/Progress light.png" alt="progress"/> 
                    {menuCollapsed ? 'PROGRESS TRACKER' : ''}
                </Link>
                <Link to='/StudentProfilePage' className={menuCollapsed ? 'link-item':'link-item-collapsed'}>
                    <img src="images/Icon awesome-user-graduate/Icon awesome-user-graduate.png" alt="progress"/>
                    {menuCollapsed ? 'STUDENT PROFILES' : ''}
                </Link>
                <Link to='/HelpRequestPage' className={menuCollapsed ? 'link-item':'link-item-collapsed'}>
                    <img src="images/Icon material-live-help/Icon material-live-help.png" alt="progress"/>
                    {menuCollapsed ? 'HELP REQUESTS' : ''}
                </Link>
                <Link to='/ProjectSubmissionsPage' className={menuCollapsed ? 'link-item':'link-item-collapsed'}>
                    <img src="images/submit proj/submit proj.png" alt="progress"/>
                    {menuCollapsed ? 'PROJECT SUBMISSIONS' : ''}
                </Link>
                <Link to='/ProjectLibraryPage' className={menuCollapsed ? 'link-item':'link-item-collapsed'}>
                    <img src="images/library light/library light.png" alt="progress"/>
                    {menuCollapsed ? 'PROJECT LIBRARY' : ''}
                </Link>
                {/* <div className={menuCollapsed ? 'collapse-button-right':'collapse-button-left'}>
                        <div onClick={collapse}>
                            <div className={menuCollapsed ? 'arrow-box-right' : 'arrow-box-left'}>
                                <div className={ menuCollapsed ? 'arrow-left' : 'arrow-right'}>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <SidebarCollapse></SidebarCollapse>
                <div className={menuCollapsed ? 'link-bottom-buttons':'link-bottom-buttons-collapsed'}>
                    <div>
                        <img src="images/Icon awesome-user-circle/Icon awesome-user-circle@2x.png" alt="profile"/>
                        {menuCollapsed ? 'Profile' : ''}
                        
                    </div>
                    <div>
                        <img src="images/Icon material-settings/Icon material-settings@2x.png" alt="profile"/>
                        {menuCollapsed ? 'Settings' : ''}
                        
                    </div>
                    <div>
                        <img src="images/Icon awesome-sign-out-alt/Icon awesome-sign-out-alt@2x.png" alt="profile"/>
                        {menuCollapsed ? 'Logout' : ''}
                    </div>
                </div>
            </div>
     </>
  )
}
export default TeacherPageLinks