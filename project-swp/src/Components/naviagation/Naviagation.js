import React from "react";
import { Link } from "react-router-dom";
import "./Naviagation.css";
import { useUsers } from "../../Services/Hooks/useUsers";

function Naviagation() {
  const { getCurrUser } = useUsers();
  return (
    <div className="naviagator">
      <ul>
        <li>
          <Link className="naviagator__detail" to="/">
            Trang chủ
          </Link>
        </li>
        <li>
          <a className="naviagator__detail" href="/gioithieu">
            Giới thiệu
          </a>
        </li>
        <li>
          {getCurrUser()?.role === 0 || getCurrUser()?.role === 2 ? (
            <Link className="naviagator__detail" to="/admin">
              Quản lý
            </Link>
          ) : (
            <Link className="naviagator__detail" to="/baogia">
              Báo giá
            </Link>
          )}
        </li>
        <li>
          <Link className="naviagator__detail" to="/contact">
            Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Naviagation;
