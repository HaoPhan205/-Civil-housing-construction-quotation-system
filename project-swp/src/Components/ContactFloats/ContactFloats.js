import React, { useState } from "react";
import "./ContactFloats.css";
import zaloLogo from "../../assets/zalo.jpg";
import phoneLogo from "../../assets/phoneLogo.png";

const ContactFloats = () => {
  const [showPhoneText, setShowPhoneText] = useState(false);
  const [showZaloText, setShowZaloText] = useState(false);

  return (
    <div>
      <div
        className="phone-float"
        onMouseEnter={() => setShowPhoneText(true)}
        onMouseLeave={() => setShowPhoneText(false)}
      >
        <a href="tel:+84354019580" target="_blank" rel="noopener noreferrer">
          <img
            src={phoneLogo}
            alt="Call Us"
            style={{ width: "55px", height: "55px" }}
          />
        </a>
        {showPhoneText && <span className="contact-text">0354019580</span>}
      </div>

      <div
        className="zalo-float"
        onMouseEnter={() => setShowZaloText(true)}
        onMouseLeave={() => setShowZaloText(false)}
      >
        <a
          href="https://zalo.me/0354019580"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={zaloLogo}
            alt="Chat Zalo"
            style={{ width: "80px", height: "80px" }}
          />
        </a>
        {showZaloText && <span className="contact-text">Chat Zalo</span>}
      </div>
    </div>
  );
};

export default ContactFloats;
