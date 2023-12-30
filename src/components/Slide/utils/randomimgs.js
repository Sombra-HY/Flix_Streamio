import { imageURLUHD } from '../../../data/urls';

export const randomImgs = (obj) => {
    return obj.map((midia) => {
        let { imgs } = midia;
        imgs = `${imageURLUHD}${imgs[0].file_path}`;
        console.log({ imgs, ...midia });
        return { ...midia, imgs };
    });
};
