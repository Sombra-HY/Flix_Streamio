import Search from './Search_icons.png';
import Searchchecked from './Search_checked_icon.png';

export const IconSearch = ({ check = false, className = null }) => {
    return (
        <img
            className={className}
            src={check ? Searchchecked : Search}
            alt="iconSearch"
        />
    );
};
