import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import Logo from "../../Components/logo/Logo";
import ContentMiddleHomepage from "../../Components/contentMiddleHomepage/ContentMiddleHomepage";
import logo from "../../assets/logo.png";
export default function () {
  return (
    <div>
      <div className="AboutUs">
        <h2 className="section-title">
          CÔNG TY TNHH TM THIẾT KẾ ĐẦU TƯ XÂY DỰNG
        </h2>
        <Link to="/">
          <img src={logo} alt="logo công ty" />
        </Link>

        <p className="section-title">LIÊN HỆ TƯ VẤN</p>
        <div className="Contact-Content">
          <p>
            Công ty TNHH Thương mại Thiết kế Đầu tư Xây dựng
            <Link to="/baogia"> BuildQuote Experts</Link>
          </p>
          <p>
            Địa chỉ: Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
            phố Hồ Chí Minh
          </p>
          <p>Hotline: 0354019580</p>
          <p>Email: buildQuote.experts@gmail.com</p>
        </div>
      </div>
      <br />
      <ContentMiddleHomepage />
    </div>
  );
}
