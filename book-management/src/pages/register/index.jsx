import React,{useState} from 'react'
import {useNavigate,Outlet} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import logo from './images/登录栏懂书.png'

export default function Register() {

    // 用各状态记录输入框信息 
    const [username,setUsername]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [phone,setPhone]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [rePassword,setRePassword]=React.useState('');

    function handleUsername(Event){
        setUsername(Event.target.value)
    }

    function handleEmail(Event){
        setEmail(Event.target.value)
    }

    function handlePhone(Event){
        setPhone(Event.target.value)
    }

    function handlePassword(Event){
        setPassword(Event.target.value)
    }

    function handleRePassword(Event){
        setRePassword(Event.target.value)
    }

    // 处理用户点击注册按钮
    function handleRegister(){
        console.log(username,email,phone,password,rePassword);
        axios.post('https://5v686c5039.goho.co/registered',JSON.stringify({
            user_name:username,
            password:password,
            repassword:rePassword,
            phone_number:phone,
            email:email,
          }))
          .then(
            (response)=>{
                console.log(response);
            },
            (error)=>{
                console.log(error);
              })
    }

  return (
    <div className="register-container">
        <div className="register">
            <div className="register-left">
                <div className="register-title">懂书</div>
                <div className="register-content">不仅懂书，还懂你</div>
                <div className="register-logo"><img src={logo} alt="懂书" /></div>
            </div>
            <div className="register-right">
                <div className="register-right-title">注册</div>
                <div className="register-right-content">
                    <input type="text" placeholder='用户名' onBlur={(Event)=>handleUsername(Event)}/>
                    <input type="text" placeholder='邮箱' onBlur={(Event)=>handleEmail(Event)}/>
                    <input type="text" placeholder='手机' onBlur={(Event)=>handlePhone(Event)}/>
                    <input type="password" placeholder='请输入密码' onBlur={(Event)=>handlePassword(Event)}/>
                    <input type="password" placeholder='确认密码' onBlur={(Event)=>handleRePassword(Event)}/>
                    <button onClick={handleRegister} >注册</button>
                </div>
            </div>
        </div>
        <Outlet />
    </div>
  )
}
