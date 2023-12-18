import { imageURLoriginal } from '../../../data/urls';

export const randomImgs = (obj) => {
    const newobj = obj.filter((midia) => {
        return midia.imgs.length !== 0;
    });

    return newobj.map((midia, index, obj) => {
        console.log('obj', index, obj);

        if (!midia || !midia.imgs[0].file_path) {
            return;
        }
        let { imgs } = midia;
        console.log('RETONO AQUI', imgs[0]);
        imgs = `${imageURLoriginal}${imgs[0].file_path}`;

        console.log({ imgs, ...midia });
        return { ...midia, imgs };
    });
};
