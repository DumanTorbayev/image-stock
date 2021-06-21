import React, {FC} from 'react';
import css from './ResponsiveImage.module.scss'
import useWindowSize from "../../../hooks/useWindowSize";

interface ResponsiveImageType {
    src: string
    alt: string | undefined
    width: number
    height: number
    dataId?: string
    shadow: boolean
}

const ResponsiveImage: FC<ResponsiveImageType> = ({src, alt, width, height, dataId, shadow}) => {
    const { w, h } = useWindowSize()

    return (
        <div
            className={css['img-container']}
            style={{maxWidth: `calc((100vh ${w > 576 ? '- 280px' : ''}) * ${width / height})`}}
        >
            < div style={{paddingBottom: `${(height / width * 100)}%`}}/>
            <img className={css[`${shadow}`]} data-id={dataId} src={src} alt={alt}/>
        </div>
    );
};

export default ResponsiveImage;