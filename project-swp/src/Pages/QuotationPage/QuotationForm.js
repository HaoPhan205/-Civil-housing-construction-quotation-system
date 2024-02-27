import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./QuotationForm.css";
import Carousel from "../../Components/carousel/Carousel";

const ConstructionCalculator = () => {
  const [houseType, setHouseType] = useState("Nhà phố");
  const [constructionType, setConstructionType] = useState("Xây nhà phần thô");
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [floors, setFloors] = useState(1);
  const [foundationType, setFoundationType] = useState("Móng đài cọc");
  const [roofType, setRoofType] = useState("Mái bằng đúc BTCT");

  const calculateTotalPrice = () => {
    // Calculate the total price based on user inputs
  };

  return (
    <div>
      <Header />
      <div class="mg-10">
        <div class="col-2 pd-10">
          <div class="item-bd">
            <div class="title-bd">
              <a
                href="bao-gia/don-gia-thi-cong-xay-dung-nha-tron-goi-626.html"
                title=""
              >
                <h3>Đơn Giá Thi Công Xây Dựng Nhà Trọn Gói</h3>
                <span>Xem</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 pd-10">
          <div class="item-bd">
            <div class="title-bd">
              <a
                href="bao-gia/don-gia-thi-cong-xay-dung-nha-phan-tho-402.html"
                title=""
              >
                <h3>Đơn Giá Thi Công Xây Dựng Nhà Phần Thô</h3>
                <span>Xem</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 pd-10">
          <div class="item-bd">
            <div class="title-bd">
              <a href="bao-gia/don-gia-thiet-ke-kien-truc-401.html" title="">
                <h3>Đơn Giá Thiết Kế Kiến Trúc</h3>
                <span>Xem</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 pd-10">
          <div class="item-bd">
            <div class="title-bd">
              <a href="bao-gia/cach-tinh-dien-tich-xay-dung-625.html" title="">
                <h3>Cách Tính Diện Tích Xây Dựng</h3>
                <span>Xem</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 pd-10">
          <div class="item-bd">
            <div class="title-bd">
              <a href="bao-gia/don-gia-xay-nha-cap-4-624.html" title="">
                <h3>Đơn Giá Xây Nhà Cấp 4</h3>
                <span>Xem</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 pd-10">
          <div class="item-bd">
            <div class="title-bd">
              <a href="bao-gia/don-gia-cai-tao-nha-cu-400.html" title="">
                <h3>Đơn Giá Cải Tạo Nhà Cũ</h3>
                <span>Xem</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>DỰ TOÁN CHI PHÍ XÂY DỰNG</h1>
        <div>
          <label>Chọn loại nhà:</label>
          <select
            value={houseType}
            onChange={(e) => setHouseType(e.target.value)}
          >
            <option value="Nhà phố">Nhà phố</option>
            {/* Add more house types here */}
          </select>
        </div>
        <div>
          <label>Chọn hình thức xây nhà:</label>
          <select
            value={constructionType}
            onChange={(e) => setConstructionType(e.target.value)}
          >
            <option value="Xây nhà phần thô">Xây nhà phần thô</option>
            {/* Add more construction types here */}
          </select>
        </div>
        <div>
          <label>Chiều rộng (m2):</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Chiều dài (m2):</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Nhập số tầng:</label>
          <input
            type="number"
            value={floors}
            onChange={(e) => setFloors(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Chọn loại móng:</label>
          <select
            value={foundationType}
            onChange={(e) => setFoundationType(e.target.value)}
          >
            <option value="Móng đài cọc">Móng đài cọc</option>
            {/* Add more foundation types here */}
          </select>
        </div>
        <div>
          <label>Chọn loại mái:</label>
          <select
            value={roofType}
            onChange={(e) => setRoofType(e.target.value)}
          >
            <option value="Mái bằng đúc BTCT">Mái bằng đúc BTCT</option>
            {/* Add more roof types here */}
          </select>
        </div>
        <button onClick={calculateTotalPrice}>Tính Kết Quả</button>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
};

export default ConstructionCalculator;
