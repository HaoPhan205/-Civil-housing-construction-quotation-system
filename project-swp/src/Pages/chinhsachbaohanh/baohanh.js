import React from "react";
import "./baohanh.css";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="baohanh">
      <h1 className="section-baohanh-title">Chính sách bảo hành</h1>
      <div className="baohanh-Content">
        <p className="head">Chính sách bảo hành của chúng tôi!</p>
        <p>
          Thời gian bảo hành của chúng tôi là: từ 1 đến 5 năm tùy thuộc vào các
          hạng mục, được tính từ ngày nghiệm thu bàn giao công trình đưa vào sử
          dụng.
        </p>
        <p>
          Trong thời gian bảo hành , như đã thõa thuận cũng như căn cứ vào hợp
          đồng đã ký kết giữa 2 Bên, nếu công trình có hư hỏng, do lỗi kĩ thuật
          của đơn vị thi công:
        </p>
        <p>
          Nếu gặp những lỗi hoặc bất kỳ sự cố nào, quý khách hàng vui lòng thông
          báo cho Xây Dựng BuildQuote Experts để sớm đề ra những giải pháp khắc
          phục sớm nhất cho quý khách, chậm nhất là 2 ngày kể từ ngày nhận được
          thông báo của khách hàng, bên Xây Dựng BuildQuote Experts sẻ cử nhân
          viên của mình xuống khắc phục, sửa chữa lại công trình cho quý khách
          và không phát sinh chi phí.Nếu gặp những lỗi hoặc bất kỳ sự cố nào,
          quý khách hàng vui lòng thông báo cho Xây Dựng BuildQuote Experts để
          sớm đề ra những giải pháp khắc phục sớm nhất cho quý khách, chậm nhất
          là 2 ngày kể từ ngày nhận được thông báo của khách hàng, bên Xây Dựng
          Gia Long sẻ cử nhân viên của mình xuống khắc phục, sửa chữa lại công
          trình cho quý khách và không phát sinh chi phí.
        </p>
        <p>
          Nếu có bất kỳ hư hỏng nào trong thời gian bảo hành công trình do lỗi
          sử dụng sai mục địch của khách hàng gây ra, thì Công ty BuildQuote
          Experts sẻ xem xét mức độ nghiêm trọng của sự việc để có hướng hỗ trợ
          khách hàng, trường hợp xấu nhất khách hàng phải chịu hoàn toàn chi phí
          sửa chữa công trình lỗi của mình.
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
