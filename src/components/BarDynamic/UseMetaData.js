import { useRef, useState } from 'react';

export const useMetaData = () => {
    const carouselRef = useRef();
    const [isDragging, setIsDragging] = useState(true);

    const [movi, setmovi] = useState(false);

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    return {
        carouselRef,
        isDragging,
        setIsDragging,
        movi,
        setmovi,
        startX,
        setStartX,
        scrollLeft,
        setScrollLeft,
    };
};
