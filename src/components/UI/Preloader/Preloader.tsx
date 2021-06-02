import React from 'react';
import './Preloader.scss'

export const Preloader = () => {
    return (
        <div className={"spinner"}>
            {Array.from({length: 12}).map(i => <div/>)}
        </div>
    );
};