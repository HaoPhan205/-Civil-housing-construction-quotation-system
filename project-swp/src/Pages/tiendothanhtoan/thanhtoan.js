import React from "react";
import "./thanhtoan.css";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div className="AboutUs">
      <h1 className="section-title">Chính sách thanh toán</h1>
      <div className="AboutUs-Content">
        <p className="head">
          Tiến độ thanh toán khi quý khách kí hợp đồng xây dựng tại công ty
          BuildQuote Experts
        </p>
        <p>
          Giả sử Quy mô xây dựng nhà gồm 1 trệt 3 lầu tiến độ thanh toán như
          sau:
        </p>
        <p>1 - Ký hợp đồng thanh toán 5%</p>
        <p>
          2 - Sau khi tập kết vật tư thiết bị nhân công bắt đầu thi công thanh
          toán 11%
        </p>
        <p>3 - Thi công xong phần móng thanh toán 12%</p>
        <p>4 - Thi công xong bê tông sàn lầu 1 thanh toán 12%</p>
        <p>5 - Thi công xong bê tông sàn lầu 2 thanh toán 12%</p>
        <p>6 - Thi công xong bê tông sàn lầu 3 thanh toán 12%</p>
        <p>7 - Thi công xong bê tông sàn lầu 4 thanh toán 10%</p>
        <p>8 - Thi công xây tường ngăn chia phòng toàn bộ thanh toán10%</p>
        <p>9 - Thi công tô trát tường toàn bộ xong thanh toán 10%</p>
        <p>10 - Sau khi nghiệm thu bàn giao thanh toán 5% </p>
        <p>11 - Hết thời gian bao hành thanh toán 1%</p>
        <p className="head">
          Phương thức thanh toán: Khách hàng thanh toán bằng tiền mặt hoặc
          chuyển khoản.
        </p>
        <p>
          Được thanh toán theo từng đợt chi tiết theo hợp đồng ký giữa Xây Dựng
          BuildQuote Experts và Khách hàng.
        </p>
        <p>Khách hàng thanh toán theo các hình thức sau:</p>
        <p>I . Thanh toán chuyển khoản qua tài khoản công ty</p>
        <p>
          II . Thanh toán trực tiếp địa chỉ Công ty TNHH TM TK ĐT xây dựng
          BuildQuote Experts
        </p>
        <p>
          Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí
          Minh
        </p>
        <p>
          III . Thanh toán trực tiếp tại địa chỉ nhà riêng hoặc tại công trình
          của khách hàng
        </p>
        <p className="head">Mọi chi tiết liên hệ: </p>
        <p>
          Công ty TNHH Thương mại Thiết kế Đầu tư Xây dựng{" "}
          <Link to="/baogia">BuildQuote Experts</Link>
        </p>
        <p>
          Địa chỉ: Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
          phố Hồ Chí Minh
        </p>
        <p>Hotline: 0354019580</p>
        <p>Email: buildQuote.experts@gmail.com</p>
        <p className="content-last">
          <Link to="/Dichvu">Cung cấp dịch vụ</Link>
        </p>
        <p className="content-last">
          <Link to="/Thanhtoan">Tiến độ thanh toán</Link>
        </p>
        <p className="content-last">
          <Link to="/Baohanh">Chính sách bảo hành</Link>
        </p>
      </div>
    </div>
  );
}
