import { useEffect, useState } from 'react';
import './style.css';
import { getImgMovie } from './data/getImgMovie';
import { useChangeImage } from './hooks/useChangeImage';
import { TextExpandable } from '../TextExpandable/TextExpandable';
import { imageURLUHD } from '../../data/urls';

export const Slide = () => {
    const [img, setImgs] = useState([]);
    const [currentImageIndex] = useChangeImage(img);

    useEffect(() => {
        getImgMovie(setImgs).then((data) => {
            setImgs(data);
        });
    }, []);

    return (
        <article className="ContentSlides">
            {img.map((midia, index) => {
                const { imgs, title, overview } = midia;
                let urlimg =
                    typeof imgs === 'string'
                        ? imgs
                        : imageURLUHD + imgs[0].file_path;
                console.log('bq', imgs);
                return (
                    <figure
                        key={index}
                        style={{
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    >
                        <img src={urlimg} alt={`Slide ${index}`} />
                        <figcaption className={'slide-legend'}>
                            {' '}
                            <h1>{title} </h1>
                            <h3>
                                <TextExpandable
                                    maxlength={155}
                                    text={overview}
                                />
                            </h3>
                        </figcaption>
                    </figure>
                );
            })}
        </article>
    );
};
