import React, { useState } from 'react'
import {Link,useNavigate,Outlet} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import userIcon from './images/CATIA.jpg'
import edit from './images/编辑.png'
import quit from './images/刷新.png'
import more from './images/右箭头.png'
import book from './images/龙族合集.png'
import star from './images/红星星.png'
import history from './images/历史浏览.png'

export default function Person() {

    const navigate = useNavigate()

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

    const [messages1] = useState([
		{index:'001',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		{index:'002',cover:{book},title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'003',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
	])

    function showDetail(m){
		navigate('/bookdetail',{
			replace:false,
			state:{
				id:m.id,
			}
		})
	}

    function showCollectAndHistory(p){
        navigate('/collectandhistory',{
            replace:false,
            state:{
                id:p,
            }
        })
    }

    function handleQuit(){
        
        //向远程服务器发送请求
        axios({
            method: 'GET',
            url: `https://5v686c5039.goho.co/user=${user_name}/edit/logout`,
          }).then(
            response => {
                console.log(response);
                localStorage.removeItem('bookManagement');
        navigate('/login')
            },
            error => {
              console.log(error);
            }
          )
    }

    return (
        <div>
            <Outlet/>
            <div className="person">
                <div className="person-banner"></div>
                <div className="person-personalInfo">
                    <div className="person-userIcon">
                        <img src={userIcon} alt="用户头像" width="80px"/>
                    </div>
                    <div className="person-usernameAndIdio">
                        <div className="person-username">疯狂戴夫</div>
                        <div className="person-idio">这个人什么都没写</div>
                    </div>
                    <div className="person-edit">
                        <Link to='edit'>
                            <img src={edit} alt="编辑资料" width="18px"/>
                            编辑资料
                        </Link>
                        <img src={more} alt="进入编辑资料界面" width="14px"/>
                    </div>
                    <div className="person-quit">
                        <div onClick={handleQuit}>
                            <img src={quit} alt="退出登录" width="18px"/>
                            退出登录
                        </div>
                        <img src={more} alt="退出登录" width="14px"/>
                    </div>
                </div>
                <div className="person-content">
                    <div className="person-content-head">
                        <div className="person-content-head-left">
                            <img src={star} alt="收藏" width='30px'/>
                            收藏
                        </div>
                        <div onClick={showCollectAndHistory} className="person-content-head-right">
                            <img src={more} alt="更多" width='13px'/>
                        </div>
                    </div>
                    {/* 书籍内容得从后台动态获取 包括书籍封面 提示信息书名 作者 分类*/}
                    <ul className="person-content-body">
                        {
                            messages1.map((m)=>{
                                return (
                                    <li key={m.index}>
                                        <div className="person-book" onClick={()=>showDetail(m)}>
                                            <img src={book} alt="龙族合集" width='216px' height='288px'/>
                                            <div className="person-book-titleAndPonit">
                                                <div className="person-book-title">{m.title}</div>
                                                <div className="person-book-point">{m.point}</div>
                                            </div>
                                            <div className="person-book-authorAndTag">
                                                <div className="person-book-author">{m.author} 著</div>
                                                <div className="person-book-tag">{m.tag}</div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="person-content history">
                    <div className="person-content-head">
                        <div className="person-content-head-left">
                            <img src={history} alt="历史浏览" width='30px'/>
                            历史浏览
                        </div>
                        <div onClick={showCollectAndHistory} className="person-content-head-right">
                            <img src={more} alt="更多" width='13px'/>
                        </div>
                    </div>
                    {/* 书籍内容得从后台动态获取 包括书籍封面 提示信息书名 作者 分类*/}
                    <ul className="person-content-body">
                        {
                            messages1.map((m)=>{
                                return (
                                    <li key={m.index}>
                                        <div className="person-book" onClick={()=>showDetail(m)}>
                                            <img src={book} alt="龙族合集" width='216px' height='288px'/>
                                            <div className="person-book-titleAndPonit">
                                                <div className="person-book-title">{m.title}</div>
                                                <div className="person-book-point">{m.point}</div>
                                            </div>
                                            <div className="person-book-authorAndTag">
                                                <div className="person-book-author">{m.author} 著</div>
                                                <div className="person-book-tag">{m.tag}</div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

