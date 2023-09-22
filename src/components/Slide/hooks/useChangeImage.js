import { useEffect, useState } from 'react';

export const useChangeImage = (img, time = 15000) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((e) => (e + 1) % img.length);
        }, time);
        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex, img.length, time]);

    return [currentImageIndex, setCurrentImageIndex];
};
