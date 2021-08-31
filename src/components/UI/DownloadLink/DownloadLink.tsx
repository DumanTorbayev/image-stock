import React, {FC, ReactChild, ReactNode} from 'react';
import css from "./DownloadLink.module.scss"

interface DownloadLinkType {
    children?: ReactChild | ReactNode
    downloadSrc: string
}

export const DownloadLink: FC<DownloadLinkType> =
    (
        {
            children,
            downloadSrc,
        }
    ) => {

        return (
            <a
                className={css.link}
                href={downloadSrc}
                download
                target="_blank"
                rel='noreferrer'
            >
                {children}
            </a>
        );
    };