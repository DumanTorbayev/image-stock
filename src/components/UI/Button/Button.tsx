import React, {FC} from 'react';
import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonType {
    type: 'inCard' | 'inner-page'
    className?: string
    onClick: () => void
}

export const Button: FC<ButtonType> = ({type, className, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={classNames(css['in-favorite'], className, css[type])}
        >
            <svg viewBox="0 0 23 21" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"
                />
            </svg>
        </button>
    );
};