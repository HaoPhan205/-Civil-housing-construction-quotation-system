/** @format */

import React, { useEffect, useState } from "react";
import "./baogia.css";
import {
  Row,
  Col,
  Select,
  Spin,
  Modal,
  Checkbox,
  message,
  Button,
  Tag,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useBaoGia } from "../../Services/Hooks/useBaoGia";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../Services/Hooks/useUsers";
import { BaoGiaModal } from "./BaoGiaModal";

const BaoGia = () => {
  const { getCurrUser } = useUsers();
  const defaultData = {
    hoten: "",
    email: getCurrUser()?.email,
    sdt: "",
    tenduan: "",
    diachi: "",
    loainha: "",
    hinhthuc: "trongoi",
    dientichkhudat: 0,
    dientichxaydung: 0,
    sotang: "",
    loaimong: "daicoc",
    loaimai: "btct",
    ngaydukien: "",
    ngansachdukien: 0,
    phongcach: "",
    yeucaudacbiet: "",
  };
  const {
    updateChangeOption,
    calculateInfo,
    handleSaveBaoGia,
    getSavedBaoGia,
    getBaoGiaByCurrUser,
    removeBaoGia,
    InteractBaoGia,
    getStatus,
  } = useBaoGia();

  const [data, setData] = useState(defaultData);

  const [baogiaData, setBaoGiaData] = useState(getSavedBaoGia());

  const [oldBaoGiaData, setOldBaoGiaData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [savedBaoGia, setSavedBaoGia] = useState(false);

  const [modalState, setModalState] = useState(false);

  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (getCurrUser()?.role === 0 || getCurrUser()?.role === 2) {
      navigate("/");
    }
  }, [getCurrUser()]);

  useEffect(() => {
    getBaoGiaByCurrUser(setOldBaoGiaData);
  }, []);

  const handleSelectOptionChange = (changeType, newValue) => {
    if (newValue === 0) return;
    setData(updateChangeOption(changeType, newValue, data));
  };

  const handleSubmit = () => {
    if (!getCurrUser()) {
      message.error("Bạn cần đăng nhập để gửi yêu cầu báo giá");
      return;
    }

    const newBaoGia = calculateInfo(data, baogiaOptionArr);
    if (newBaoGia) {
      setBaoGiaData(newBaoGia);
      setSavedBaoGia(false);
      handleSave(newBaoGia);
    }
  };

  const handleSave = async (newBaoGia) => {
    if (!checkBoxStatus) {
      message.error(
        "Vui lòng đồng ý với các điều khoản và điều kiện của dịch vụ"
      );
      return;
    }

    setLoading(true);
    await handleSaveBaoGia(newBaoGia);
    getBaoGiaByCurrUser(setOldBaoGiaData);
    setData(defaultData);
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
    setCheckBoxStatus(false);
  };

  // Options
  const baogiaOptionArr = [
    {
      title: "Họ tên",
      handleFunction: (newValue) => handleSelectOptionChange("hoten", newValue),
      value: data.hoten,
      options: null,
    },
    {
      title: "Email",
      handleFunction: (newValue) => handleSelectOptionChange("email", newValue),
      value: data.email,
      options: null,
    },
    {
      title: "Số điện thoại",
      handleFunction: (newValue) => handleSelectOptionChange("sdt", newValue),
      value: data.sdt,
      options: null,
    },
    {
      title: "Tên dự án",
      handleFunction: (newValue) =>
        handleSelectOptionChange("tenduan", newValue),
      value: data.tenduan,
      options: null,
    },
    {
      title: "Địa chỉ",
      handleFunction: (newValue) =>
        handleSelectOptionChange("diachi", newValue),
      value: data.diachi,
      options: null,
    },
    {
      title: "Chọn loại nhà",
      handleFunction: (newValue) =>
        handleSelectOptionChange("loainha", newValue),
      value: data.loainha,
      options: null,
    },
    {
      title: "Phong cách",
      handleFunction: (newValue) =>
        handleSelectOptionChange("phongcach", newValue),
      value: data.phongcach,
      options: null,
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
      title: "Diện tích khu đất (m²)",
      value: data.dientichkhudat,
      handleFunction: (newValue) =>
        handleSelectOptionChange("dientichkhudat", parseInt(newValue.trim())),
      options: null,
      type: "number",
    },
    {
      title: "Diện tích xây dựng (m²)",
      value: data.dientichxaydung,
      handleFunction: (newValue) =>
        handleSelectOptionChange("dientichxaydung", parseInt(newValue.trim())),
      options: null,
      type: "number",
    },
    {
      title: "Số tầng",
      value: data.sotang,
      handleFunction: (newValue) =>
        handleSelectOptionChange("sotang", newValue),
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
    {
      title: "Ngày dự kiến",
      handleFunction: (newValue) =>
        handleSelectOptionChange("ngaydukien", newValue.trim()),
      value: data.ngaydukien,
      options: null,
    },
    {
      title: "Ngân sách dự kiến",
      handleFunction: (newValue) =>
        handleSelectOptionChange("ngansachdukien", parseInt(newValue.trim())),
      value: data.ngansachdukien,
      options: null,
      type: "number",
    },
    {
      title: "Yêu cầu đặc biệt",
      handleFunction: (newValue) =>
        handleSelectOptionChange("yeucaudacbiet", newValue),
      value: data.yeucaudacbiet,
      options: null,
    },
  ];

  const [currViewBaoGia, setCurrViewBaoGia] = useState(null);
  const handleViewDetails = (baogia) => {
    setModalState(true);
    setCurrViewBaoGia(baogia);
  };

  const handleCloseDetails = () => {
    setCurrViewBaoGia(null);
  };

  const [updateStatusLoading, setUpdateStatusLoading] = useState(false);
  const handleInteractStatus = async (status) => {
    setUpdateStatusLoading(true);

    const signal = await InteractBaoGia(currViewBaoGia, status);
    if (signal) {
      message.success("Cập nhật trạng thái thành công");
    } else {
      message.error("Cập nhật trạng thái thất bại");
    }

    setUpdateStatusLoading(false);
  };

  return (
    <div className="baogia">
      <Modal
        open={currViewBaoGia}
        onCancel={handleCloseDetails}
        title={`Dự án: ${currViewBaoGia?.tenduan}`}
        footer={
          currViewBaoGia && (
            <>
              <div className="btnCtn">
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => handleInteractStatus(2)}
                  disabled={currViewBaoGia.status !== 3}
                  danger
                >
                  Từ chối
                </Button>
                <Button
                  type="primary"
                  onClick={() => handleInteractStatus(1)}
                  disabled={currViewBaoGia.status !== 3}
                >
                  Chấp nhận
                </Button>
              </div>
            </>
          )
        }
      >
        <Spin spinning={updateStatusLoading}>
          <BaoGiaModal baogia={currViewBaoGia} />
        </Spin>
      </Modal>
      <div className="title">Báo Giá</div>
      <Row className="rowBaoGia">
        <Col span={24} sm={16}>
          <Spin spinning={loading}>
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
                        type={option.type === "number" ? "number" : "text"}
                      />
                    )}
                  </div>
                ))}
                <div className="checkboxContainer">
                  <Checkbox
                    defaultChecked={checkBoxStatus}
                    onChange={() => setCheckBoxStatus(!checkBoxStatus)}
                  >
                    Tôi đã đọc và đồng ý với các điều khoản và điều kiện của
                    dịch vụ
                  </Checkbox>
                </div>
                <button className="submitBtn" onClick={handleSubmit}>
                  Gửi yêu cầu báo giá
                </button>
              </div>
            </div>
          </Spin>
        </Col>
        <Col span={0} sm={1}></Col>
        <Col span={24} sm={7} className="oldBaoGia_container">
          <div className="yourOldBaoGia">CÁC BÁO GIÁ CỦA BẠN</div>
          <Spin spinning={loading}>
            {oldBaoGiaData.map((baogiaData, i) => (
              <div
                className="oldBaoGia"
                key={i}
                onClick={() => handleViewDetails(baogiaData)}
              >
                <div className="oldBaoGia_header">
                  <div className="oldBaoGia_title">
                    Dự án: {baogiaData.tenduan}
                  </div>
                  <div className="oldBaoGia_size">
                    {Number(baogiaData.dientichkhudat).toLocaleString()} m²
                  </div>
                </div>
                <div className="oldBaoGia_Footer">
                  <div className="oldBaoGia_comments">
                    {baogiaData.comments ? baogiaData.comments.length : 0} phản
                    hồi
                  </div>

                  {getStatus(baogiaData.status)}
                </div>
              </div>
            ))}
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default BaoGia;
