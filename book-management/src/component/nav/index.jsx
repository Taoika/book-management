import React, { Component } from 'react'
import {Link,Outlet} from 'react-router-dom'
import './index.css'
import userIcon from './images/CATIA.jpg'
import searchIcon from './images/搜索.png'

export default class Nav extends Component {
  render() {
    return (
        <div className="nav-container">
            <div className="nav">
                <ul className="nav-screen">
                    <li key='001'><Link to='/home' >首页</Link></li>
                    <li key='002'><Link to='/ranking' >排行榜</Link></li>
                    <li key='003'><Link to='/sort' >分类</Link></li>
                </ul>
                <div className="nav-right">
                    <div className="nav-search">
                        <button><img src={searchIcon} alt="搜索" width='16px'/></button>
                        <input type="text" placeholder='搜索'/>
                    </div>
                    <Link to='/person' className="nav-user-icon">
                        <img src={userIcon} alt="用户头像" width='40px'/>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
  }
}
