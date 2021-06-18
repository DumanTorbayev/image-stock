import React, {FC} from 'react';
import css from './ResponsiveImage.module.scss'

interface ResponsiveImageType {
    src: string
    alt: string | undefined
    width: number
    height: number
    dataId?: string
    shadow: boolean
}

const ResponsiveImage: FC<ResponsiveImageType> = ({src, alt, width, height, dataId, shadow}) => {
    return (
        <div
            className={css['img-container']}
            style={{maxWidth: `calc((100vh - 280px) * ${width / height})`}}
        >
            < div style={{paddingBottom: `${(height / width * 100)}%`}}/>
            <img className={css[`${shadow}`]} data-id={dataId} src={src} alt={alt}/>
        </div>
    );
};

export default ResponsiveImage;