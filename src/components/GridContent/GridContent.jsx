import { Poster } from '../Poster/Poster';

import './style.css';
import { useState } from 'react';

export const GridContent = ({ content }) => {
    const [Page, setPage] = useState(1);

    const NextPage = () => {
        setPage((value) => value + 1);
    };
    console.log(content);
    return (
        <section className="Grid-container">
            {content.map((midia, index) => {
                return <Poster content={midia} id={index} />;
            })}
            <nav>
                <button>click</button>
            </nav>
        </section>
    );
};
