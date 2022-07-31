import { Pagination} from 'antd';
import React from 'react'
import {useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'

export default function Search() {

    // 从浏览器获取用户id
    let patent = JSON.parse(localStorage.getItem('book-management-patent'));
    const user_id=patent.user_id;

    // message状态存放有后台传输进来的信息
    const [message,setMessage]=React.useState([]);

    // 刚进入页面的时候设置一个tag状态
    const [tag,setTag]=React.useState('科幻经典');

    // 当数据源改变 初始化分页器状态
    const [page,setPage]=React.useState(1);

    const navigate=useNavigate()

    // count状态用于记录分页数
    const [count,setCount]=React.useState({
        minValue:0,
        maxValue:15
    })
  
    // 处理分页请求
    function handleChange(value){
        setPage(value);
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

    // tag属状态改变 标签底色改变 
    // 发送请求 获取数据 message状态改变 渲染页面
    // 分页状况改变 改变页面 改变分页器
    React.useEffect(()=>{
        console.log('tag属性改变了');
        // 被选中的标签变换底色
        const tags=document.querySelectorAll(`.search-tag>span`);
        for(const i of tags){
            i.style.backgroundColor='#d9d9d9'
            if(i.innerHTML===tag){
                i.style.backgroundColor='#773D31'
            }     
        }
        // 发送请求
        axios.post('http://localhost:8000/search',JSON.stringify({
            user_id:user_id,
            tag:tag.innerHTML,
          }))
          .then(
            (response)=>{
                console.log(response.data);
                setMessage(response.data.message);
                setCount({
                    minValue:0,
                    maxValue:15
                })
                setPage(1);
            },
            (error)=>{
                console.log(error);
              })
    },[tag])

    // 处理标签点击
    function handleClick(Event){
        // 设置tag状态
        setTag(Event.target.innerHTML);
    }

  return (
    <div className="search">
        <div className="search-head">
            <div className="search-title">为您搜索出xxx条结果</div>
            <ul className="search-tag">
                <li onClick={(Event)=>handleClick(Event)}>科幻经典</li>
                <li onClick={(Event)=>handleClick(Event)}>都市言情</li>
                <li onClick={(Event)=>handleClick(Event)}>悬疑推理</li>
            </ul>
        </div>
        <ul className="search-content">
            { 
                // 根据message状态动态生成数据 
                message.slice(count.minValue,count.maxValue).map((m)=>{
                    return (
                        <li key={m.index}>
                            {/* 注意这里的传参位置 第一个是箭头函数 返回一个函数的调用 此函数调用传进参数m */}
                            <div className="search-book" onClick={()=>showDetail(m)}>
                                <img src={m.cover} alt={m.title} width='216px' height='288px'/>
                                <div className="search-book-nameAndScore">
                                    <div className="search-book-name">{m.title}</div>
                                    <div className="search-book-score">{m.point}</div>
                                </div>
                                <div className="search-book-authorAndType">
                                    <div className="search-book-author">{m.author} 著</div>
                                    <div className="search-book-type">{m.tag}</div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        <Pagination 
            defaultCurrent={1}
            pageSize={15}
            onChange={handleChange}
            total={message.length}
            // 可跳转页面
            showQuickJumper='true'
            // 当前页数与page状态保持一致
            current={page}
        />
    </div>
  )
}
