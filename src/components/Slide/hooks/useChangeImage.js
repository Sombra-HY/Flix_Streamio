import { useEffect, useState } from 'react';

export const useChangeImage = (img) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((e) => (e + 1) % img.length);
        }, 10000);
        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex, img.length]);

    return [currentImageIndex, setCurrentImageIndex];
};
