import React, {FC} from 'react';
import css from './PhotoGrid.module.scss'
import Masonry from "react-masonry-css";
import {PhotoGridProps} from "../../types/photo";
import {PhotoItem} from "../PhotoItem/PhotoItem";

const breakpointColumns = {
    default: 3,
    1024: 2,
    576: 1
};

export const PhotoGrid: FC<PhotoGridProps> = ({photos, children}) => {
    return (
        <div className={css['grid-container']}>
            {children}

            <Masonry
                breakpointCols={breakpointColumns}
                className={css['grid']}
                columnClassName={css['column']}
            >
                {photos
                    ? photos.map((items, index) =>
                        <PhotoItem key={`${items.id}${index}`} {...items}/>
                    )
                : '' }
            </Masonry>
        </div>
    );
};