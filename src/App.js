import { useEffect, useState } from 'react';
import { imageURL, options, URLTMDB } from './var';
import BarDynamicPoster from './components/BarDynamic/BarDynamicPoster';
import { InputSearch } from './components/InputSearch/InputSearch';
import fetch_api_json from './utils/FetchApiJson';

function App() {
    const [listMovies, setListMovies] = useState([]);
    const [ListSeries, setListSeries] = useState([]);

    useEffect(() => {
        const { series, movies } = URLTMDB;

        async function f() {
            const moviesContent = await fetch_api_json(series.now, options);
            const seriesContent = await fetch_api_json(movies.now, options);

            setListMovies(moviesContent);
            setListSeries(seriesContent);
            console.log(moviesContent);
            console.log(seriesContent);
        }
        f();

        console.log('a');
    }, []);
    return (
        <section>
            <p>text</p>
            {/* <InputSearch /> */}
            {/* <BarDynamicPoster listMidia={ListSeries} />
            <BarDynamicPoster listMidia={listMovies} /> */}
        </section>
    );
}

export default App;
