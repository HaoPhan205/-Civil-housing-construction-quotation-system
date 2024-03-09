/** @format */

import { useEffect, useState } from "react";
import "./Admin.css";
import { Button, Table, Tag } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useUsers } from "../../Services/Hooks/useUsers";
import { useBaoGia } from "../../Services/Hooks/useBaoGia";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const { getAllUsers, getCurrUser } = useUsers();
  const { getBaoGiaByUsername } = useBaoGia();

  const [currUserBaoGia, setCurrUserBaoGia] = useState(null);
  const [usernameOfbBaoGia, setUsernameOfbBaoGia] = useState("");

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    if(!getCurrUser() || getCurrUser().role > 0) {
        navigate("/")
    }
  }, [getCurrUser()])

  useEffect(() => {
    getAllUsers(setData, setLoading);
  }, []);

  const checkRole = (role) => {
    switch (role) {
      case 0:
        return <Tag color="volcano">Admin</Tag>;
      default:
        return <Tag>User</Tag>;
    }
  };

  const handleViewBaoGia = async (user) => {
    setUsernameOfbBaoGia(user.username);
    setLoading(true);
    const baoGiaOfUser = await getBaoGiaByUsername(user.username);
    setLoading(false);
    setCurrUserBaoGia(baoGiaOfUser);
  };

  const handleBack = () => {
    setUsernameOfbBaoGia("");
    setCurrUserBaoGia(null);
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
    {
      title: "",
      key: "action",
      width: "10%",
      render: (user) => {
        return (
          <Button
            type="primary"
            onClick={() => handleViewBaoGia(user)}
          >
            Xem báo giá
          </Button>
        );
      },
    },
  ];

  const columns2 = [
    {
      title: "Thông tin",
      key: "thongtin",
      render: (data) => (
        <>{data.loainha} | {data.hinhthuc} | {data.dai} x {data.rong} m</>
      ),
    },
    {
      title: "Diện tích tầng",
      key: "dientichtang",
      render: (data) => (
        <>{data.dientichtang}m² x {data.sotang}</>
      )
    },
    {
      title: "Móng",
      key: "mong",
      render: (data) => (
        <>{data.loaimong} - {data.mong}m²</>
      )
    },
    {
      title: "Mái",
      key: "mai",
      render: (data) => (
        <>{data.loaimai} - {data.mai}m²</>
      )
    },
    {
      title: "Tổng diện tích",
      key: "tongdientich",
      dataIndex: "tongdientich",
    },
    // {
    //   title: "Đơn giá",
    //   dataIndex: "dongia",
    //   key: "dongia",
    //   render: (dongia) =>
    //     dongia.toLocaleString().replace(",", ".").replace(/\./g, ","),
    // },
    {
      title: "Tổng tiền",
      dataIndex: "tongtien",
      key: "tongtien",
      render: (tongtien) =>
        tongtien.toLocaleString().replace(",", ".").replace(/\./g, ","),
    },
  ];

  return (
    <div className="admin">
      <div className="title">Quản lý</div>
      {currUserBaoGia ? (
        <>
          <Button
            onClick={handleBack}
            icon={<LeftOutlined />}
            style={{ margin: "10px 0 0 0" }}
            type="text"
          >
            Quay lại
          </Button>
          <div className="titleBaoGiaUser">
            Các báo giá của [{usernameOfbBaoGia}]
          </div>
          <Table
            columns={columns2}
            dataSource={currUserBaoGia}
            loading={loading}
          />
        </>
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
        />
      )}
    </div>
  );
};
