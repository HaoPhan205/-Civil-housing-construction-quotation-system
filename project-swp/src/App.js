import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import FotgtPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Routes, Route, Link } from "react-router-dom";
import { LoginSignUpPage } from "./Pages/LoginSignUpPage/LoginSignUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/forgotpassword" element={<FotgtPassword />} />
        <Route path="/login" element={<LoginSignUpPage/>} />
      </Routes>
    </div>
  );
}
export default App;
