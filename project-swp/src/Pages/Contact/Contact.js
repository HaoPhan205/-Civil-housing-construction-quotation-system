import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import Logo from "../../Components/logo/Logo";
import ContentMiddleHomepage from "../../Components/contentMiddleHomepage/ContentMiddleHomepage";

export default function () {
  return (
    <div>
      <div className="AboutUs">
        <h1 className="section-title">
          Công ty TNHH TM THIẾT KẾ ĐẦU TƯ XÂY DỰNG
        </h1>
        <h1 className="logo-fix">
          <Logo />
        </h1>
        <p className="head">Đăng kí tư vấn:</p>
        <div className="AboutUs-Content">
          <p>
            Công ty TNHH TM TK ĐT <Link to="/baogia">BuildQuote Experts</Link>
          </p>
          <p>
            Địa chỉ: Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
            phố Hồ Chí Minh
          </p>
          <p>Hotline: 0354019580</p>
          <p>Email: buildQuote.experts@gmail.com</p>
        </div>
      </div>
      <ContentMiddleHomepage />
    </div>
  );
}
