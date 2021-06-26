import React, {FC} from 'react';
import css from './PhotoDetail.module.scss'
import {PhotoType} from "../../types/photo";
import {useActions} from "../../hooks/useActions";
import UiComponents from "../UI"

export const PhotoDetail: FC<PhotoType> = (
    {
        id,
        user,
        urls,
        alt_description,
        links,
        width,
        height
    }
) => {
    const {setInFavorites} = useActions()
    const {DownloadLink, Button, ResponsiveImage} = UiComponents

    const {profile_image, name} = user
    const {regular, small} = urls
    const {download} = links

    return (
        <div className={css.head}>
            <div className={css.background} style={{backgroundImage: `url(${regular})`}}>
                <div className={css.blur}/>
            </div>
            <div className="container">
                <div className={css.head__top}>
                    <div className={css.user}>
                        <img className={css.user__avatar} src={profile_image.large} alt=""/>
                        <div className={css.user__name}>{name}</div>
                    </div>
                    <div className={css.buttons}>
                        <Button
                            onClick={() => setInFavorites({id, user, links, urls, alt_description, width, height})}
                            detailPage
                        >
                            <svg viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"
                                />
                            </svg>
                        </Button>

                        <DownloadLink downloadSrc={download} detailPage>
                            <svg viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z"
                                />
                            </svg>
                            Скачать
                        </DownloadLink>
                    </div>
                </div>

                <ResponsiveImage
                    width={width}
                    height={height}
                    src={regular}
                    alt={alt_description}
                    detailPage={true}
                />
            </div>
        </div>
    );
};