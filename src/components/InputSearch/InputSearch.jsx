import { useState } from 'react';
import { URLTMDB } from '../../var';
import fetch_api_json from '../../utils/FetchApiJson';

import './style.css';
import { useNavigate } from 'react-router-dom';

export const InputSearch = ({ listseach, SetListseach }) => {
    const [inputvalue, SetInputValue] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    const { search } = URLTMDB;
    const navigate = useNavigate();

    const searchMidias = async () => {
        const wordSearch = search.movie + inputvalue;
        console.log(wordSearch);

        const SearchMidias = await fetch_api_json(wordSearch);

        SetListseach(SearchMidias.results);
        console.log(SearchMidias.results);
        navigate('/searchmidias');
    };

    const getValueinput = (e) => {
        SetInputValue(e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setValueSearch(event.target.value);

            valueSearch !== inputvalue && searchMidias();
        }
    };

    return (
        <>
            <input
                className="inputSearch"
                type="search"
                name=""
                placeholder="Digite"
                onChange={getValueinput}
                onKeyDown={handleKeyDown}
            />
        </>
    );
};
