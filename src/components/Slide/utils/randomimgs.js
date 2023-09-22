import { imageURLoriginal } from '../../../data/urls';

export const randomImgs = (obj) => {
    return obj.map((midia) => {
        let { imgs } = midia;
        imgs = `${imageURLoriginal}${imgs[0].file_path}`;
        console.log({ imgs, ...midia });
        return { ...midia, imgs };
    });
};
