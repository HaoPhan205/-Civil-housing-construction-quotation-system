import React from "react";
import "./SignInUp.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signUp">
      {/* <Button className="signInUp_button signIn" variant="text">
        <Link to="/login" style={{ color: "black" }}>
          Đăng nhập
        </Link>
      </Button> */}
      <Button className="signInUp_button signUp" variant="contained" >
        <Link to="/signup" style={{color:"white"}}>Đăng ký</Link>
      </Button>
    </div>
  );
}

export default SignUp;
