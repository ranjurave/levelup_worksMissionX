
import PinkButton from './Buttons/PinkButton';
import YellowButton from './Buttons/YellowButton';
import BlueButton from './Buttons/BlueButton';
import Flags from './Flags';
import LevelUpLogo from './LevelUpLogo';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <LevelUpLogo></LevelUpLogo>
        <div className='navbar-buttons'>
            <YellowButton></YellowButton>
            <PinkButton></PinkButton>
            <BlueButton></BlueButton>
            <Flags></Flags>
        </div>
    </nav>
    </>
  )
}

export default Navbar;