import Search from './Search.png';
import Searchchecked from './Search_checked.png';

export const IconSearch = ({ check = true, className = null }) => {
    return (
        <img
            className={className}
            src={check ? Search : Searchchecked}
            alt="iconSearch"
        />
    );
};
