import { Link } from 'react-router-dom';

import './hom2.css';
import { IconSearch } from '../../assets/icons/IconSearch/IconSearch';

export const Header = () => {
    return (
        <header className="container-header">
            <nav className="containerNavgation">
                <div className="centeredLinks">
                    <Link to="/">Home</Link>
                    <Link to="/">Series</Link>
                    <Link to="/">Movies</Link>
                </div>
                <div className="searchIcon">
                    <Link to="/search">
                        <IconSearch className="IconsSearch" check={false} />
                    </Link>
                </div>
            </nav>
        </header>
    );
};
