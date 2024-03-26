import React from "react";
import "./ContentUpperHomepage.css";
import { Link } from "react-router-dom";

export default function ContentUpperHomepage() {
  return (
    <div className="container" id="about">
      <br />
      <div className="section-header">
        <h2 className="section-title">VỀ CHÚNG TÔI</h2>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <p>
          BuildQuote Experts được thành lập năm 2024 bởi một nhóm sinh viên Đại
          học FPT.
        </p>
        <p>
          Chúng tôi cung cấp các thông tin các nhà thầu, báo giá sơ bộ để thi
          công xây dựng dân dụng như nhà phố, biệt thự. Với tinh thần cầu tiến
          và luôn hướng đến tiện lợi cho khách hàng, BuildQuote Experts luôn
          hướng đến mong muốn hoàn chỉnh nhất về không gian cho khách hàng.
        </p>

        <p> Liên hệ với chúng tôi để nhận ngay báo giá tốt nhất:</p>
        <ul>
          <li>
            <Link className="section-content-link" to="/baogia">
              • Báo giá
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/dichvu">
              • Cung cấp dịch vụ
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/thanhtoan">
              • Tiến độ thanh toán
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/baohanh">
              • Chính sách bảo hành
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/contact">
              • Thông tin liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="line" style={{ marginBottom: "5em" }}></div>
    </div>
  );
}
