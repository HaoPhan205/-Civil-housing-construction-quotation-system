/** @format */

import { useEffect, useState } from "react";
import "./Admin.css";
import { Button, Table, Tag, Spin, Modal, message } from "antd";
import { useUsers } from "../../Services/Hooks/useUsers";
import { useBaoGia } from "../../Services/Hooks/useBaoGia";
import { useNavigate } from "react-router-dom";
import { BaoGiaModal } from "../QuotationPage/BaoGiaModal";

export const Admin = () => {
  const { getAllUsers, getCurrUser } = useUsers();
  const { InteractBaoGia, getAllBaoGia, getStatus } = useBaoGia();

  const [data, setData] = useState(null);

  const [currViewBaoGia, setCurrViewBaoGia] = useState(null);

  const [updateStatusLoading, setUpdateStatusLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const [allBaoGia, setAllBaoGia] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getCurrUser() || getCurrUser().role === 1) {
      navigate("/");
    }
  }, [getCurrUser()]);

  useEffect(() => {
    if (getCurrUser().role === 0) {
      getAllUsers(setData, setLoading);
    } else {
      getAllBaoGia(setAllBaoGia, setLoading);
    }
  }, []);

  const checkRole = (role) => {
    switch (role) {
      case 0:
        return <Tag color="volcano">Admin</Tag>;
      default:
        return <Tag>User</Tag>;
    }
  };

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => checkRole(role),
    },
    // {
    //   title: "",
    //   key: "action",
    //   width: "10%",
    //   render: (user) => {
    //     return (
    //       <Button
    //         type="primary"
    //         onClick={() => handleViewBaoGia(user)}
    //       >
    //         Xem báo giá
    //       </Button>
    //     );
    //   },
    // },
  ];

  const handleViewDetails = (baogia) => {
    setCurrViewBaoGia(baogia);
  };

  const handleCloseDetails = () => {
    setCurrViewBaoGia(null);
  };

  const handleInteractStatus = async (status) => {
    setUpdateStatusLoading(true);
    
    if (status === 4 && reasonHuy.trim().length === 0) {
      message.error("Vui lòng nhập lý do huỷ");
      return;
    }
    const reason = status === 4 ? reasonHuy : "";

    const signal = await InteractBaoGia(currViewBaoGia, status, reason);
    if (signal) {
      message.success("Cập nhật trạng thái thành công");
    } else {
      message.error("Cập nhật trạng thái thất bại");
    }

    setReasonHuy("");
    setEnterReasonHuy(false);
    setUpdateStatusLoading(false);
  };

  const [enterReasonHuy, setEnterReasonHuy] = useState(false);
  const [reasonHuy, setReasonHuy] = useState("");

  return (
    <div className="admin">
      <div className="title">Quản lý</div>
      {getCurrUser().role === 0 && (
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
        />
      )}

      {/* STAFF */}
      <Modal
        title="Lý do huỷ"
        open={enterReasonHuy}
        footer={null}
        onCancel={() => setEnterReasonHuy(false)}
      >
        <textarea
          row={10}
          className="CurrBaoGia_CommentBox"
          placeholder="Tôi huỷ dự án này vì..."
          style={Object.assign({
            fontSize: "13px",
            height: "140px",
            maxHeight: "140px",
            minHeight: "140px",
          })}
          value={reasonHuy}
          onChange={(e) => setReasonHuy(e.target.value)}
        />
        <Spin spinning={updateStatusLoading}>
          <button
            className="CurrBaoGia_SendComment"
            onClick={() => handleInteractStatus(4)}
          >
            Xác nhận huỷ
          </button>
        </Spin>
      </Modal>
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
                  onClick={() => setEnterReasonHuy(true)}
                  danger
                  disabled={
                    currViewBaoGia.status === 1 ||
                    currViewBaoGia.status === 2 ||
                    currViewBaoGia.status === 4
                  }
                >
                  Huỷ dự án này
                </Button>
                <Button
                  type="primary"
                  onClick={() => handleInteractStatus(3)}
                  disabled={currViewBaoGia.status > 0}
                >
                  Đã gửi báo giá
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
      <div className="staffBaoGiaContainer">
        {getCurrUser().role === 2 &&
          allBaoGia?.map((baogiaData, i) => (
            <div
              className="staffBaoGia"
              key={i}
              onClick={() => handleViewDetails(baogiaData)}
            >
              <div className="staffBaoGia_header">
                <div className="staffBaoGia_title">
                  Dự án: {baogiaData.tenduan}
                </div>
                <div className="staffBaoGia_size">
                  {Number(baogiaData.dientichkhudat).toLocaleString()} m²
                </div>
              </div>
              <div className="staffBaoGia_Footer">
                <div className="staffBaoGia_comments">
                  {baogiaData.comments ? baogiaData.comments.length : 0} phản
                  hồi
                </div>
                {getStatus(baogiaData.status)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
