import { useState } from 'react';

import './style.css';

export const TextExpandable = ({ text, maxlength }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const Maxlength = maxlength || 100;

    const expandabledText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="Conteiner-expladeble">
                {text.length > Maxlength && !isExpanded ? (
                    <p onClick={expandabledText}>
                        {text.slice(0, Maxlength) + '...'}
                    </p>
                ) : (
                    <p onClick={expandabledText}>{text}</p>
                )}
            </div>
        </>
    );
};
