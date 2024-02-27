import React from "react";
import Logo from "../logo/Logo";
import Naviagation from "../naviagation/Naviagation";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Naviagation />
      <SignIn />
      <SignUp />
    </header>
  );
}

export default Header;
