/** @format */

import React, { useEffect, useState } from "react";
import "./baogia.css";
import { Row, Col, Select, Spin, Popconfirm } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useBaoGia } from "../../Services/Hooks/useBaoGia";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Services/Hooks/useUsers";
import ContentMiddleHomepage from "../../Components/contentMiddleHomepage/ContentMiddleHomepage";

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

  // Options
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
        <div className="title">Báo Giá</div>
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
              <div className="textTitle">Các báo giá đã lưu</div>
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
      </div>
    </div>
  );
};

export default BaoGia;
