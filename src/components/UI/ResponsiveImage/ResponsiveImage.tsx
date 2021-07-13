import React, {FC} from 'react';
import css from "./ResponsiveImage.module.scss"
import {useWindowSize} from "../../../hooks/useWindowSize";
import {BREAKPOINTS} from "../../../constants";

interface ResponsiveImageType {
    src: string
    alt: string | undefined
    width: number
    height: number
    dataId?: string
    detailPage: boolean
}

export const ResponsiveImage: FC<ResponsiveImageType> = ({src, alt, width, height, dataId, detailPage}) => {
    const {w} = useWindowSize()

    return (
        <div
            className={css['img-container']}
            style={{maxWidth: `calc((100vh ${detailPage ? `${w > BREAKPOINTS['576'] ? '- 280px' : ''}` : ''}) * ${width / height})`}}
        >
            < div style={{paddingBottom: `${(height / width * 100)}%`}}/>
            <img className={!detailPage ? css[`hidden`] : ''} data-id={dataId} src={src} alt={alt}/>
        </div>
    );
};