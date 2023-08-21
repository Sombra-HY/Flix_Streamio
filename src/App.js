import { useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

//components
import { GridContent } from './components/GridContent/GridContent';
import { InputSearch } from './components/InputSearch/InputSearch';
import { Home } from './pages/Home/Home';
// import PageMidia from './pages/PageMidia/Pagemidia';

//layouts
import { Header } from './latout/Header/Header';
import { Footer } from './latout/Footer/Footer';

const PageMidia = lazy(() => import('./pages/PageMidia/Pagemidia'));

function App() {
    const [listseach, SetListseach] = useState([]);

    return (
        <>
            <Header>
                <InputSearch
                    listseach={listseach}
                    SetListseach={SetListseach}
                />
            </Header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    {listseach.length !== 0 && (
                        <Route
                            path="/searchmidias"
                            element={
                                <Suspense fallback={<p>Loading...</p>}>
                                    {' '}
                                    <GridContent content={listseach} />
                                </Suspense>
                            }
                        />
                    )}
                    <Route
                        path="/serie/:id"
                        element={
                            <Suspense fallback={<p>Loading...</p>}>
                                {' '}
                                <PageMidia />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/movie/:id"
                        element={
                            <Suspense fallback={<p>Loading...</p>}>
                                {' '}
                                <PageMidia />
                            </Suspense>
                        }
                    />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
