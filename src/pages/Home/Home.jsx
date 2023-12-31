import { Suspense, useEffect, useState } from 'react';

//others
import { URLTMDB } from '../../data/urls';
import fetch_api_json from '../../utils/FetchApiJson';

//css
import '../../assets/App.css';
import './home.css';
//components2
import BarDynamicPoster from '../../components/BarDynamic/BarDynamicPoster';
import { Slide } from '../../components/Slide/Slide';

export const Home = () => {
    const [listMovies, setListMovies] = useState([]);
    const [listMovies1, setListMovies1] = useState([]);

    const [listSeries, setListSeries] = useState([]);
    const [listSeries1, setListSeries1] = useState([]);

    useEffect(() => {
        const { serie, movie } = URLTMDB;

        async function Load() {
            try {
                const moviesContent = await fetch_api_json(movie.now);
                const moviesContent1 = await fetch_api_json(movie.top);

                setListMovies(moviesContent.results);
                setListMovies1(moviesContent1.results);

                const seriesContent = await fetch_api_json(serie.top);
                const seriesContent1 = await fetch_api_json(serie.popular);

                setListSeries(seriesContent.results);
                setListSeries1(seriesContent1.results);
            } catch (error) {
                console.log('e');
            }
        }

        Load().catch(() => {
            console.log('ao');
        });
    }, []);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Slide />
            <section className="contentMain">
                <h1>Movie Now</h1>
                <BarDynamicPoster listMidia={listMovies} />
                <h1>Movie Top</h1>
                <BarDynamicPoster listMidia={listMovies1} />
                <h1>Serie Top</h1>
                <BarDynamicPoster listMidia={listSeries} />
                <h1>Serie Popular</h1>
                <BarDynamicPoster listMidia={listSeries1} />
            </section>
        </Suspense>
    );
};
