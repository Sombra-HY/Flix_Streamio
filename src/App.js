import { useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/App.css';

//components2
import { GridContent } from './components/GridContent/GridContent';
import { InputSearch } from './pages/InputSearch/InputSearch';
import { Home } from './pages/Home/Home';

//layouts
import { Footer } from './latout/Footer/Footer';
import PageMidia from './pages/PageMidia/Pagemidia';
import { Header } from './latout/Header/Header';

function App() {
    const [listseach, SetListseach] = useState([]);

    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route
                        path="/search"
                        element={
                            <InputSearch
                                listseach={listseach}
                                SetListseach={SetListseach}
                            />
                        }
                    />

                    {listseach.length !== 0 && (
                        <Route
                            path="/search/:name"
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
