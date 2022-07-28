import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space,Pagination } from 'antd';
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import book from './images/龙族合集.png'

export default class Sort extends Component {
  render() {

    // 动态生成列表数据
    // const data = Array.from({
    //     // 表示总共有多少数据 可以用从后台就收来的对象进行长度计算
    //     length: 100,
    //   }).map((_, i) => ({
    //     title: `${i}`,
    //     description:
    //       '22222',
    //     content:
    //       '11111',
    //   }));

    return (
      <div className="sort">
        <div className="sort-head">
            <div className="sort-title">标签选择</div>
            <div className="sort-tag">
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
                <Link to={''}>科幻经典</Link>
            </div>
        </div>
        <div className="sort-content">
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
            <div className="sort-book">
                <img src={book} alt="龙族合集" width='216px' height='288px'/>
                <div className="sort-book-nameAndScore">
                    <div className="sort-book-name">龙族</div>
                    <div className="sort-book-score">9.0</div>
                </div>
                <div className="sort-book-authorAndType">
                    <div className="sort-book-author">江南 著</div>
                    <div className="sort-book-type">玄幻精品</div>
                </div>
            </div>
        </div>
        <Pagination defaultCurrent={1} total={100} />
      </div>
    )
//     此行应该放在Pagination标签下面 并将标签删除
//     <List
//     grid={{
//         column:5,
//     }}
//     size="large"
//     // 页码设置
//     pagination={{
//       onChange: (page) => {
//         console.log(page);
//       },
//       pageSize: 15,
//     }}
//     // 数据来源
//     dataSource={data}
//     // 自定义渲染列表
//     renderItem={(item) => (
//         // 点赞收藏评论
//         <List.Item key={item.title}>
//             <List.Item.Meta
//               title={<img width={100} alt="cover" src={book}/>}
//               description={item.description}
//             />
//             {item.content}
//         </List.Item>
//     )}
//   />
  }
}