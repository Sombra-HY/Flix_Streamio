import { Link } from 'react-router-dom';
import './header.css';

export const Header = ({ children }) => {
    return (
        <>
            <header>
                <nav className="nav-container">
                    <Link to="/">Home</Link>
                    <Link to="/series">Series</Link>
                    <Link to="/">Movies</Link>
                    {children}
                </nav>
            </header>
        </>
    );
};
