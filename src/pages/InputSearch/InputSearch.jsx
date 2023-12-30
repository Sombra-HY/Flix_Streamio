import { URLTMDB } from '../../data/urls';
import fetch_api_json from '../../utils/FetchApiJson';
import './style.css';
import { useMetaData } from './UseMetaData';

import { useEffect, useState } from 'react';
import { GridContent } from '../../components/GridContent/GridContent';
import { useParams } from 'react-router-dom';

export const InputSearch = () => {
    const { inputvalue, SetInputValue, valueSearch, setValueSearch, navigate } =
        useMetaData();
    const [ListMidia, setListMidia] = useState([]);
    const { search } = URLTMDB;
    const { name } = useParams();

    const searchMidias = async () => {
        const wordSearch = search.movie + name;

        const SearchMidias = await fetch_api_json(wordSearch);
        setListMidia(SearchMidias.results);
    };

    useEffect(() => {
        if (name) {
            const Search = () => searchMidias();
            Search();
        }
    }, [name]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setValueSearch(event.target.value);
            valueSearch !== inputvalue && navigate(`/search/${inputvalue}`);
        }
    };

    return (
        <>
            <input
                className="inputSearch"
                type="search"
                name=""
                placeholder="Digite"
                onChange={(e) => SetInputValue(e.target.value)}
                value={inputvalue}
                onKeyDown={handleKeyDown}
            />
            {ListMidia.length !== 0 && <GridContent content={ListMidia} />}
        </>
    );
};
