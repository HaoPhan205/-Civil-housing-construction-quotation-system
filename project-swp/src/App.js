import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import FotgtPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/forgotpassword" element={<FotgtPassword />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
    // <div className="App">
    //   <Router>
    //     <Switch>
    //       <Route path="/" element={<Homepage />} />
    //       <Route path="/forgotpassword" element={<FotgtPassword />} />
    //       <Route path="/login" element={<LoginSignUpPage />} />
    //       <Route path="/signup" element={<LoginSignUpPage />} />
    //     </Switch>
    //   </Router>
    // </div>
  );
}
export default App;
