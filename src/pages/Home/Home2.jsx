import { Link, Route, Routes } from 'react-router-dom';

import './hom2.css';

export const Home2 = () => {
    return (
        <>
            <header className="container-header">
                <nav className="containerNavgation">
                    <div className="centeredLinks">
                        <Link to="/">Home</Link>
                        <Link to="/">Series</Link>
                        <Link to="/">Movies</Link>
                    </div>
                    <div className="searchIcon">
                        <Link to="/">
                            <img
                                src="../../assets/icons8-search-250.png"
                                alt="icon Search"
                            />
                        </Link>
                    </div>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<p>aa</p>} />
                </Routes>
            </main>
        </>
    );
};

const SlideShowBar = (props) => {
    const content = props;

    return (
        <>
            <div className="ContainerSlideShow">
                <div className="ContentSlides">
                    {lista.map(() => {
                        return (
                            <figure key={`slide${id}`}>
                                <img src="" alt="" />
                                <figcaption>
                                    <h1>msg</h1>
                                </figcaption>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

// const StarRating= ({number}) => {
//
//     return (
//         <>
//             <div>
//
//             </div>
//         </>
//     )
// }
