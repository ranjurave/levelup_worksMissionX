import React from 'react'
import './SidebarCollapseExpand.css'
import {useState} from 'react'
import Flags from '../Flags';
function SidebarCollapse() {

  return (
    <div className='collapse-button-right'>
        <div>
            <div className='arrow-box-right' >
                <div className='arrow-left' >
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarCollapse

// https://youtu.be/fGaEOESdPVI