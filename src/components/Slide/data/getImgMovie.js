import fetch_api_json from '../../../utils/FetchApiJson';
import { URLTMDB } from '../../../data/urls';
import { randomImgs } from '../utils/randomimgs';
import { getRandomInt } from '../utils/getRandomInt';

export const getImgMovie = async () => {
    const { movie } = URLTMDB;
    const lista = [];

    const Load = async () => {
        try {
            const { now, top, detailsID } = movie;
            const typemidia = [now, top][getRandomInt(0, 1)];

            const moviesContent = await fetch_api_json(typemidia);
            console.log(typemidia);
            const idObjMidia = moviesContent.results.map((midia) => {
                const { id, title, overview, vote_average } = midia;
                return { id, title, overview, vote_average };
            });

            for (const obj of idObjMidia) {
                const url = movie.img.replace('ID', obj.id);
                const urldetails = detailsID.replace('id', obj.id);

                const res = await fetch_api_json(url);
                const resDet = await fetch_api_json(urldetails);
                const { tagline } = resDet;

                console.log(urldetails);
                console.log(tagline);
                const imgs = res.backdrops.filter(
                    (midia) => midia.iso_639_1 === null,
                );

                lista.push({ ...obj, imgs, tagline });
            }
        } catch (error) {
            console.log('Erro:', error);
        }
    };

    await Load();
    return randomImgs(lista);
};
