import {Navigate} from 'react-router-dom'
import Home from '../pages/home'
import Sort from '../pages/sort'
import Ranking from '../pages/ranking'
import BookDetail from '../pages/bookdetail'
import Person from '../pages/person'
import Search from '../pages/search'

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
        element:<Person/>
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
        path:'',
        element:<Navigate to='home'/>
    },
]


export default routes