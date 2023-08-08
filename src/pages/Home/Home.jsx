import { useEffect, useState } from 'react';

//others
import { options, URLTMDB } from '../../var';
import fetch_api_json from '../../utils/FetchApiJson';

//css
import '../../App.css';

//components
import BarDynamicPoster from '../../components/BarDynamic/BarDynamicPoster';

export const Home = () => {
    const [listMovies, setListMovies] = useState([]);
    const [ListSeries, setListSeries] = useState([]);

    useEffect(() => {
        const { serie, movie } = URLTMDB;

        async function f() {
            const moviesContent = await fetch_api_json(movie.now, options);
            const seriesContent = await fetch_api_json(serie.top, options);

            setListMovies(moviesContent.results);
            setListSeries(seriesContent.results);
            console.log(moviesContent);
            console.log(seriesContent);
            console.log(moviesContent.results);
            console.log(seriesContent.results);
        }
        f();

        console.log('a');
    }, []);

    return (
        <>
            <BarDynamicPoster listMidia={listMovies} />
            <BarDynamicPoster listMidia={ListSeries} />
        </>
    );
};

// function App() {
//     const [listMovies, setListMovies] = useState([]);
//     const [ListSeries, setListSeries] = useState([]);
//
//     // const [loading, setloading] = useState(true);
//
//     useEffect(() => {
//         const { series, movies } = URLTMDB;
//
//         async function f() {
//             const moviesContent = await fetch_api_json(movies.now, options);
//             const seriesContent = await fetch_api_json(series.top, options);
//
//             setListMovies(moviesContent.results);
//             setListSeries(seriesContent.results);
//             console.log(moviesContent.results);
//             console.log(seriesContent.results);
//             // setloading(false);
//         }
//         f();
//
//         console.log('a');
//     }, []);
//     return (
//         <>
//                 {<BarDynamicPoster listMidia={listMovies} />}
//                 {<BarDynamicPoster listMidia={ListSeries} />}
//                 {/*{!loading && <PageMidia midia={ListSeries[0]} />}*/}
//         </>
//     );
// }
