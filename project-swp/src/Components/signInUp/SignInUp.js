import React from 'react'
import './SignInUp.css'
import { Button } from '@mui/material'

function SignInUp() {
  return (
    <div className='signInUp'>
      <Button className='signInUp_button signIn' variant="text">Đăng nhập</Button>
      <Button className='signInUp_button signUp' variant="contained">Đăng ký</Button>
    </div>
  )
}

export default SignInUp