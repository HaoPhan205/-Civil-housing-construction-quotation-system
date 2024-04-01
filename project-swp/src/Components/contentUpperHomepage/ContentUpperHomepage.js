import React from "react";
import "./ContentUpperHomepage.css";
import { Link } from "react-router-dom";

export default function ContentUpperHomepage() {
  return (
    <div className="container" id="about">
      <br />
      <div className="section-header">
        <h2 className="section-upper-title">BuildQuote Experts</h2>
        <div className="line"></div>
      </div>
      <div className="section-content">
        <p>
          Công ty TNHH Thương mại Thiết kế Đầu tư Xây dựng{" "}
          <Link to="/baogia">BuildQuote Experts</Link> – điểm đến tin cậy của
          mọi dự án xây dựng nhà ở dân dụng, từ nhà phố đến biệt thự. Được thành
          lập vào năm 2014, chúng tôi tự hào mang đến giải pháp toàn diện cho
          mọi nhu cầu thiết kế, đầu tư và xây dựng của bạn.
        </p>
        <p>
          Với sứ mệnh là cầu nối đáng tin cậy giữa khách hàng và các nhà thầu uy
          tín, BuildQuote Experts cam kết cung cấp thông tin minh bạch, báo giá
          sơ bộ chính xác, giúp quá trình quyết định của bạn trở nên dễ dàng và
          thuận tiện hơn bao giờ hết. Chúng tôi hiểu rằng, mỗi công trình xây
          dựng không chỉ là một không gian sống mà còn là ước mơ và niềm tự hào
          của mỗi gia đình. Do đó, BuildQuote Experts không ngừng nỗ lực, không
          chỉ trong việc tìm kiếm những giải pháp tiết kiệm chi phí nhất mà còn
          đảm bảo chất lượng và tính thẩm mỹ cao cho tổ ấm của bạn.
        </p>
        <p>
          Hãy để BuildQuote Experts đồng hành cùng bạn trong hành trình xây dựng
          không gian sống lí tưởng, nơi mỗi góc nhỏ đều chứa đựng tình yêu và sự
          ấm áp. Chúng tôi không chỉ là nhà thầu xây dựng, chúng tôi là đối tác
          tin cậy, là bạn đồng hành cùng bạn mỗi bước đi trên con đường hiện
          thực hóa ước mơ về một ngôi nhà hoàn hảo.
        </p>
        <p> Liên hệ với chúng tôi để nhận ngay báo giá tốt nhất:</p>
        <ul className="content-link">
          <li>
            <Link className="section-content-link" to="/baogia">
              Báo giá
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/dichvu">
              Cung cấp dịch vụ
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/thanhtoan">
              Tiến độ thanh toán
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/baohanh">
              Chính sách bảo hành
            </Link>
          </li>
          <li>
            <Link className="section-content-link" to="/contact">
              Liên hệ tư vấn
            </Link>
          </li>
        </ul>
      </div>
      <div className="line" style={{ marginBottom: "5em" }}></div>
    </div>
  );
}
