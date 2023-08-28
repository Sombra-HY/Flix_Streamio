import Search from './Search_icons.png';
import Searchchecked from './Search_checked_icon.png';

export const IconSearch = ({ check = true, className = null }) => {
    return (
        <img
            className={className}
            src={check ? Search : Searchchecked}
            alt="iconSearch"
        />
    );
};
