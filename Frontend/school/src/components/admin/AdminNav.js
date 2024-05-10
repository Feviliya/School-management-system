import React from 'react'
import '../../assets/admin/AdminDash.css'
import sclogo from '../../assets/vectors/education.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const AdminNav = () => {
    const navigate=useNavigate();
  return (
    <div id='admin-nav'>
        <div className='school-logo'>
            <img src={sclogo} width={40} height={45} alt='logo'></img>
            <h4>ABC SCHOOL</h4>
        </div>
        <div className='admin-profile'>
            <Button variant='contained' onClick={()=>{navigate("/admin/login")}} color='error'>Logout</Button>
        </div>
    </div>
  )
}

export default AdminNav