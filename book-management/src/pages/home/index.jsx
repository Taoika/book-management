import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import './index.css'
import fire from './images/CATIA.jpg'
import more from './images/向右.png'
import book from './images/龙族合集.png'

export default function Home() {

    // user_name 存放用户名
    let user_name='';

    // 从浏览器获取user_name
    if(localStorage.getItem('bookManagement')==null){
        user_name='';
    }else{
        let bookManagement = JSON.parse(localStorage.getItem('bookManagement'));
        user_name=bookManagement.user_name;
    }

    const [hot, setHot] = React.useState([]);
    const [guess, setGuess] = React.useState([]);

    // 用React.useEffect来进行state的设置 避免了重复刷新的问题 注意第二个参数得是一个空数组
    // 这样它就不会监听任何东西了
    React.useEffect((user_name)=>{
        axios({
            method: 'GET',
            url: `https://5v686c5039.goho.co/user=${user_name}/main`,
          }).then(
            response => {
                // console.log(response.data);
                setHot(response.data.hot_book);
                setGuess(response.data.like_book);
            },
            error => {
              console.log(error);
            }
          )
        //   自己的后台
        // axios.post('http://127.0.0.1:8000/home',JSON.stringify({
        //     user_id:user_id,
        //   }))
        //   .then(
        //     (response)=>{
        //         setHot(response.data.hot);
        //         setGuess(response.data.guess);
        //     },
        //     (error)=>{
        //         console.log(error);
        //       })
    },[]);

    const navigate = useNavigate()

    function showDetail(m){
		navigate('/bookdetail',{
			replace:false,
			state:{
				book:m
			}
		})
	}

    return (
        <div className="home">
            <div className="home-banner"></div>
            <div className="home-content">
                {/* 头部是固定的 */}
                <div className="home-content-head">
                    <div className="home-content-head-left">
                        <img src={fire} alt="热门推荐" width='30px' />
                        热门推荐
                    </div>
                    <div className="home-content-head-right">
                        更多
                        <img src={more} alt="更多" width='20px' />
                    </div>
                </div>
                {/* 书籍内容得从后台动态获取 包括书籍封面 提示信息书名 作者 分类*/}
                <ul className="home-content-body">
                    {
                        hot.map((m) => {
                            // console.log(m.url);
                            return (
                                <li key={m.index}>
                                    <div className="home-book" onClick={() => showDetail(m)}>
                                        <img src={'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711'} alt="加载失败了" width='216px' height='288px' />
                                        <div className="home-book-titleAndPonit">
                                            <div className="home-book-title">{m.title}</div>
                                            <div className="home-book-point">{m.point}</div>
                                        </div>
                                        <div className="home-book-authorAndTag">
                                            <div className="home-book-author">{m.author} 著</div>
                                            <div className="home-book-tag">{m.tag}</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="home-content">
                <div className="home-content-head">
                    <div className="home-content-head-left">猜你喜欢</div>
                    <Link to={''} className="home-content-head-right">
                        刷新
                        <img src={more} alt="刷新" width='20px' />
                    </Link>
                </div>
                <ul className="home-content-body home-guessYouLike">
                    {
                        guess.map((m) => {
                            return (
                                <li key={m.index}>
                                    <div className="home-book">
                                        <img src={'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711'} alt="加载失败了" width='216px' height='288px' />
                                        <div className="home-book-titleAndPonit">
                                            <div className="home-book-title">{m.title}</div>
                                            <div className="home-book-point">{m.point}</div>
                                        </div>
                                        <div className="home-book-authorAndTag">
                                            <div className="home-book-author">{m.author} 著</div>
                                            <div className="home-book-tag">{m.tag}</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
