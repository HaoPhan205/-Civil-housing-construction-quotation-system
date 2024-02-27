import React from "react";
import "./SignInUp.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signIn">
      <Button className="signInUp_button signIn" variant="text">
        <Link to="/signin" style={{ color: "black" }}>
          Đăng nhập
        </Link>
      </Button>
    </div>
  );
}

export default SignIn;
