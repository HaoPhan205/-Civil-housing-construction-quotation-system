import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import Contact from "./Pages/Contact/Contact";
import { useStorage } from "./Services/Hooks/useStorage";
import BaoGia from "./Pages/QuotationPage/BaoGia";
import Header from "./Components/Header/Header";
import { Admin } from "./Pages/Admin/Admin";
import Dichvu from "./Pages/cungcapdichvu.js/dichvu";
import Thanhtoan from "./Pages/tiendothanhtoan/thanhtoan";
import Baohanh from "./Pages/chinhsachbaohanh/baohanh";
import ContactFloats from "./Components/ContactFloats/ContactFloats";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/useHistory/useHistory";
import Gioithieu from "./Pages/GioithieuPage/gioithieu";

export const Data = createContext(null);
function App() {
  const { getFromStorage } = useStorage();
  const [user, setUser] = useState(
    getFromStorage("user") ? getFromStorage("user") : null
  );
  console.log(user);
  return (
    <Data.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <ContactFloats />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/baogia" element={<BaoGia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/baohanh" element={<Baohanh />} />
          <Route path="/dichvu" element={<Dichvu />} />
          <Route path="/thanhtoan" element={<Thanhtoan />} />
          <Route path="/gioithieu" element={<Gioithieu />} />
        </Routes>
        <Footer />
      </div>
    </Data.Provider>
  );
}
export default App;
