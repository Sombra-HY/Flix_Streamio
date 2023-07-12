import { useEffect, useState } from 'react';
import { options, URLTMDB } from './var';
import BarDynamic from './components/BarDynamic/BarDynamic';

function App() {
    const [listMovies, setListMovies] = useState([]);
    const [, setListSeries] = useState([]);

    useEffect(() => {
        const { series, movies } = URLTMDB;

        async function f() {
            const moviesContent = fetch(series.now, options);
            const seriesContent = fetch(movies.now, options);

            const [contentM, contentS] = await Promise.all([
                moviesContent,
                seriesContent,
            ]);
            const moviesJson = await contentM.json();
            const seriesJson = await contentS.json();

            setListMovies(moviesJson.results);
            setListSeries(seriesJson.results);
            console.log(moviesJson.results);
        }
        f();
    }, []);

    return <BarDynamic listMidia={listMovies} />;
}

export default App;
