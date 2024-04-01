import React from "react";
import "./SignUp.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signUp">
      <Button className="signUp_button signUp" variant="contained">
        <Link to="/signup" style={{ color: "white" }}>
          Đăng ký
        </Link>
      </Button>
    </div>
  );
}

export default SignUp;
