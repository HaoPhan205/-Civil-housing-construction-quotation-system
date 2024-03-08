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
    <header className="header">
      <Logo />
      <Naviagation />
      {!getCurrUser() ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : (
        <span className="welcome">
          <div>[{getCurrUser().username}]</div>
          <SignOut />
        </span>
      )}
    </header>
  );
}

export default Header;
