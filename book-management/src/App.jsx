import React from 'react';
import {useRoutes} from 'react-router-dom'
import routes from './routes'
import 'antd/dist/antd.min.css'
import './App.css'
import Nav from './component/nav'

export default function App() {
    const element=useRoutes(routes)
    return (
        <div>
            <Nav/>
            {element}
        </div>
    )
}