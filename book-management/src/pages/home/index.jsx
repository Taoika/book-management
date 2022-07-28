import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './index.css'
import fire from './images/CATIA.jpg'
import more from './images/向右.png'
import book from './images/龙族合集.png'

export default function Home() {
    const navigate = useNavigate()
    const [messages1] = useState([
		{id:'001',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		{id:'002',cover:{book},title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'003',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'004',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'005',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
	])

    const [messages2] = useState([
		{id:'001',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
		{id:'002',cover:{book},title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'003',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'004',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'005',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'006',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'007',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'008',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'009',cover:{book},title:'龙族',point:'9.0',author:'江南',tag:'玄幻精品'},
        {id:'010',cover:{book},title:'龙族合集',point:'9.0',author:'江南',tag:'玄幻精品'},
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
                    messages1.map((m)=>{
                        return (
                            <li key={m.id}>
                                <div className="home-book" onClick={()=>showDetail(m)}>
                                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
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
                    messages2.map((m)=>{
                        return (
                            <li key={m.id}>
                                <div className="home-book">
                                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
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
