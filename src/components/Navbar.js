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
            {/* //<PinkButton></PinkButton> */}
        </div>
        <div className='navbar-buttons'>
            <YellowButton></YellowButton>
            <PinkButton></PinkButton>
            <BlueButton></BlueButton>
            <Link to="/" className="flags">
                <img src="images/NZ Flag/NZ Flag.png" alt="New Zealand Flag"/>
            </Link>
            <Link to="/" className="flags">
                <img src="images/Maori flag/Maori flag.png" alt="Maori Flag"/>
            </Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar;