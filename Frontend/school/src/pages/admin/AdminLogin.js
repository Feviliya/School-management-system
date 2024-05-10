import React from 'react'
import { TextField,Button } from '@mui/material'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../../assets/admin/AdminLogin.css'
import auth from '../../assets/vectors/auth.svg'
import axios from 'axios';
const AdminLogin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const role = "ADMIN"
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const navigate=useNavigate();


    const handleMail=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate({ email, password });
        setFormErrors(errors);
      
        if(isSubmit===true){
          try{
              const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
                  email,
                  password,
                  role
              },
              );
              let token=response.data.token;
              let user=response.data.id;
              if(response.data.role!="ADMIN"){
                window.alert("PLEASE LOGIN VIA STUDENTS/TEACHERS LOGIN PAGE")
                console.log("Not admin")
                navigate("/admin/login")
              }else{
                localStorage.setItem('user',JSON.stringify(user));
                console.log("Successful Admin Login")
                navigate('/admin/dashboard');
              }
          }catch(error){
              console.error('Error: ',error);
          }
      }
      };
  
  
      const validate = (values) => {
        const errors = {};
      
        if (!values.email) {
          errors.email = "Email is Required";
        } else if (values.email.length < 5) {
          errors.email = "Email invalid format";
        }
      
        if (!values.password) {
          errors.password = "Password is Required";
        }
      
        const isValid = Object.keys(errors).length === 0;
        setIsSubmit(isValid);
  
        return errors;
      };
  return (
    <div>
        <div id="log-box-main" className="admin-login-box">
        <form className="emp-box admin-box" onSubmit={handleSubmit}>
                  <h1 className="ask">Admin Sign In</h1>
                  <br></br>
                  <TextField onChange={handleMail} value={email}  className="inp"  label="Email" ></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-5%"}}>{formErrors.email}</p>
                  <br></br>
                  <TextField onChange={handlePwd} value={password}  className="inp" type="password" label="Password" ></TextField>
                  <p  style={{color:"brown",fontSize:"13px",marginLeft:"-43%"}}>{formErrors.password}</p>
                  
                  <br></br>
                  <Button type="submit"  id="login-button"  variant="contained" >
                      Log In 
                  </Button>
                
            </form>
            <img className="login-img" height={400} width={500} src={auth}></img>
    </div>
    </div>
  )
}

export default AdminLogin