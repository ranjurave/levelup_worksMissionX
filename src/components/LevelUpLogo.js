import { Link } from 'react-router-dom';
import React from 'react'
import './LevelUpLogo.css'

function LevelUpLogo() {
  return (
    <div className='navbar-logo'>
    <Link to="/" className="navbar-logo">
        <img src="images/Star Logo 07-3/Star Logo 07-3.png" alt="LevelUp logo"/>
    </Link>
</div>
  )
}

export default LevelUpLogo