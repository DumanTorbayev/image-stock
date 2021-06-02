import React, {FC, ReactChild, ReactNode} from 'react';
import css from "./DownloadLink.module.scss"
import classNames from "classnames";

interface DownloadLinkType {
    children?: ReactChild | ReactNode
    downloadSrc: string
    type: 'inCard' | 'inner-page'
    className?: string
}

export const DownloadLink: FC<DownloadLinkType> = ({children, downloadSrc, type, className}) => {
    return (
        <a
            className={classNames(css['download-link'], css[type])}
            href={downloadSrc}
            download
            target="_blank"
            rel='noreferrer'
        >
            <svg viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z"
                      fill="white"/>
            </svg>

            {children}
        </a>
    );
};