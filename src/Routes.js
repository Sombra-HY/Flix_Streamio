import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { InputSearch } from './pages/InputSearch/InputSearch';
import { Header } from './latout/Header/Header';
import PageMidia from './pages/PageMidia/Pagemidia';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:name?" element={<InputSearch />} />
                <Route path="/serie/:id" element={<PageMidia />} />
                <Route path="/movie/:id" element={<PageMidia />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
