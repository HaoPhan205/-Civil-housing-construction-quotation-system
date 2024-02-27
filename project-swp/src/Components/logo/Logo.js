import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Logo.css'

function Logo() {
  return (
    <div className='logo'><Link to="/"><img src={logo}></img></Link></div>
  )
}

export default Logo

