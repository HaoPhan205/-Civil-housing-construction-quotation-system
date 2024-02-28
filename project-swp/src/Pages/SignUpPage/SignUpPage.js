import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

import backgroundImage from "../../assets/signinup_background.png";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
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
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input">
                  <img src={email_icon} alt="email" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input">
                  <img src={password_icon} alt="password" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                <div className="submit">
                  <button type="submit" className="submit-button">
                    Đăng Ký
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SignUpPage;
