import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';

//components
import { GridContent } from './components/GridContent/GridContent';
import { InputSearch } from './components/InputSearch/InputSearch';
import { Home } from './pages/Home/Home';
import PageMidia from './pages/PageMidia/Pagemidia';

function App() {
    const [listseach, SetListseach] = useState([]);
    return (
        <>
            <header>
                <nav className="nav-container">
                    <Link to="/">Home</Link>
                    <Link to="/series">Series</Link>
                    <Link to="/">Movies</Link>
                    <InputSearch
                        listseach={listseach}
                        SetListseach={SetListseach}
                    />
                </nav>
            </header>
            <main>
                {/*{listseach.length !== 0 && (*/}
                {/*    <GridContent content={listseach} />*/}
                {/*)}*/}
            </main>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                {listseach.length !== 0 && (
                    <Route
                        path="/searchmidias"
                        element={<GridContent content={listseach} />}
                    />
                )}
                <Route path="/serie/:id" element={<PageMidia />} />
                <Route path="/movie/:id" element={<PageMidia />} />
            </Routes>

            <footer>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />a
            </footer>
        </>
    );
}

export default App;
