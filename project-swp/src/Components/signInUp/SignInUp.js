import React from 'react'
import './SignInUp.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function SignInUp() {
  return (
    <div className='signInUp'>
      <Button className='signInUp_button signIn' variant="text"><Link to='/login' style={{color: "black"}}>Đăng nhập</Link></Button>
      <Button className='signInUp_button signUp' variant="contained">Đăng ký</Button>
    </div>
  )
}

export default SignInUp