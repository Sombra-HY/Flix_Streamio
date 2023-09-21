import { useEffect, useState } from 'react';

import './style.css';
import { getImgMovie } from './data/getImgMovie';
import { useChangeImage } from './hooks/useChangeImage';

export const Slide = () => {
    const [img, setImgs] = useState([]);
    const [currentImageIndex] = useChangeImage(img);

    useEffect(() => {
        getImgMovie().then((data) => {
            console.log(data);
            setImgs(data);
        });
    }, []);

    return (
        <article className="ContentSlides">
            {img.length > 0 &&
                img.map((image, index) => (
                    <figure
                        key={index}
                        style={{
                            opacity: index === currentImageIndex ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </figure>
                ))}
        </article>
    );
};
