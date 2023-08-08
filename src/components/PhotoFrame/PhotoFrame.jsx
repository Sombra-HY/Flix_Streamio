import './style.css';

export const PhotoFrame = ({ photo }) => {
    const { name, profile_path } = photo;

    const goToperson = () => {
        console.log(photo);
    };

    return (
        <figure onClick={goToperson}>
            <img src={profile_path} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
};
