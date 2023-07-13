import { useEffect, useState } from 'react';
import { options, URLTMDB } from './var';
import BarDynamicPoster  from './components/BarDynamic/BarDynamicPoster';

function App() {
    const [listMovies, setListMovies] = useState([]);
    const [ListSeries, setListSeries] = useState([]);

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
        }
        f();
    }, []);

    return <BarDynamicPoster listMidia={ListSeries} />;
}

export default App;
