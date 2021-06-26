import React, {FC} from 'react';
import css from './PhotoGrid.module.scss'
import Masonry from "react-masonry-css";
import {PhotoGridProps} from "../../types/photo";
import {PhotoItem} from "../PhotoItem/PhotoItem";
import {PhotoNotFound} from "../UI/PhotoNotFound/PhotoNotFound";
import {BREAKPOINT1024, BREAKPOINT576} from "../../constants";

export const PhotoGrid: FC<PhotoGridProps> = ({photos, children}) => {
    return (
        <div className={css['grid-container']}>
            {children}
            {photos
                ? <Masonry
                    breakpointCols={{default: 3, [BREAKPOINT1024]: 2, [BREAKPOINT576]: 1}}
                    className={css['grid']}
                    columnClassName={css['column']}
                >
                    {photos.map((items, index) => <PhotoItem key={`${items.id}${index}`} {...items}/>)}
                </Masonry>
            : <PhotoNotFound>Фото не найдено</PhotoNotFound>}

        </div>
    );
};