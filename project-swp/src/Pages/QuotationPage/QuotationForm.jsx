import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./QuotationForm.css";
import Carousel from "../../Components/carousel/Carousel";
import QuoteForm from "./baogia";

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

      <div class="container-left drop cus_mnleft">
        <div class="mg_left">
          <div class="nestedsidemenu">
            <div class="tieude_left"> Dự toán chi phí xây dựng</div>
            <form action="du-toan.html" method="POST" name="frm-dutoan">
              <div class="content_dutoan">
                <div class="item-dutoan mg_b">
                  <label>Chọn loại nhà:</label>
                  <select name="sltloaihinh" class="stip sltloaihinh">
                    <option value="84">Nhà cấp bốn </option>
                    <option value="83">Biệt thự</option>
                  </select>
                </div>
                <div class="item-dutoan mg_b">
                  <label>Chọn hình thức xây nhà:</label>
                  <select name="slthinhthuc" class="stip slthinhthuc">
                    <option value="655">Xây nhà phần thô</option>
                    <option value="656">Xây nhà trọn gói</option>
                  </select>
                </div>
                <div class="clear"></div>

                <div class="item-dutoan mg_b">
                  <label>Chiều rộng m2 (ví dụ2.5):</label>
                  <input
                    type="number"
                    name="txtrong"
                    class="stip"
                    step="0.1"
                    required="required"
                  />
                </div>

                <div class="item-dutoan mg_b">
                  <label>Chiều dài m2 (ví dụ2.5):</label>
                  <input
                    type="number"
                    name="txtcao"
                    class="stip"
                    step="0.1"
                    required="required"
                  />
                </div>
                <div class="clear"></div>
                <div class="hide-frm">
                  <div class="item-dutoan mg_b">
                    <label>Nhập số tầng:</label>
                    <select name="sltsotang" class="sltsotang stip">
                      <option value="1229">1</option>
                      <option value="650">2</option>
                      <option value="651">3</option>
                      <option value="652">4</option>
                      <option value="653">5</option>
                      <option value="654">6</option>
                    </select>
                  </div>
                </div>
                <div class="item-dutoan mg_b">
                  <label>Chọn loại móng:</label>
                  <select name="sltmong" class="sltmong stip">
                    <option value="661">Móng đài cọc</option>
                    <option value="662">Móng băng</option>
                    <option value="663">Móng đơn</option>
                  </select>
                </div>
                <div class="item-dutoan mg_b">
                  <label>Chọn loại mái:</label>
                  <select name="sltmai" class="sltmai stip">
                    <option value="664">Mái bằng đúc BTCT</option>
                    <option value="665">Mái lợp tôn lạnh</option>
                    <option value="666">Mái xà gồ thép lợp ngói </option>
                    <option value="667">Mái đúc BTCT lợp ngói</option>
                  </select>
                </div>
                <div class="mg-10 mg_b">
                  <div class="item-dutoan dutoan-left">
                    <p class="pd-10">
                      <input
                        type="submit"
                        name="btnsb"
                        value="Tính kết quả"
                        class="btnsb"
                      />
                    </p>
                    <p class="pd-10">
                      <input
                        type="reset"
                        name="btnreset"
                        value="Làm lại"
                        class="btnsb"
                      />
                    </p>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </form>
          </div>
          <div class="clear"></div>
        </div>
      </div>

      <QuoteForm />
      <select>
        <option value="test">Test Option</option>
      </select>
      <Carousel />
      <Footer />
    </div>
  );
};

export default ConstructionCalculator;
