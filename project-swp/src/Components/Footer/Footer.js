import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
export default function Footer() {
  return (
    <div className="content">
      <div className="footer">
        <div className="logo">
          <Logo />
        </div>
        <div className="section">
          <div className="section1">
            <div className="section1-upper">
              <ul>
                <li>
                  <Link className="section1-upper-detail" to="/baogia">
                    Báo giá
                  </Link>
                </li>
                <li>
                  <Link className="section1-upper-detail" to="/dichvu">
                    Cung cấp dịch vụ
                  </Link>
                </li>
                <li>
                  <Link className="section1-upper-detail" to="/thanhtoan">
                    Tiến độ thanh toán
                  </Link>
                </li>
                <li>
                  <Link className="section1-upper-detail" to="/baohanh">
                    Chính sách bảo hành
                  </Link>
                </li>
              </ul>
            </div>

            <div className="section1-lower">
              <ul>
                <li>Hotline: 0354019580</li>
                <li>
                  Địa chỉ: Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                  Thành phố Hồ Chí Minh{" "}
                </li>
                <li>email: buildquote.experts@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
