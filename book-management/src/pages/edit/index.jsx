import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import icon from './images/CATIA.jpg'

export default function Edit() {

    const navigate=useNavigate()

    // user_name 存放用户名
    let user_name='';

    // 从浏览器获取user_name
    if(localStorage.getItem('bookManagement')==null){
        user_name='';
        navigate('/login')
    }else{
        let bookManagement = JSON.parse(localStorage.getItem('bookManagement'));
        user_name=bookManagement.user_name;
    }

    const signRef=React.useRef();

    function handleEdit(){
        //向远程服务器发送请求
        axios({
            method: 'GET',
            url: `https://5v686c5039.goho.co/user=${user_name}/edit/intro=${signRef.current.value}`,
          }).then(
            response => {
                console.log(response);
            },
            error => {
              console.log(error);
            }
          )
          navigate('/person')
    }

    return (
    <div className="edit-container">
        <div className="edit">
            <div className="edit-icon"><img src={icon} alt="您的头像" width='80px'/></div>
            <div className="edit-name">
                昵称<br/>
                <input type="text" placeholder='无'/>
            </div>
            <div className="edit-sign">
                个性签名
                <textarea type="text" placeholder='这个人还什么都没有写' ref={signRef}/>
            </div>
            <div className="edit-revise">
                修改密码
                <input type="text" placeholder='请输入原密码'/>
                <input type="text" placeholder='请输入新密码'/>
                <input type="text" placeholder='请确认密码'/>
            </div>
            <button onClick={handleEdit}>确定</button>
        </div>
    </div>
    )
}
