import React from "react";
import "./dichvu.css";
import { Link } from "react-router-dom";
export default function () {
  return (
    <div className="AboutUs">
      <h1 className="section-title">Cung cấp dịch vụ</h1>
      <div className="AboutUs-Content">
        <p className="head">Chính sách dịch vụ của chúng tôi!</p>
        <p>
          Xây dựng BuildQuote Experts cung cấp đến quý khách dịch vụ tư vấn
          thiết kế và thi công xây dựng các công trình Dân dụng và Công nghiệp,
          mang đến cho khách hàng một sản phẩm chất lượng, tốt nhất, phù hợp với
          ngân sách của mỗi khách hàng khác nhau. Chính sách này của Gia Long đã
          được thiết lập ngày từ khi công ty thành lập và bắt đầu hoạt động:
        </p>
        <p>
          – Công ty có trách nhiệm khai báo với chính quyền địa phương về lao
          động làm việc và ở lại tại công trình trong suốt quá trình thi công.
        </p>
        <p>
          – Công ty thi công tuân thủ đúng tiêu chuẩn kỹ thuật và thẩm mỹ công
          trình; Bảo đảm sự bền vững, tính chính xác của các kết cấu xây dựng.{" "}
        </p>
        <p>
          – Và các chi tiết kĩ thuật khác như: Không có hiện tượng rạn nứt trên
          tường, trần, thấm nước, bong tróc sơn tường, trần.
        </p>
        <p>
          – Cột, dầm, tường sau khi tô trát và sơn nước, không có hiện tượng
          nứt, xiêu vẹo và đạt độ phải thẳng.
        </p>
        <p>– Gạch lát nền + gạch ốp phải thẳng không lồi lõm.</p>
        <p>
          – Cam kết vật liệu xây dựng, vật tư trang trí thi công phải thẩm mỹ,
          chất lượng đúng yêu cầu của khách hàng như khi kí kết hợp đồng xây
          dựng giữa hai bên.
        </p>
        <p>
          – Có trách nhiệm báo cho chủ đầu tư xuống kiểm tra đánh giá và nghiệm
          thu các hạng mục công trình trước khi tiến hành các công việc tiếp
          theo.
        </p>
        <p>
          – Báo cho chủ đầu tư biết trước để kiểm tra nghiệm thu các chủng loại,
          thông số, tiêu chuẩn chất lượng của vật tư trước khi đưa vào công
          trình để sử dụng.
        </p>
        <p>
          {" "}
          – Thi công xây dựng đúng tiến độ, quản lý giám sát chặt chẽ, có trách
          nhiệm, đốc thúc nhân công làm tốt công việc, kịp tiến độ mà công ty
          thõa thuận với khách hàng.
        </p>
        <p>
          – Tổ chức thi công theo đúng quy trình, quy định của ngành và đúng Hồ
          sơ thiết kế kỹ thuật đã được khách hàng duyệt và thỏa thuận hai Bên.
        </p>
        <p>
          – Chịu trách nhiệm về an toàn lao động, phòng cháy chữa cháy, vệ sinh
          môi trường cho công nhân và toàn công trường.
        </p>
        <p>
          – Thông báo kịp thời cho Khách hàng mọi trở ngại do thiết kế không
          lường trước được hoặc trở ngại do điều kiện khách quan để hai bên bàn
          bạc, thống nhất cách giải quyết.{" "}
        </p>
        <p>
          – Khi công trình chưa bàn giao cho Khách hàng thì bên công ty chịu mọi
          rủi ro xảy ra (trừ trường hợp do các sự kiến khách quan như bão, lụt,
          loạn lạc,…).
        </p>
        <p>
          – Khắc phục, sữa chữa kịp thời những sai sót do lỗi thi công sau khi
          bàn giao cho khách hàng mà không tính thêm tiền công.
        </p>
        <p>
          – Công Ty cung cấp đầy đủ vật tư, máy thi công và nhân lực để thi công
          hoàn thành công việc theo hợp đồng.
        </p>
        <p>
          – Chịu trách nhiệm về mọi sự cố xảy ra (nếu có) liên quan đến việc thi
          công kém chất lượng hay vi phạm các qui định về quản lý chất lượng
          công trình theo qui định tại Nghị định số 37/2015/NĐ-CP ngày 22/4/2015
          của Chính phủ.
        </p>
        <p className="head">Mọi chi tiết liên hệ: </p>
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
  );
}
