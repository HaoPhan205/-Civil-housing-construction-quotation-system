import React from 'react'
import './Footer.css'
import Logo from '../Components/logo/Logo'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='content'>
            <div className='footer'>
                <div className='logo'><Logo /></div>
                <div className='section'>
                    <div className='section1'>
                        <div className='section1-upper'>
                            <ul >
                                <li ><Link className='section1-upper-detail' to='/quotation'>Báo giá</Link></li>
                                <li ><Link className='section1-upper-detail' to='/blog'>Blog</Link></li>
                                <li><Link className='section1-upper-detail' to='/criteria'>Tiêu chí hoạt động</Link></li>
                                <li><Link className='section1-upper-detail' to='/legal'>Chính sách & pháp lý</Link></li>
                            </ul>
                        </div>

                        <div className='section1-lower'>
                            <ul >
                                <li>Hotline: 0903987732 - 0883742342</li>
                                <li>Location: Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='divider'></div>

            <div className='section2'>
                <p>© Copyright 2024, All Rights Reserved by BuildQuoteExperts</p>
            </div>

        </div>
    )
}
