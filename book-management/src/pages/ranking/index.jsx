import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { List, Space } from 'antd';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const data = arr.map((x, i) => {
    return ({
        title: <div><div className='Ranking-Rank'>NO.1</div>我的老婆最可爱<div className='Ranking-author'>桃花源 著</div>
            <strong className='Ranking-label'>标签：</strong><div className='Ranking-tag'>影视原著</div>

        </div>,
        content:
            <div className='Ranking-text'><div className='Ranking-jianjie'>简介</div>住房位置没选好差点要了主人的命 刚搬来的女租户总听见卧室内有异响，向我求助，我一看监控就让她立刻搬家……--情节虚构，请勿模仿
                <div className='Ranking-line'></div>
                <div className='Ranking-score'>8.7</div>
                <div className='Ranking-scorepople'>共 <i style={{ color: 'brown' }}>2585</i> 人点评</div>
                <ul className='Ranking-imf'>
                    <li>浏览量 <strong>1000</strong> 次</li>
                    <li>点赞数 <strong>1000</strong> 次</li>
                    <li>收藏数 <strong>1000</strong> 次</li>
                </ul>
            </div>,
    })
})
// const data = Array.from({
//     length: 23,
// }).map((_, i) => ({
//     title: <div><div className='Ranking-Rank'>NO.1</div>我的老婆最可爱<div className='Ranking-author'>桃花源 著</div>
//         <strong className='Ranking-label'>标签：</strong><div className='Ranking-tag'>影视原著</div>

//     </div>,
//     content:
//         <div className='Ranking-text'><div className='Ranking-jianjie'>简介</div>住房位置没选好差点要了主人的命 刚搬来的女租户总听见卧室内有异响，向我求助，我一看监控就让她立刻搬家……--情节虚构，请勿模仿
//             <div className='Ranking-line'></div>
//             <div className='Ranking-score'>8.7</div>
//             <div className='Ranking-scorepople'>共 <i style={{ color: 'brown' }}>2585</i> 人点评</div>
//             <ul className='Ranking-imf'>
//                 <li>浏览量 <strong>1000</strong> 次</li>
//                 <li>点赞数 <strong>1000</strong> 次</li>
//                 <li>收藏数 <strong>1000</strong> 次</li>
//             </ul>
//         </div>,
// }));

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
