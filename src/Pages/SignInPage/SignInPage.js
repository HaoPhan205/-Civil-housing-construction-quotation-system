/** @format */

import React from "react";
import "./SignInPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import user_icon from "../../assets/person.png";
import password_icon from "../../assets/password.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useUsers } from "../../Services/Hooks/useUsers";
import { Spin } from "antd";

function SignInPage() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { onLogIn } = useUsers();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await onLogIn(username, password);
    setLoading(false);
  };
  return (
    <div>
      <Header />
      <div className="container-signup">
        <div className="signin">
          <div className="header-signup">
            <div className="text">Đăng nhập</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <div className="input">
                <img
                  src={user_icon}
                  alt="user"
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input">
                <img
                  src={password_icon}
                  alt="password"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="submit-container">
              <button
                className="submit"
                type="submit"
              >
                <Spin spinning={loading}>Đăng nhập</Spin>
              </button>
            </div>
          </form>
          <p>Chưa có tài khoản?</p>
          <Link to="/signup">Đăng ký</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;
