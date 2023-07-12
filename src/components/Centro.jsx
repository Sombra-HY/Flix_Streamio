import React, { useEffect, useState } from 'react';
import { options } from '../var';
import Search from '../pages/Search';

export const Centro = () => {
    const [listmovies, setListmovies] = useState([]);
    const [pageNow, setpageNow] = useState(1);

    const imageURL = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        const info = options;
        const url = `https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=${pageNow}`;
        const getMovies = async () => {
            const movies = fetch(url, info);

            const [contents] = await Promise.all([movies]);
            const postjson = await contents.json();
            setListmovies(postjson.results);
        };
        getMovies().then((r) => {
            console.log(r);
        });
    }, [pageNow]);

    const loadNextPagel = () => {
        setpageNow((a) => a - 1);
    };
    const loadNextPager = () => {
        setpageNow((a) => a + 1);
    };
    return (
        <section>
            <div className="LoadMovies">
                <h1>Carregar Movies</h1>
            </div>
            <div className="nextPage">
                <button onClick={loadNextPagel}>{'<'}</button>
                <button onClick={loadNextPager}>{'>'}</button>
            </div>
            <Search />
            <div className="Box">
                {listmovies.map((value, index) => {
                    const { poster_path, overview } = value;
                    return (
                        <div className="Movies" key={index}>
                            <h1>{value.name}</h1>
                            <img src={imageURL + poster_path} alt="a" />
                            <p>{overview}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
