import { Poster } from '../Poster/Poster';

export const ListPoster = ({ listMidia, isDragging = true }) => {
    return (
        <>
            {listMidia.map((midia, index) => {
                const { poster_path, logo_path } = midia;
                if (poster_path || logo_path) {
                    return (
                        <Poster
                            content={midia}
                            key={`BarDynamicPoster-poster${index}`}
                            isDragging={isDragging}
                        />
                    );
                }
                return null;
            })}
        </>
    );
};
