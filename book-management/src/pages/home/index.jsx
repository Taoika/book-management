import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import './index.css'
import fire from './images/CATIA.jpg'
import more from './images/向右.png'
import book from './images/龙族合集.png'

export default function Home() {

    // 删除指定key的本地存储信息
    // localStorage.removeItem('patent')

    // 从浏览器获取用户id
    let patent = JSON.parse(localStorage.getItem('book-management-patent'));
    const user_id=patent.user_id;

    // 将用户id存储到本地
    // localStorage.setItem('book-management-patent', JSON.stringify({
    //     user_id:'1',
    // }))

    const [hot,setHot]=React.useState([]);
    const [guess,setGuess]=React.useState([]);

    // 用React.useEffect来进行state的设置 避免了重复刷新的问题 注意第二个参数得是一个空数组
    // 这样它就不会监听任何东西了
    React.useEffect(()=>{
        axios.post('http://localhost:8000/home',JSON.stringify({
            user_id:user_id,
          }))
          .then(
            (response)=>{
                setHot(response.data.hot);
                setGuess(response.data.guess);
            },
            (error)=>{
                console.log(error);
              })
    },[]);

    // 发送请求
   

    const navigate = useNavigate()
    const [messages1] = useState([
		{index:'001',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		{index:'002',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'003',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'004',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'005',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
	])

    const [messages2] = useState([
		{index:'001',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		{index:'002',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'003',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'004',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'005',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'006',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'007',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'008',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'009',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {index:'010',cover:'https://img2.baidu.com/it/u=895482900,4056576822&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=711',title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
	])

    function showDetail(m){
		navigate('/bookdetail',{
			replace:false,
			state:{
				id:m.id,
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
                    <img src={fire} alt="热门推荐" width='30px'/>
                    热门推荐
                </div>
                <Link to={''} className="home-content-head-right">
                    更多
                    <img src={more} alt="更多" width='20px'/>
                </Link>
            </div>
            {/* 书籍内容得从后台动态获取 包括书籍封面 提示信息书名 作者 分类*/}
            <ul className="home-content-body">
                {
                    hot.map((m)=>{
                        return (
                            <li key={m.index}>
                                <div className="home-book" onClick={()=>showDetail(m)}>
                                    <img src={m.cover} alt="龙族合集" width='216px' height='288px'/>
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
                    <img src={more} alt="刷新" width='20px'/>
                </Link>
            </div>
            <ul className="home-content-body home-guessYouLike">
                {
                    guess.map((m)=>{
                        return (
                            <li key={m.index}>
                                <div className="home-book">
                                    <img src={m.cover} alt="龙族合集" width='216px' height='288px'/>
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
