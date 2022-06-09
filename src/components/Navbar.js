import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    // to not show button of refresh on narrow window
    useEffect(()=>{
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
            <img src="images/Star Logo 07-3/Star Logo 07-3.png" alt="LevelUp logo"/>
            </Link>
            <div className='menu-icon'>

            </div>
            {button && <Button buttonStyle='btn--outline'>Signup</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar;