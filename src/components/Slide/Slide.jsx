import { useEffect, useState } from 'react';
import './style.css';
import { getImgMovie } from './data/getImgMovie';
import { useChangeImage } from './hooks/useChangeImage';

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
            {img.map((image, index) => (
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
