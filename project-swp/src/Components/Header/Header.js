/** @format */

import React from "react";
import Logo from "../logo/Logo";
import Naviagation from "../naviagation/Naviagation";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import "./Header.css";
import { useUsers } from "../../Services/Hooks/useUsers";
import { SignOut } from "../signout/SignOut";

function Header() {
  const { getCurrUser } = useUsers();
  return (
    <header className="header" role="banner">
      <Logo />
      <Naviagation />
      {!getCurrUser() ? (
        <div className="inout" aria-label="Authentication Options">
          <SignIn />
          <SignUp />
        </div>
      ) : (
        <nav className="user" aria-label="User account">
          <span
            className="welcome"
            aria-label={`Logged in as ${getCurrUser().username}`}
          >
            <div>[{getCurrUser().username}]</div>
            <SignOut />
          </span>
        </nav>
      )}
    </header>
  );
}

export default Header;
