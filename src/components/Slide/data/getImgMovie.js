import fetch_api_json from '../../../utils/FetchApiJson';
import { URLTMDB } from '../../../data/urls';
import { randomImgs } from '../utils/randomimgs';
import { getRandomInt } from '../utils/getRandomInt';

export const getImgMovie = async (setState) => {
    const { movie } = URLTMDB;
    const lista = [];

    const Load = async () => {
        try {
            const { now, top, detailsID } = movie;
            let typemidia = [now, top][getRandomInt(0, 1)];

            const moviesContent = await fetch_api_json(typemidia);
            const idObjMidia = moviesContent.results.map((midia) => {
                const { id, title, overview, vote_average } = midia;
                return { id, title, overview, vote_average };
            });

            // Utilizando Promise.all para aguardar o carregamento de todas as imagens
            const promises = idObjMidia.map(async (obj) => {
                const url = movie.img.replace('ID', obj.id);
                const urldetails = detailsID.replace('id', obj.id);

                const res = await fetch_api_json(url);
                const resDet = await fetch_api_json(urldetails);
                const { tagline } = resDet;


                const imgs = res.backdrops.filter(
                    (midia) => midia.iso_639_1 === null,
                );

                lista.push({ ...obj, imgs, tagline });
                setState((lista) => [...lista, { ...obj, imgs, tagline }]);
            });

            // Utilizando Promise.race para resolver a Promise assim que a primeira imagem for carregada
            await Promise.race(promises);
        } catch (error) {
            console.log('Erro:', error);
        }
    };

    await Load();
    return randomImgs(lista);
};
