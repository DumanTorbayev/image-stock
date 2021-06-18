import React, {FC, ReactChild, ReactNode} from 'react';
import css from "./Button.module.scss";
import classNames from "classnames";

interface ButtonType {
    className?: string
    onClick: () => void
    detailPage?: boolean
    photoCard?: boolean
    children?: ReactChild | ReactNode
}

export const Button: FC<ButtonType> =
    (
        {
            children,
            className,
            onClick,
            detailPage,
            photoCard
        }
    ) => {

        const classNamesVar = classNames(css['in-favorite'], className ? css[className] : '', {
            [css['detail-page']]: detailPage,
            [css['photo-card']]: photoCard
        })

        return (
            <button
                onClick={onClick}
                className={classNamesVar}
            >
                {children}
            </button>
        )
    }