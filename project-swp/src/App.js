/** @format */

import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import FotgtPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import Contact from "./Pages/Contact/Contact";
import { useStorage } from "./Services/Hooks/useStorage";
import BaoGia from "./Pages/QuotationPage/baogia";
import Header from "./Components/Header/Header";
import { Admin } from "./Pages/Admin/Admin";
import Baohanh from "./Pages/chinhsachbaohanh/baohanh";
import Footer from "./Components/Footer/Footer";
import Dichvu from "./Pages/cungcapdichvu.js/dichvu";
import Thanhtoan from "./Pages/tiendothanhtoan/thanhtoan";

export const Data = createContext(null);
function App() {
  const { getFromStorage } = useStorage();
  const [user, setUser] = useState(
    getFromStorage("user") ? getFromStorage("user") : null
  );
  return (
    <div className="App">
      <Data.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/forgotpassword" element={<FotgtPassword />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/baogia" element={<BaoGia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/baohanh" element={<Baohanh />} />
          <Route path="/dichvu" element={<Dichvu />} />
          <Route path="/thanhtoan" element={<Thanhtoan />} />
        </Routes>
        <Footer />
      </Data.Provider>
    </div>
  );
}
export default App;
