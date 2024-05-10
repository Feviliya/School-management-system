import React from 'react'
import AdminNav from '../../components/admin/AdminNav'
import AdminMenu from '../../components/admin/AdminMenu'
import '../../assets/admin/AdminDash.css'
const AdminDash = () => {
  return (
    <div id="admin-dash">
      <AdminNav></AdminNav>
      <AdminMenu></AdminMenu>
    </div>
  )
}

export default AdminDash