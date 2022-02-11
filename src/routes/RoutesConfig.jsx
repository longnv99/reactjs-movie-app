import React from 'react'
import Home from '../pages/Home'
import ViewMore from '../pages/ViewMore'
import Detail from '../pages/detail/Detail'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/form/Login'
import Register from '../pages/form/Register'
import WatchList from '../pages/WatchList'
import Watched from '../pages/Watched'

function RoutesConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path=':category' >
                <Route path=':type' element={<ViewMore />}>
                    <Route path='search/:keyword' element={<ViewMore />}/>
                </Route>
                <Route path='detail/:id' element={<Detail />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/watchlist' element={<WatchList />} />
            <Route path='/watched' element={<Watched />} />
        </Routes>
    )
}

export default RoutesConfig
