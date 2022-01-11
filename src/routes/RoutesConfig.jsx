import React from 'react'
import Home from '../pages/Home'
import ViewMore from '../pages/ViewMore'
import Detail from '../pages/detail/Detail'
import { Routes, Route } from 'react-router-dom'

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
        </Routes>
    )
}

export default RoutesConfig
