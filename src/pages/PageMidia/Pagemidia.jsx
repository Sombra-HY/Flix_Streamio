import React, { useEffect, useState } from 'react';
import { imageURL, imageURLoriginal, URLTMDB } from '../../var';
import './style.css';
import { useLocation, useParams } from 'react-router-dom';
import fetch_api_json from '../../utils/FetchApiJson';
import BarDynamicPoster from '../../components/BarDynamic/BarDynamicPoster';

const PageMidia = () => {
    const [midia, setMidia] = useState([]);
    const [recomendations, setRecomendations] = useState([]);
    const [, setlistcredits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();
    const { pathname } = useLocation();
    const typeMidia = pathname.includes('movie') ? 'movie' : 'serie';

    const { detailsID, recomendationsID, credits } = URLTMDB[typeMidia];

    const urlMidia = detailsID.replace('id', id);
    const urlRecomend = recomendationsID.replace('id', id);
    const urlcredits = credits.replace('id', id);

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
    }, [urlMidia, urlRecomend, urlcredits]);

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

                                {/*<section className="autores">*/}
                                {/*    {listcredits.map((acthor, index) => {*/}
                                {/*        return (*/}
                                {/*            <PhotoFrame*/}
                                {/*                key={`Acthor${acthor.id}`}*/}
                                {/*                photo={acthor}*/}
                                {/*            />*/}
                                {/*        );*/}
                                {/*    })}*/}
                                {/*</section>*/}

                                <h6>{midia.vote_average}</h6>
                                <p>{midia.overview}</p>
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
