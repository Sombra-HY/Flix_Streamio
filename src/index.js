import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
