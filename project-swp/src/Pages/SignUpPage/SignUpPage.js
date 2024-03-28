/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

import backgroundImage from "../../assets/signinup_background.png";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useUsers } from "../../Services/Hooks/useUsers";
import { Spin, message } from "antd";

function SignUpPage() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { onSignup } = useUsers();

  const handleSignUp = async () => {
    setLoading(true);
    await onSignup(username, email, password);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailErr = !emailRegex.test(email);

    const userNameErr = username.length < 5;
    const passwordErr = password.length < 8;

    if (userNameErr || emailErr || passwordErr) {
      userNameErr && message.error("Username phải có ít nhất 5 ký tự");
      emailErr && message.error("Email không hợp lệ");
      passwordErr && message.error("Password phải có ít nhất 8 ký tự");
    } else {
      handleSignUp();
    }
  };

  return (
    <div>
      <div style={backgroundStyle}>
        <div className="container-signup">
          <div className="signup">
            <div className="header-signup">
              <div className="text">Đăng Ký</div>
              <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <div className="input">
                  <img src={user_icon} alt="user" />
                  <input
                    style={{ color: "white" }}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setName(e.target.value.trim())}
                  />
                </div>
                <div className="input">
                  <img src={email_icon} alt="email" />
                  <input
                    style={{ color: "white" }}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                  />
                </div>
                <div className="input">
                  <img src={password_icon} alt="password" />
                  <input
                    style={{ color: "white" }}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value.trim())}
                  />
                </div>
              </div>
              <div className="signInChoice">
                <p className="signInChoiceText">Đã có tài khoản?</p>
                <Link to="/signin" className="signInChoiceButton">
                  Đăng nhập
                </Link>
              </div>

              <div className="submit-container">
                <button className="submit">
                  <Spin spinning={loading}>Đăng Ký</Spin>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
