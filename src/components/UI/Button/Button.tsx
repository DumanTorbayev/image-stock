import React, {FC, ReactChild, ReactNode} from 'react';
import css from "./Button.module.scss";

interface ButtonType {
    onClick: () => void
    children?: ReactChild | ReactNode
}

export const Button: FC<ButtonType> =
    (
        {
            children,
            onClick,
        }
    ) => {
        return (
            <button onClick={onClick} className={css.button}>
                {children}
            </button>
        )
    }