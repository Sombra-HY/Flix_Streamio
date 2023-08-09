import React, { useRef, useState } from 'react';
import { createRef } from 'react';
import { Poster } from '../Poster/Poster';
import './style.css';

function BarDynamicPoster(props) {
    const { listMidia } = props;

    const carouselRef = useRef();
    const [isDragging, setIsDragging] = useState(true);

    const [movi, setmovi] = useState(false);

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const diffX = e.clientX - startX;

        carouselRef.current.scrollLeft = scrollLeft - diffX;
    };

    const handleMouseUp = (e) => {
        const diffX = e.clientX - startX;
        setmovi(diffX === 0);
        setIsDragging(false);
    };

    return (
        <section>
            <section className="BarDynamicPoster">
                <div
                    className="Allposters"
                    ref={carouselRef}
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    {listMidia.map((midia, index) => {
                        if (midia.poster_path || midia.logo_path) {
                            return (
                                <Poster
                                    content={midia}
                                    key={`BarDynamicPoster-poster${index}`}
                                    isDragging={movi}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </section>
        </section>
    );
}

export default BarDynamicPoster;
