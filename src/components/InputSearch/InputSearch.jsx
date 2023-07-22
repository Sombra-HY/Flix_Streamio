import { useState } from 'react';
import { URLTMDB, options } from '../../var';
import fetch_api_json from '../../utils/FetchApiJson';
import { GridContent } from '../GridContent/GridContent';

export const InputSearch = () => {
    const [inputvalue, SetInputValue] = useState('');
    const [listseach, SetListseach] = useState([]);
    const [listsSuggestions, SetlistsSuggestions] = useState([]);
    const { search } = URLTMDB;

    const searchMidias = async () => {
        const wordSearch = search.movie + inputvalue;
        console.log(wordSearch);

        const SearchMidias = await fetch_api_json(wordSearch, options);

        SetListseach(SearchMidias);
        console.log(SearchMidias);
    };
    const suggestionsInput = async () => {
        if (inputvalue === '') {
            return SetlistsSuggestions([]);
        }

        const urlSuggestions = search.keyword + inputvalue;
        const SearchMidias = await fetch_api_json(urlSuggestions, options);
        SetlistsSuggestions(SearchMidias);
    };

    const getValueinput = (e) => {
        suggestionsInput();
        SetInputValue(e.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchMidias();
        }
    };

    return (
        <header>
            <input
                type="search"
                name=""
                id=""
                placeholder="Digite"
                onChange={getValueinput}
                onKeyDown={handleKeyDown}
            />
            <ul className="List-suggestions">
                {listsSuggestions.map((obj) => {
                    console.log(obj.name);
                    return <li>{obj.name}</li>;
                })}
            </ul>

            <p>{`pesquisa: ${inputvalue}`}</p>
            {listseach.length != 0 && <GridContent content={listseach} />}
        </header>
    );
};
