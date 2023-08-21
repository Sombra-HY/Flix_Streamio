import { Poster } from '../Poster/Poster';

import './style.css';

export const GridContent = ({ content }) => {
    return (
        <section className="Grid-container">
            {content.map((midia, index) => {
                return (
                    <Poster
                        key={`Grid-container-poster${index}`}
                        content={midia}
                        id={index}
                    />
                );
            })}
        </section>
    );
};
