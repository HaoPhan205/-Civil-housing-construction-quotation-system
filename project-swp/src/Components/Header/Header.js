import React from "react";
import Logo from "../logo/Logo";
import Naviagation from "../naviagation/Naviagation";
import SignInUp from "../signInUp/SignInUp";
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Logo />
      <Naviagation />
      <SignInUp />
    </header>
  );
}

export default Header;