/** @format */

import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import FotgtPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import Quotation from "./Pages/QuotationPage/baogia";
import Contact from "./Pages/Contact/Contact";
import { useStorage } from "./Services/Hooks/useStorage";

export const Data = createContext(null);
function App() {
  const { getFromStorage } = useStorage();
  const [user, setUser] = useState(
    getFromStorage("user") ? getFromStorage("user") : null
  );
  return (
    <div className="App">
      <Data.Provider value={{ user, setUser }}>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
            path="/forgotpassword"
            element={<FotgtPassword />}
          />
          <Route
            path="/signin"
            element={<SignInPage />}
          />
          <Route
            path="/signup"
            element={<SignUpPage />}
          />
          <Route
            path="/quotation"
            element={<Quotation />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Data.Provider>
    </div>
  );
}
export default App;
