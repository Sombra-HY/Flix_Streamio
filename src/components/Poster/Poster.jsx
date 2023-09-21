import { imageURL } from '../../data/urls';

import './style.css';
import { useNavigate } from 'react-router-dom';

export const Poster = ({ content, isDragging = true }) => {
    const { poster_path, id, name, first_air_date } = content;
    const navigate = useNavigate();

    Poster.displayName = 'Poster';

    const print = () => {
        if (isDragging) {
            const rote = first_air_date ? 'serie' : 'movie';
            navigate(`/${rote}/${id}`);
            window.scrollTo({
                top: 0,
            });
        }
    };

    const url_Img = imageURL + poster_path;
    return (
        !!poster_path && (
            <>
                <figure className="poster">
                    <img
                        onClick={print}
                        src={url_Img}
                        alt={name}
                        key={`poster`}
                        loading="lazy"
                    />
                </figure>
            </>
        )
    );
};
