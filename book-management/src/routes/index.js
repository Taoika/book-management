import {Navigate} from 'react-router-dom'
import Home from '../pages/home'
import Sort from '../pages/sort'
import Ranking from '../pages/ranking'
import BookDetail from '../pages/bookdetail'
import Person from '../pages/person'
import Search from '../pages/search'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgetPassword from '../pages/forgetPassword' 
import Collectandhistory from '../pages/collectandhistory'
import Edit from '../pages/edit'

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
        path:'/ranking',
        element:<Ranking/>
    },
    {
        path:'/person',
        element:<Person/>,
        children:[
            {
                path:'edit',
                element:<Edit/>
            }
        ]
    },
    {
        path:'/bookdetail',
        element:<BookDetail/>
    },
    {
        path:'/search',
        element:<Search/>
    },
    {
        path:'/login',
        element:<Login/>,
    },
    {
        path:'/register',
        element:<Register/>,
    },
    {
        path:'/forgetPassword',
        element:<ForgetPassword/>,
    },
    {
        path:'/collectandhistory',
        element:<Collectandhistory/>,
    },
    {
        path:'',
        element:<Navigate to='home'/>
    },
]


export default routes