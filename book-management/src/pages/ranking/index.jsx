import React from 'react'
import './index.css'
import { NavLink,useNavigate } from 'react-router-dom'
import { List, Space } from 'antd';
import axios from 'axios'

export default function Ranking() {

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
    const [tag,setTag]=React.useState('评分最高');

    const navigate=useNavigate()

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
        // 被选中的标签变换底色
        const tags=document.querySelectorAll(`.Ranking-nav>li`);
        for(const i of tags){
            i.style.backgroundColor='#d9d9d9'
            i.style.color='black'
            if(i.innerHTML===tag){
                i.style.backgroundColor='#773D31'
                i.style.color='white'
            }     
        }
        //向远程服务器发送请求
        axios({
            method: 'GET',
            url: `https://5v686c5039.goho.co/user=${user_name}/sort=${tag}`,
          }).then(
            response => {
                console.log(response);
            },
            error => {
              console.log(error);
            }
          )
        // 发送请求
        // axios.post('http://localhost:8000/ranking',JSON.stringify({
        //     user_id:user_id,
        //     tag:tag,
        //   }))
        //   .then(
        //     (response)=>{
        //         console.log(response.data.message);
        //         setMessage(response.data.message)
        //     },
        //     (error)=>{
        //         console.log(error);
        //       })
    
        },[tag])

    // 处理标签点击
    function handleClick(Event){
        // 设置tag状态
        setTag(Event.target.innerHTML);
    }

    // console.log(message);
    //将请求回来的data替换为arr usestate
    const data = message.map((m,i) => {
        return ({
            title: <div><div className='Ranking-Rank'>NO.{i+1}</div>{m.book.title}<div className='Ranking-author'>{m.book.author} 著</div>
                <strong className='Ranking-label'>标签：</strong><div className='Ranking-tag'>{m.book.tag}</div>

            </div>,
            content:
                <div className='Ranking-text'><div className='Ranking-jianjie'>简介</div>{m.book.bookInfo}
                    <div className='Ranking-line'></div>
                    <div className='Ranking-score'>{m.book.point}</div>
                    <div className='Ranking-scorepople'>共 <i style={{ color: 'brown' }}>{m.book.pointCount}</i> 人点评</div>
                    <ul className='Ranking-imf'>
                        <li>浏览量 <strong>{m.book.readingCount}</strong> 次</li>
                        <li>点赞数 <strong>{m.book.goodCount}</strong> 次</li>
                        <li>收藏数 <strong>{m.book.starCount}</strong> 次</li>
                    </ul>
                </div>,
        })
    })

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <div className='Ranking'>
            {/* 顶部导航 */}
            <ul className='Ranking-nav'>
                <li onClick={(Event)=>handleClick(Event)}>评分最高</li>
                <li onClick={(Event)=>handleClick(Event)}>阅读人数</li>
                <li onClick={(Event)=>handleClick(Event)}>收藏人数</li>
                <li onClick={(Event)=>handleClick(Event)}>点赞数量</li>
            </ul>
            {/*  */}
            <List
                grid={{
                    // gutter: 506,
                    column: 1,
                }}
                className='Ranking-list'
                // itemLayout="vertical"
                size=""
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                alt="logo"
                                src="https://img2.baidu.com/it/u=2909583348,799512575&fm=253&fmt=auto&app=138&f=JPEG?w=354&h=500"
                            />
                        }
                    >
                        <List.Item.Meta
                            title={item.title}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </div>

    )
}
