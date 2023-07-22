import { imageURL } from '../../var';
import { Poster } from '../Poster/Poster';

import './style.css';

function BarDynamicPoster(props) {
    const { listMidia } = props;

    return (
        <section>
            <section className="BarDynamicPoster">
                <div className="Allposters">
                    {listMidia.map((midia, index) => {
                        return (
                            <Poster
                                content={midia}
                                key={`BarDynamicPoster-poster${index}`}
                            />
                        );
                    })}
                </div>
            </section>
        </section>
    );
}

export default BarDynamicPoster;
