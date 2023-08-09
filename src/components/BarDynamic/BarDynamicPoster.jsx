import { Poster } from '../Poster/Poster';

import './style.css';
import { useRef, useState } from 'react';
import { createRef } from 'react';
import { cycleIntervalIncrement } from '../../utils/CicleNumber';

function BarDynamicPoster(props) {
    const { listMidia } = props;
    const posterRefs = useRef([]);
    const [pageNow, setPageNow] = useState(6);

    const nextPage = (e) => {
        const elClass = e.target.classList.value;
        const increment = elClass === 'buttonRight' ? 5 : -5;

        setPageNow(cycleIntervalIncrement(pageNow, increment, 0, 19));
        console.log(cycleIntervalIncrement(pageNow, increment, 0, 19));
        posterRefs.current[pageNow].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start',
        });
    };

    return (
        <section>
            <section className="BarDynamicPoster">
                <button className="buttonLeft" onClick={(e) => nextPage(e)}>
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
                <div className="Allposters">
                    {listMidia.map((midia, index) => {
                        if (midia.poster_path || midia.logo_path ) {
                            const posterRef = createRef();
                            posterRefs.current[index] = posterRef;
                            return (
                                <Poster
                                    content={midia}
                                    key={`BarDynamicPoster-poster${index}`}
                                    ref={posterRef}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
                <button className="buttonRight" onClick={(e) => nextPage(e)}>
                    <span className="material-symbols-outlined">
                        <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </span>
                </button>
            </section>
        </section>
    );
}

export default BarDynamicPoster;
