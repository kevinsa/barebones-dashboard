import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';

const Main = (props) => {
    return (
        <div class="container">
            <Routes>
                <Route exact path='/' component={Home} />
            </Routes>
        </div>
    )
}

export default Main;