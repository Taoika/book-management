import React,{useState} from 'react'
import {useNavigate,Outlet} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import logo from './images/登录栏懂书.png'

export default function ForgetPassword() {

    // 用各状态记录输入框信息 
    const [username,setUsername]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [phone,setPhone]=React.useState('');
    const [password,setPassword]=React.useState('');
    const [newPassword,setNewPassword]=React.useState('');

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

    function handleNewPassword(Event){
        setNewPassword(Event.target.value)
    }

    // 处理用户点击注册按钮
    function handleforgetPassword(){
        console.log(username,email,phone,password,newPassword);
        axios.post('http://10.33.89.249:8080/change_password',JSON.stringify({
            user_name:username,
            old_password:password,
            new_repassword:newPassword,
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
    <div className="forgetPassword-container">
        <div className="forgetPassword">
            <div className="forgetPassword-left">
                <div className="forgetPassword-title">懂书</div>
                <div className="forgetPassword-content">不仅懂书，还懂你</div>
                <div className="forgetPassword-logo"><img src={logo} alt="懂书" /></div>
            </div>
            <div className="forgetPassword-right">
                <div className="forgetPassword-right-title">修改密码</div>
                <div className="forgetPassword-right-content">
                    <input type="text" placeholder='用户名' onBlur={(Event)=>handleUsername(Event)}/>
                    <input type="text" placeholder='手机' onBlur={(Event)=>handlePhone(Event)}/>
                    <input type="text" placeholder='邮箱' onBlur={(Event)=>handleEmail(Event)}/>
                    <input type="password" placeholder='原密码' onBlur={(Event)=>handlePassword(Event)}/>
                    <input type="password" placeholder='请输入新密码' onBlur={(Event)=>handleNewPassword(Event)}/>
                </div>
                <button onClick={handleforgetPassword} >确定</button>
            </div>
        </div>
        <Outlet />
    </div>
  )
}