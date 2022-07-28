import {Navigate} from 'react-router-dom'
import Home from '../pages/home'
import Sort from '../pages/sort'

const routes=[
    {
        path:'/home',
        element:<Home/>,
    },
    {
        path:'/sort',
        element:<Sort/>
    },
    {
        path:'',
        element:<Navigate to='home'/>
    }
]

export default routes