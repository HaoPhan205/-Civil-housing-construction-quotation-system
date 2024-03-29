/** @format */

import React, { useEffect, useState } from "react";
import "./baogia.css";
import { Row, Col, Select, Spin, Popconfirm } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useBaoGia } from "../../Services/Hooks/useBaoGia";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUsers } from "../../Services/Hooks/useUsers";

const BaoGia = () => {
  const defaultData = {
    loainha: "nhapho",
    hinhthuc: "trongoi",
    dai: "",
    rong: "",
    sotang: 1,
    loaimong: "daicoc",
    loaimai: "btct",
  };
  const {
    updateChangeOption,
    calculateInfo,
    handleSaveBaoGia,
    getSavedBaoGia,
    getBaoGiaByCurrUser,
    removeBaoGia,
  } = useBaoGia();

  const { getCurrUser } = useUsers();

  const [data, setData] = useState(defaultData);

  const [baogiaData, setBaoGiaData] = useState(getSavedBaoGia());

  const [oldBaoGiaData, setOldBaoGiaData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [savedBaoGia, setSavedBaoGia] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (getCurrUser()?.role === 0) {
      navigate("/");
    }
  }, [getCurrUser()]);

  useEffect(() => {
    getBaoGiaByCurrUser(setOldBaoGiaData);
  }, []);

  const handleSelectOptionChange = (changeType, newValue) => {
    setData(updateChangeOption(changeType, newValue, data));
  };

  const handleSubmit = () => {
    setBaoGiaData(calculateInfo(data, baogiaOptionArr));
    setData(defaultData);
    setSavedBaoGia(false);
  };

  const handleSave = async () => {
    setLoading(true);
    await handleSaveBaoGia(baogiaData);
    getBaoGiaByCurrUser(setOldBaoGiaData);
    setLoading(false);
    setSavedBaoGia(true);
  };

  const handleClickOldBaoGia = (baogia) => {
    setBaoGiaData(baogia);
  };

  const handleDeleteBaoGia = async (id) => {
    setDeleteLoading(true);
    await removeBaoGia(id);
    getBaoGiaByCurrUser(setOldBaoGiaData);
    setDeleteLoading(false);
    setBaoGiaData(null);
  };

  const baogiaOptionArr = [
    {
      title: "Chọn loại nhà",
      handleFunction: (newValue) =>
        handleSelectOptionChange("loainha", newValue),
      value: data.loainha,
      options: [
        { value: "nhapho", label: "Nhà phố" },
        { value: "nhacapbon", label: "Nhà cấp 4" },
        { value: "bietthu", label: "Biệt thự" },
      ],
    },
    {
      title: "Chọn hình thức xây nhà",
      handleFunction: (newValue) =>
        handleSelectOptionChange("hinhthuc", newValue),
      value: data.hinhthuc,
      options: [
        { value: "trongoi", label: "Trọn Gói" },
        { value: "phantho", label: "Phần thô" },
      ],
    },
    {
      title: "Chiều dài (m²)",
      value: data.dai,
      handleFunction: (newValue) =>
        handleSelectOptionChange("dai", newValue.trim()),
      options: null,
    },
    {
      title: "Chiều rộng (m²)",
      value: data.rong,
      handleFunction: (newValue) =>
        handleSelectOptionChange("rong", newValue.trim()),
      options: null,
    },
    {
      title: "Số tầng",
      value: data.sotang,
      handleFunction: (newValue) =>
        handleSelectOptionChange("sotang", newValue.trim()),
      options: null,
    },
    {
      title: "Loại móng",
      handleFunction: (newValue) =>
        handleSelectOptionChange("loaimong", newValue),
      value: data.loaimong,
      options: [
        { value: "daicoc", label: "Móng đài cọc" },
        { value: "bang", label: "Móng băng" },
        { value: "don", label: "Móng đơn" },
      ],
    },
    {
      title: "Loại mái",
      handleFunction: (newValue) =>
        handleSelectOptionChange("loaimai", newValue),
      value: data.loaimai,
      options: [
        { value: "btct", label: "Mái đúc bằng BTCT" },
        { value: "tonlanh", label: "Mái lợp tôn lạnh" },
        { value: "ngoi", label: "Mái đúc lợp ngói" },
      ],
    },
  ];

  return (
    <div>
      <div className="baogia">
        <div className="title">Thông tin dự án cần báo giá </div>
        <Row className="rowBaoGia">
          <Col span={24} sm={16}>
            <Spin spinning={loading}>
              {baogiaData && (
                <div className="details">
                  <div className="textTitle">Chi tiết báo giá</div>
                  <div>
                    <div className="infoBaoGia">
                      Bạn đang cần xây nhà với kích thước {baogiaData.dai} x{" "}
                      {baogiaData.rong} m:
                    </div>
                    <ol className="baogiaList">
                      <li>Loại nhà: {baogiaData.loainha}</li>
                      <li>Hình thức xây: {baogiaData.hinhthuc}</li>
                      <li>Số tầng: {baogiaData.sotang}</li>
                      <li>Diện tích các tầng: {baogiaData.dientichtang} m²</li>
                      <li>Loại móng: {baogiaData.loaimong}</li>
                      <li>Móng: {baogiaData.mong} m²</li>
                      <li>Loại mái: {baogiaData.loaimai}</li>
                      <li>Mái: {baogiaData.mai} m²</li>
                      <li>Tổng diện tích: {baogiaData.tongdientich} m²</li>
                      <li>
                        Đơn giá:{" "}
                        {baogiaData.dongia
                          .toLocaleString()
                          .replace(",", ".")
                          .replace(/\./g, ",")}{" "}
                        VND
                      </li>
                    </ol>
                    <div className="totalMoney">
                      Tổng tiền:{" "}
                      {baogiaData.tongtien
                        .toLocaleString()
                        .replace(",", ".")
                        .replace(/\./g, ",")}{" "}
                      VND
                    </div>
                    {!baogiaData?.id && !savedBaoGia && (
                      <button className="saveBaoGiaBtn" onClick={handleSave}>
                        Lưu báo giá
                      </button>
                    )}
                  </div>
                </div>
              )}
            </Spin>

            <Spin spinning={deleteLoading}>
              <div className="textTitle">Các yêu cầu báo giá</div>
              <div className="baogiaContainer">
                {oldBaoGiaData?.map((data) => (
                  <div
                    key={data.id}
                    className={`baogiaItem ${
                      baogiaData?.id &&
                      baogiaData?.id === data?.id &&
                      "selected"
                    }`}
                    onClick={() => handleClickOldBaoGia(data)}
                  >
                    Báo giá nhà {data.dai} x {data.rong} m
                    <Popconfirm
                      title="Bạn có chắc chắn muốn xoá?"
                      onConfirm={() => handleDeleteBaoGia(data.id)}
                      cancelText="Huỷ"
                    >
                      <CloseOutlined className="deleteIcon" />
                    </Popconfirm>
                  </div>
                ))}
              </div>
            </Spin>
          </Col>
          <Col span={0} sm={1}></Col>
          <Col span={24} sm={7}>
            <div className="baogiaCover">
              <div className="titleBaoGia">Dự toán chi phí</div>
              <div className="bodyBaoGia">
                {baogiaOptionArr.map((option, i) => (
                  <div className="userOption" key={i}>
                    <div className="optionTitle">{option.title}</div>
                    {option.options ? (
                      <Select
                        onChange={(newValue) => option.handleFunction(newValue)}
                        value={option.value}
                        style={{ width: "100%" }}
                        options={option.options}
                      />
                    ) : (
                      <input
                        onChange={(newValue) =>
                          option.handleFunction(newValue.target.value)
                        }
                        value={option.value}
                        type="number"
                      />
                    )}
                  </div>
                ))}
                <button className="submitBtn" onClick={handleSubmit}>
                  Yêu cẩu báo giá
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="title">Hướng Dẫn Gửi Yêu Cầu Báo Giá</div>
        <div className="Baogia-Content">
          <p className="head">
            Khi bạn quyết định gửi yêu cầu báo giá cho dự án nhà ở dân dụng của
            mình, việc cung cấp thông tin chính xác và đầy đủ là rất quan trọng.
            Điều này giúp chúng tôi hiểu rõ nhu cầu của bạn và đưa ra báo giá
            chính xác nhất. Vui lòng tham khảo hướng dẫn dưới đây để quá trình
            gửi yêu cầu diễn ra suôn sẻ.
          </p>
          <p className="head">Thông Tin Cần Thiết Khi Gửi Yêu Cầu</p>
          <p>
            1. Thông Tin Cá Nhân: Cung cấp thông tin liên lạc đầy đủ để chúng
            tôi có thể liên hệ với bạn khi cần thiết.
          </p>
          <p>
            2. Loại Dự Án: Rõ ràng về loại dự án bạn quan tâm (nhà phố, biệt
            thự, nhà có sân vườn, etc...).
          </p>
          <p>
            3. Diện Tích Khu Đất: Bao gồm thông tin về kích thước và hình dáng
            của khu đất để chúng tôi có cái nhìn tổng quan về không gian làm
            việc.
          </p>
          <p>
            4. Yêu Cầu Cụ Thể: Mô tả chi tiết về ý tưởng, phong cách thiết kế,
            số lượng phòng, và bất kỳ yêu cầu đặc biệt nào khác.
          </p>
          <p>
            5. Thời Gian và Ngân Sách: Xác định kỳ vọng về thời gian hoàn thành
            và ngân sách dự kiến để chúng tôi đề xuất giải pháp phù hợp.
          </p>
          <p className="head">Nguyên Tắc Khi Gửi Yêu Cầu</p>
          <p>
            1. Chính Xác và Đầy Đủ Hãy cung cấp thông tin chính xác và đầy đủ.
            Mọi thiếu sót hoặc sai sót trong thông tin có thể ảnh hưởng đến tính
            chính xác của báo giá.
          </p>
          <p>
            2. Mô Tả Cụ Thể Dự Án Một mô tả chi tiết và rõ ràng giúp chúng tôi
            hiểu rõ hơn về nhu cầu và mong muốn của bạn, từ đó đưa ra báo giá và
            giải pháp tốt nhất.
          </p>
          <p>
            3. Thời Gian và Ngân Sách Xác định rõ thời gian hoàn thành mong muốn
            và nếu có thể, hãy chia sẻ khoảng ngân sách bạn dự kiến. Điều này
            giúp chúng tôi đề xuất phương án phù hợp nhất.
          </p>
          <p>
            4. Đọc và Hiểu Điều Khoản Chúng tôi khuyến khích bạn đọc kỹ các điều
            khoản và điều kiện dịch vụ trước khi gửi yêu cầu. Việc này đảm bảo
            bạn hiểu rõ quyền lợi và trách nhiệm của mình trong quá trình hợp
            tác.
          </p>
          <p>
            5. Kiểm Tra Thông Tin Vui lòng kiểm tra lại thông tin trước khi gửi
            để đảm bảo không có sai sót. Điều này giúp chúng tôi xử lý yêu cầu
            của bạn một cách nhanh chóng và chính xác.
          </p>
          <p>
            6. Quyền Riêng Tư Thông tin cá nhân và dự án của bạn sẽ được bảo mật
            tuyệt đối. Chúng tôi cam kết không chia sẻ thông tin của bạn với bất
            kỳ bên thứ ba nào mà không có sự đồng ý.
          </p>
          <p>
            7. Kiên Nhẫn Chờ Đợi Chúng tôi sẽ nỗ lực phản hồi yêu cầu của bạn
            càng sớm càng tốt. Tuy nhiên, vui lòng kiên nhẫn chờ đợi trong khi
            chúng tôi xử lý thông tin.
          </p>
          <p>
            Chúng tôi rất trân trọng cơ hội được hợp tác và mong muốn mang đến
            cho bạn dịch vụ tốt nhất. Hãy chắc chắn rằng mỗi yêu cầu báo giá
            được gửi đến chúng tôi là bước đầu tiên hướng tới việc thực hiện dự
            án của bạn một cách thành công
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
    </div>
  );
};

export default BaoGia;
