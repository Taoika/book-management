import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import fire from './images/CATIA.jpg'
import more from './images/向右.png'
import book from './images/龙族合集.png'

export default class Home extends Component {
  render() {
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
            <div className="home-content-body">
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>

            </div>
        </div>
        <div className="home-content">
            <div className="home-content-head">
                <div className="home-content-head-left">猜你喜欢</div>
                <Link to={''} className="home-content-head-right">
                    刷新
                    <img src={more} alt="刷新" width='20px'/>
                </Link>
            </div>
            <div className="home-content-body home-guessYouLike">
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
                <div className="home-book">
                    <img src={book} alt="龙族合集" width='216px' height='288px'/>
                    <div className="home-book-nameAndScore">
                        <div className="home-book-name">龙族</div>
                        <div className="home-book-score">9.0</div>
                    </div>
                    <div className="home-book-authorAndType">
                        <div className="home-book-author">江南 著</div>
                        <div className="home-book-type">玄幻精品</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
