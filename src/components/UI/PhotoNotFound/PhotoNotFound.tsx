import React, {FC, ReactChildren, ReactNode} from 'react';
import css from './PhotoNotFound.module.scss'

interface PhotoNotFoundType {
    children?: ReactChildren | ReactNode
}

export const PhotoNotFound: FC<PhotoNotFoundType> = ({children}) => {
    return (
        <div className={css['container']}>
            {children}
        </div>
    );
};