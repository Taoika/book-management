import { Pagination} from 'antd';
import React, {useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'
import book from './images/龙族合集.png'

export default function Sort() {

    // 从浏览器获取用户id
    let patent = JSON.parse(localStorage.getItem('book-management-patent'));
    const user_id=patent.user_id;

    const [message,setMessage]=React.useState([]);

    React.useEffect(()=>{
        const tag=document.querySelector('.sort-tag>a');
        tag.style.backgroundColor='#773D31';
        axios.post('http://localhost:8000/sort',JSON.stringify({
            user_id:user_id,
            tag:tag.innerHTML,
          }))
          .then(
            (response)=>{
                setMessage(response.data.message);
            },
            (error)=>{
                console.log(error);
              })
    },[]);

    const navigate=useNavigate()

    // count状态用于记录分页数
    
    const [count,setCount]=useState({
        minValue:0,
        maxValue:15
    })
  
    // 处理分页请求
    function handleChange(value){
      if(value<=1){
        setCount({
            minValue:0,
            maxValue:15
        })
      } else {
        setCount({
            minValue:(value-1) * 15,
            maxValue:(value-1) * 15+ 15
        })
      }
    }

    // 展示书籍详情
    function showDetail(m){
        // 第一个参数是切换路径
        // navigate的第二个参数是一个对象 放着切换路由的信息
        navigate('/bookdetail',{
            replace:false,
            // 这个参数应该是传过去了 但是不知道在哪里可以获取
            state:{
                id:m.index,
            }
        })
    }

    // 点击分类标签
    function handleClick(Event){
        const tags=document.querySelectorAll(`.sort-tag>a`);
        // 被选中的标签变换底色
        for(const i of tags){
            i.style.backgroundColor='#d9d9d9'
        }
        Event.target.style.backgroundColor='#773D31'

        axios.post('http://localhost:8000/sort',JSON.stringify({
            user_id:user_id,
            tag:Event.target.innerHTML,
          }))
          .then(
            (response)=>{
                // const books=document.querySelectorAll('.sort-content>li')
                // for(const i of books){
                //     i.remove();
                // }
                setMessage(response.data.message);
            },
            (error)=>{
                console.log(error);
              })
    }

    return (
      <div className="sort">
        <div className="sort-head">
            <div className="sort-title">标签选择</div>
            <div className="sort-tag">
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
                <Link to={''} onClick={(Event)=>handleClick(Event)}>科幻经典</Link>
            </div>
        </div>
        <ul className="sort-content">
            {
                message.slice(count.minValue,count.maxValue).map((m)=>{
                    return (
                        <li key={m.index}>
                            {/* 注意这里的传参位置 第一个是箭头函数 返回一个函数的调用 此函数调用传进参数m */}
                            <div className="sort-book" onClick={()=>showDetail(m)}>
                                <img src={m.cover} alt={m.title} width='216px' height='288px'/>
                                <div className="sort-book-nameAndScore">
                                    <div className="sort-book-name">{m.title}</div>
                                    <div className="sort-book-score">{m.point}</div>
                                </div>
                                <div className="sort-book-authorAndType">
                                    <div className="sort-book-author">{m.author} 著</div>
                                    <div className="sort-book-type">{m.tag}</div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        {/* 暂时只可以通过箭头进行逐页翻转 没有办法直接跳转 */}
        <Pagination 
            defaultCurrent={1}
            pageSize={15}
            onChange={handleChange}
            total={message.length}
        />
      </div>
    )
}