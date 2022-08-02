import { Pagination} from 'antd';
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './index.css'

export default function Sort() {
    
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

    // message状态存放有后台传输进来的信息
    const [message,setMessage]=React.useState([]);

    // 刚进入页面的时候设置一个tag状态
    const [tag,setTag]=React.useState('文学历史');
    
    // 转化为数字tag
    const [numTag,setNumTag]=React.useState('1');

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

    // 1-文学历史 2-艺术经典  3-科学科技 4- 生活医学 5-杂志情感 6- 科幻玄幻 7-成长教育 8-财经军事 9  -名著传统
    // tag属状态改变 标签底色改变 
    // 发送请求 获取数据 message状态改变 渲染页面
    // 分页状况改变 改变页面 改变分页器
    React.useEffect(()=>{
        // 被选中的标签变换底色
        const tags=document.querySelectorAll(`.sort-tag>li`);
        for(const i of tags){
            i.style.backgroundColor='#d9d9d9'
            if(i.innerHTML===tag){
                i.style.backgroundColor='#773D31'
            }     
        }
        //向远程服务器发送请求
        axios({
            method: 'GET',
            url: `https://5v686c5039.goho.co/user=${user_name}/sort=${numTag}`,
          }).then(
            response => {
                console.log(response);
            },
            error => {
              console.log(error);
            }
          )
        // 发送请求
        // axios.post('http://localhost:8000/sort',JSON.stringify({
        //     user_id:user_id,
        //     tag:tag,
        //   }))
        //   .then(
        //     (response)=>{
        //         setMessage(response.data.message);
        //         setCount({
        //             minValue:0,
        //             maxValue:15
        //         })
        //         setPage(1);
        //     },
        //     (error)=>{
        //         console.log(error);
        //       })

    },[tag])

    // 处理标签点击
    function handleClick(Event){
        // t承载标签
        let t=Event.target.innerHTML;
        // 设置tag状态
        setTag(t);
        // 在这里将文字tag转化为数字tag numT承载数字tag
        let numT=t=='文学历史'?1:t=='艺术经典'?2:t=='科学科技'?3:t=='生活医学'?4:t=='杂志情感'?5:t=='科幻玄幻'?6:t=='成长教育'?7:t=='财经军事'?8:t=='名著传统'?9:0
        console.log(numT);
        setNumTag(numT);
    }


    return (
      <div className="sort">
        <div className="sort-head">
            <div className="sort-title">标签选择</div>
            <ul className="sort-tag">
                <li onClick={(Event)=>handleClick(Event)}>文学历史</li>
                <li onClick={(Event)=>handleClick(Event)}>艺术经典</li>
                <li onClick={(Event)=>handleClick(Event)}>科学科技</li>
                <li onClick={(Event)=>handleClick(Event)}>生活医学</li>
                <li onClick={(Event)=>handleClick(Event)}>杂志情感</li>
                <li onClick={(Event)=>handleClick(Event)}>科幻玄幻</li>
                <li onClick={(Event)=>handleClick(Event)}>成长教育</li>
                <li onClick={(Event)=>handleClick(Event)}>财经军事</li>
                <li onClick={(Event)=>handleClick(Event)}>名著传统</li>
            </ul>
        </div>
        <ul className="sort-content">
            { 
                // 根据message状态动态生成数据 
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