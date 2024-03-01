import React from "react";
import { Link } from "react-router-dom";
import "./Naviagation.css";

function Naviagation() {
  return (
    <div className="naviagator">
      <ul>
        <li>
          <Link className="naviagator__detail" to="/">
            Trang chủ
          </Link>
        </li>
        <li>
          <Link className="naviagator__detail" to="/quotation">
            Giới thiệu
          </Link>
        </li>
        <li>
          <Link className="naviagator__detail" to="/contractor">
            Báo giá
          </Link>
        </li>
        <li>
          <Link className="naviagator__detail" to="/contact">
            Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Naviagation;
