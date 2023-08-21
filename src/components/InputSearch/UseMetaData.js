import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMetaData = () => {
    const [inputvalue, SetInputValue] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    const navigate = useNavigate();
    return { inputvalue, SetInputValue, valueSearch, setValueSearch, navigate };
};
