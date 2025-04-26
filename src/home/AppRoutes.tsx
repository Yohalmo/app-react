import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../home/Dashboard';
import Receta from './home/page/Receta';

const AppRoute: React.FC = () =>{
    return (
        <Routes>
            {}
            <Route path='/' element={<Dashboard/>}>
                {}
                <Route index element={ <Receta/> }></Route>
            </Route>
        </Routes>
    )
}

export default AppRoute;