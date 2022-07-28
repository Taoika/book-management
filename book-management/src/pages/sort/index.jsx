import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import book from './images/龙族合集.png'

export default class Sort extends Component {
  render() {

    // 动态生成列表数据
    const data = Array.from({
        // 表示总共有多少数据
        length: 100,
      }).map((_, i) => ({
        // 列表的文字内容
        // href: './images/龙族合集.png',
        title: `${i}`,
        // avatar: 'https://joeschmoe.io/api/v1/random',
        description:
          '22222',
        content:
          '11111',
      }));
      
      const IconText = ({ icon, text }) => (
        <Space>
            {text}
            {React.createElement(icon)}
        </Space>
      );

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
        <List
            grid={{
                column:5,
            }}
            size="large"
            // 页码设置
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
            //   一页可以显示多少条数据
              pageSize: 15,
            }}
            // 数据来源
            dataSource={data}
            // 自定义渲染列表
            renderItem={(item) => (
                // 点赞收藏评论
                <List.Item
                  key={item.title}
                  actions={[
                    <img width={100} alt="logo" src={book}/>
                    // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                  ]}
                    // 另外元素
                    // extra={
                    //   <img width={100} alt="logo" src={book}/>
                    // }
                >
                    <List.Item.Meta
                    //   avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                </List.Item>
            )}
          />
      </div>
    )
  }
}