import { imageURLoriginal } from '../../../data/urls';

export const randomImgs = (obj) => {
    return obj.map((midia) => {
        const { imgs } = midia;
        return `${imageURLoriginal}${imgs[0].file_path}`;
    });
};
