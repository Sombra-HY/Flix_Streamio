import React, { useState } from 'react';

import { options } from './var';
import Search from './pages/Search';

function App() {
    const [listmovies, setListmovies] = useState([]);
    const [pageNow, setpageNow] = useState(1);

    const imageURL = 'https://image.tmdb.org/t/p/w500/';
    const info = options;

    const getMovies = async () => {
        const movies = fetch(
            `https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=${pageNow}`,
            info,
        );

        const [contents] = await Promise.all([movies]);
        const postjson = await contents.json();
        setListmovies(postjson.results);
        console.log(typeof listmovies);
        console.log(listmovies[0]);
    };

    const nextPageb = () => {
        setpageNow(pageNow + 1);
        console.log(pageNow);
    };
    const nextPagea = () => {
        setpageNow(pageNow - 1);
        console.log(pageNow);
    };

    return (
        <section>
            <div className="LoadMovies">
                <h1>Carregar Movies</h1>
                <button onClick={getMovies}>load</button>
            </div>
            <div className="nextPage">
                <button onClick={nextPagea}>{'<'}</button>
                <button onClick={nextPageb}>{'>'}</button>
            </div>
            <Search />
            <div className="Box">
                {listmovies.map((value, index) => {
                    return (
                        <div className="Movies" key={index}>
                            <h1>{value.name}</h1>
                            <img src={imageURL + value.poster_path} alt="a" />
                            <p>{value.overview}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default App;
