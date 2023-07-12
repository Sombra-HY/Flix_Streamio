import { imageURL } from '../../var';

import './style.css';

function BarDynamic(props) {
    const { listMidia } = props;
    return (
        <section className="BarDynamic">
            {listMidia.map((midia, index) => {
                const { poster_path, name } = midia;
                return (
                    <div key={index} className="">
                        <img src={imageURL + poster_path} alt={name} />
                    </div>
                );
            })}
        </section>
    );
}

export default BarDynamic;
