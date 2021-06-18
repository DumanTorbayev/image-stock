import React, {FC, ReactChild, ReactNode} from 'react';
import css from "./DownloadLink.module.scss"
import classNames from "classnames";

interface DownloadLinkType {
    children?: ReactChild | ReactNode
    downloadSrc: string
    className?: string
    detailPage?: boolean
    photoCard?: boolean
}

export const DownloadLink: FC<DownloadLinkType> =
    (
        {
            children,
            downloadSrc,
            className,
            detailPage,
            photoCard
        }
    ) => {

        return (
            <a
                className={classNames(css['download-link'], className ? css[className]: '', {
                    [css['detail-page']]: detailPage,
                    [css['photo-card']]: photoCard
                })}
                href={downloadSrc}
                download
                target="_blank"
                rel='noreferrer'
            >
                {children}
            </a>
        );
    };