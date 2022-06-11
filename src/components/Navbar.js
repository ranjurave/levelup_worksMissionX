import { Link } from 'react-router-dom';
import PinkButton from './PinkButton';
import YellowButton from './YellowButton';
import BlueButton from './BlueButton';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-logo'>
            <Link to="/" className="navbar-logo">
                <img src="images/Star Logo 07-3/Star Logo 07-3.png" alt="LevelUp logo"/>
            </Link>
        </div>
        <div className='navbar-buttons'>
            <YellowButton></YellowButton>
            <PinkButton></PinkButton>
            <BlueButton></BlueButton>
            <div className="flags">
                <img src="images/NZ Flag/NZ Flag.png" alt="New Zealand Flag"/>
                <img src="images/Maori flag/Maori flag.png" alt="Maori Flag"/>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar;