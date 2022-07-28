import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { List, Space } from 'antd';


const data = Array.from({
    length: 23,
}).map((_, i) => ({
    title: `我的老婆最可爱`,
    content:
        <div className='Ranking-text'>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>,
}));

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default function Ranking() {
    return (
        <div className='Ranking'>
            {/* 顶部导航 */}
            <ul className='Ranking-nav'>
                <li><NavLink to='/a'>评分最高</NavLink></li>
                <li><NavLink to='/b'>阅读人数</NavLink></li>
                <li><NavLink to='/c'>收藏人数</NavLink></li>
                <li><NavLink to='/d'>点赞数量</NavLink></li>
            </ul>
            {/*  */}
            <List
                grid={{
                    gutter: 506,
                    column: 2,
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
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
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
