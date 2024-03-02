import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import FotgtPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import ConstructionCalculator from "./Pages/QuotationPage/QuotationForm";
import Contact from "./Pages/Contact/Contact";
import DashBoard from "./Pages/AdminPage/DashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/forgotpassword" element={<FotgtPassword />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/quotation" element={<ConstructionCalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}
export default App;
