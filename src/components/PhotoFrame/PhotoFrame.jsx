import './style.css';
import { ProfileURL } from '../../data/urls';

export const PhotoFrame = ({ photo }) => {
    const { name, profile_path } = photo;

    const goToperson = () => {
        console.log(photo);
    };

    return (
        <figure className="actor" onClick={goToperson}>
            <img src={ProfileURL + profile_path} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
};
