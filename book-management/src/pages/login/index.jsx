import React,{useState} from 'react'
import {useNavigate,Outlet} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import logo from './images/登录栏懂书.png'
import icon from './images/CATIA.jpg'

export default function Login() {

    const [account,setAccount]=React.useState('');
    const [password,setPassword]=React.useState('');

    function handleAccountBlur(Event){
        setAccount(Event.target.value)
    }

    function handlePasswordBlur(Event){
        setPassword(Event.target.value)
    }

    const formData1=new FormData();
    formData1.append('user_name',account);
    formData1.append('password',password);

    // localStorage.setItem('bookManagement', JSON.stringify({
    //     user_name:"136_154_209_224_152_155_222_198_224_",
    // }))

    // 点击登录按钮 向后台发送登录请求
    function handleClick(){
        // console.log(formData1);
        axios({
            method: 'POST',
            url: 'https://5v686c5039.goho.co/login',
            data:formData1,
          }).then(
            response => {
                console.log('成功登陆');
                navigate('/home');
                localStorage.setItem('bookManagement', JSON.stringify({
                    user_name:response.data.user_name,
                }))
            },
            error => {
              console.log(error);
            }
          )
    //     axios.post('https://5v686c5039.goho.co/login',JSON.stringify({
    //         user_name:account,
    //         password:password,
    //       }))
    //       .then(
    //         (response)=>{
    //             console.log(response);
    //         },
    //         (error)=>{
    //             console.log(error);
    //           })
    }

    const navigate = useNavigate()
    function toRegister(){
        navigate('/register');
    }

    function handleForget(){
        navigate('/forgetPassword');
    }

  return (
    <div className="login-container">
        <div className="login">
            <div className="login-left">
                <div className="login-title">懂书</div>
                <div className="login-content">不仅懂书，还懂你</div>
                <div className="login-logo"><img src={logo} alt="懂书" /></div>
            </div>
            <div className="login-right">
                <div className="login-icon"><img src={icon} alt="你的头像" width='60px'/></div>
                <div className="login-accountAndPassword">
                    <input type="text" className='.login-account' placeholder='账号' onBlur={(Event)=>handleAccountBlur(Event)}/>
                    <input type="password" className='.login-password' placeholder='密码' onBlur={(Event)=>handlePasswordBlur(Event)}/>
                </div>
                <div onClick={handleForget} className="login-forgetPassword">忘记密码？</div>
                <div className="login-registerAndLogin">
                    <button onClick={toRegister}>注册</button>
                    <button onClick={handleClick}>登录</button>
                </div>
            </div>
        </div>
        <Outlet />
    </div>
    
  )
}
