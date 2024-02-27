import React, { useState } from 'react'
import './LoginSignUpPage.css'

import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'

export const LoginSignUpPage = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className='container-login-signup'>
            <div className='header-login-signup'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : <div className='input'>
                    <img src={user_icon} alt='' />
                    <input type='text' placeholder='Tên' />
                </div>}

                <div className='input'>
                    <img src={email_icon} alt='' />
                    <input type='email' placeholder='Email ID' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input type='password' placeholder='Mật khẩu' />
                </div>

            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Quên mật khẩu? <span>Nhấn vào đây!</span></div>
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Đăng ký</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Đăng nhập</div>
            </div>
        </div>
    )
}

