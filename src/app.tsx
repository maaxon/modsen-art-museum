import Layout from '@components/layout/layout';
import Detail from '@pages/Detail/detail';
import Favorites from '@pages/Favorites/favorites';
import Home from '@pages/Home/home.tsx';
import React, { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import {routes} from "@constants/routes.ts";


const App: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {routes.map((route)=><Route path={route.path} element={<Suspense><route.component/></Suspense>}/>)}
            </Route>
        </Routes>
    );
};

export default App;
