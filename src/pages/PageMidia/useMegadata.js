import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { URLTMDB } from '../../var';

export const useMegadata = () => {
    const [midia, setMidia] = useState([]);
    const [recomendations, setRecomendations] = useState([]);
    const [listcredits, setlistcredits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();
    const { pathname } = useLocation();

    const typeMidia = pathname.includes('movie') ? 'movie' : 'serie';

    const { detailsID, recomendationsID, credits } = URLTMDB[typeMidia];

    const urlMidia = detailsID.replace('id', id);
    const urlRecomend = recomendationsID.replace('id', id);
    const urlcredits = credits.replace('id', id);

    return {
        midia,
        setMidia,
        recomendations,
        setRecomendations,
        setlistcredits,
        isLoading,
        setIsLoading,
        id,
        pathname,
        urlMidia,
        urlRecomend,
        urlcredits,
        listcredits,
    };
};
