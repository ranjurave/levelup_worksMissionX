import React from 'react'
import './SidebarCollapseExpand.css'

function SidebarExpand() {
  return (
    <div className='collapse-button-left'>
        {/* <div onClick={collapse}> */}
        <div>
            <div className='arrow-box-left'>
                <div className='arrow-right'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarExpand