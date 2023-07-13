import { imageURL } from '../../var';

import './style.css';

function BarDynamicPoster(props) {
    const { listMidia } = props;
    const elPosterBar = document.querySelector('.Allposters');

    const nextpagesRight =()=>{
        elPosterBar.classList.add('animarR');
    }
    const nextpagesLeft =()=>{
        elPosterBar.classList.add('animarL');
    }

    return (
        <div>
            <button onClick={nextpagesRight}>{'<'}</button>
            <section className="BarDynamicPoster">

                <div className="Allposters">
                    {listMidia.map((midia, index) => {
                        const { backdrop_path,poster_path, original_title } = midia;
                        console.log(midia);
                        return (

                            <div key={index} id={`post${index}`} className="poster">
                                <img src={imageURL + poster_path} alt={name} />
                            </div>

                        );
                    })}
                </div>

            </section>
            <button onClick={nextpagesLeft}>{'>'}</button>
            <a/>
        </div>
    );
}

export default BarDynamicPoster;
