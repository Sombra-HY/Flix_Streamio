import { useReducer } from 'react';
import fetch_api_json from '../../utils/FetchApiJson';
import { cycleIntervalIncrement } from '../../utils/CicleNumber';
import { options } from "../../var";

//data
const data = {
    posts: [],
    isLoading: false,
};

//state

//reduce
const reducer = async (state, action) => {
    for (let i = 0; i < action; i++) {

    }
};

const LoadPosts = async (state) => {

    return { ...state, isLoading: false };
};

const [postStage, dispatch] = useReducer(reducer, data);


