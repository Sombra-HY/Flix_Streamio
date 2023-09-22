import { useEffect, useState } from 'react';
import './style.css';
import { getImgMovie } from './data/getImgMovie';
import { useChangeImage } from './hooks/useChangeImage';
import { TextExpandable } from '../TextExpandable/TextExpandable';
import { RateStar } from '../rateStar/rateStar';

export const Slide = () => {
    const [img, setImgs] = useState([]);
    const [currentImageIndex] = useChangeImage(img);

    useEffect(() => {
        const storedImgs = localStorage.getItem('imgs');

        if (!storedImgs) {
            getImgMovie().then((data) => {
                localStorage.setItem('imgs', JSON.stringify(data));
                setImgs(data);
            });
        } else {
            try {
                const parsedImgs = JSON.parse(storedImgs);
                setImgs(parsedImgs);
            } catch (error) {
                console.error('Erro ao analisar JSON:', error);
            }
        }
    }, []);

    return (
        <article className="ContentSlides">
            {img.map((midia, index) => {
                const { imgs, title, overview, vote_average } = midia;

                return (
                    <figure
                        key={index}
                        style={{
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    >
                        <img src={imgs} alt={`Slide ${index}`} />
                        <figcaption className={'slide-legend'}>
                            {' '}
                            <h1>{title} </h1>
                            <h3>
                                <RateStar rate={vote_average} />
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
