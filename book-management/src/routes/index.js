import {Navigate} from 'react-router-dom'
import Home from '../pages/home'
import Sort from '../pages/sort'
import Ranking from '../pages/ranking'
import BookDetail from '../pages/bookdetail'
import Person from '../pages/person'

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
        path:'',
        element:<Navigate to='home'/>
    },
    {
        path:'/bookdetail',
        element:<BookDetail/>
    }
]


export default routes