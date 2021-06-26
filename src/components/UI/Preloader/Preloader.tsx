import React from 'react';
import css from './Preloader.module.scss'

export const Preloader = () => {

    return (
        <div className={css.container}>
            <div className={css.spinner}>
                {Array.from({length: 12}).map((i, index) => <div key={`${i}/${index}`}/>)}
            </div>
        </div>
    )
};