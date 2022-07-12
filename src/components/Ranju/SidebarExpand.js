import React from 'react'
import './SidebarCollapseExpand.css'

function SidebarExpand(props) {
  return (
    <div className='collapse-button-left'>
        <div onClick={()=> props.changeSidebarState('true')}>
            <div className='arrow-box-left'>
                <div className='arrow-right'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarExpand