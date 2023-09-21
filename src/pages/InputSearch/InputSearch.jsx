import { URLTMDB } from '../../data/urls';
import fetch_api_json from '../../utils/FetchApiJson';

import './style.css';

import { useMetaData } from './UseMetaData';
import { useState } from 'react';

export const InputSearch = ({ SetListseach, listseach }) => {
    const { inputvalue, SetInputValue, valueSearch, setValueSearch, navigate } =
        useMetaData();
    const { search } = URLTMDB;

    const searchMidias = async () => {
        const wordSearch = search.movie + inputvalue;
        const SearchMidias = await fetch_api_json(wordSearch);

        SetListseach(SearchMidias.results);
        navigate(`/search/${inputvalue}`);
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
        <input
            className="inputSearch"
            type="search"
            name=""
            placeholder="Digite"
            onChange={getValueinput}
            onKeyDown={handleKeyDown}
        />
    );
};
