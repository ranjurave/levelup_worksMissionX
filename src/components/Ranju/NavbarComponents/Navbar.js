import React from "react";
import PinkButton from "../NavbarComponents/Buttons/PinkButton";
import YellowButton from "../NavbarComponents/Buttons/YellowButton";
import BlueButton from "../NavbarComponents/Buttons/BlueButton";
import Flags from "../NavbarComponents/Flags";
import LevelUpLogo from "./LevelUpLogo";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <LevelUpLogo></LevelUpLogo>
        <div className="navbar-buttons">
          <YellowButton></YellowButton>
          <PinkButton></PinkButton>
          <BlueButton></BlueButton>
          <Flags></Flags>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
