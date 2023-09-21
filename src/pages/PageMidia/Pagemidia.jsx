import React, { useEffect } from 'react';
import { imageURL, imageURLoriginal } from '../../data/urls';

import './style.css';

import fetch_api_json from '../../utils/FetchApiJson';
import BarDynamicPoster from '../../components/BarDynamic/BarDynamicPoster';
import { TextExpandable } from '../../components/TextExpandable/TextExpandable';
import { useMegadata } from './useMegadata';
import { ActorsList } from '../../components/ActorsList/ActorsList';

const PageMidia = () => {
    const {
        midia,
        setMidia,
        recomendations,
        setRecomendations,
        listcredits,
        setlistcredits,
        isLoading,
        setIsLoading,
        urlMidia,
        urlRecomend,
        urlcredits,
    } = useMegadata();

    useEffect(() => {
        const LoadPost = async () => {
            const jsonMidia = await fetch_api_json(urlMidia);
            const jsonRecmon = await fetch_api_json(urlRecomend);
            const jsoncredits = await fetch_api_json(urlcredits);

            setRecomendations(jsonRecmon.results);
            setMidia(jsonMidia);
            setlistcredits(jsoncredits.cast);

            console.log(jsoncredits.cast);

            setIsLoading(false);
        };
        LoadPost();
    }, [
        urlMidia,
        urlRecomend,
        urlcredits,
        setIsLoading,
        setlistcredits,
        setMidia,
        setRecomendations,
    ]);

    return (
        <>
            {!isLoading && (
                <>
                    <section
                        className="midia-container"
                        style={{
                            backgroundImage: `url(${
                                imageURLoriginal + midia.backdrop_path
                            })`,
                        }}
                    >
                        <section>
                            <figure>
                                <img
                                    className="img-page"
                                    loading="lazy"
                                    src={imageURL + midia.poster_path}
                                    alt={midia.original_title}
                                />
                            </figure>
                            <div className="overview-Midia">
                                <h1>{midia.original_title || midia.name}</h1>
                                <div className="genres">
                                    {midia.genres.map((el, index) => {
                                        return (
                                            <h3 key={`genres${index}`}>
                                                {el.name}
                                            </h3>
                                        );
                                    })}
                                </div>
                                <ActorsList list={listcredits} />

                                <h6>{midia.vote_average}</h6>
                                <TextExpandable
                                    text={midia.overview}
                                    maxlength={120}
                                />
                            </div>
                        </section>
                        {recomendations.length !== 0 && (
                            <article className="container-recomendations">
                                <h1>Recomendations</h1>
                                <BarDynamicPoster listMidia={recomendations} />
                            </article>
                        )}
                    </section>
                </>
            )}
        </>
    );
};

export default PageMidia;
