import { Poster } from '../Poster/Poster';
import './style.css';
import { useMetaData } from './UseMetaData';

function BarDynamicPoster({ listMidia }) {
    const {
        carouselRef,
        isDragging,
        setIsDragging,
        movi,
        setmovi,
        startX,
        setStartX,
        scrollLeft,
        setScrollLeft,
    } = useMetaData();

    const handleMouseDown = (e) => {
        const { scrollLeft } = carouselRef.current;
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(scrollLeft);
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
        <>
            <section className="BarDynamicPoster">
                <div
                    className="Allposters"
                    ref={carouselRef}
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onTouchEnd={handleMouseUp}
                >
                    {listMidia.map((midia, index) => {
                        const { poster_path, logo_path } = midia;
                        if (poster_path || logo_path) {
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
        </>
    );
}

export default BarDynamicPoster;
