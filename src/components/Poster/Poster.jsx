import { imageURL } from '../../var';

import './style.css';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Poster = ({ content, isDragging = true }) => {
    const navigate = useNavigate();
    const {
        poster_path,
        id,
        name,
        overview,
        media_type,
        first_air_date,
        logo_path,
    } = content;
    Poster.displayName = 'Poster';

    const print = () => {
        console.log(isDragging);

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
                <figure className="poster" onClick={print}>
                    <img
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
