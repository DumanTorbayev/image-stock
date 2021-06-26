import React from 'react';
import css from "./PhotoItem.module.scss";
import {Link} from "react-router-dom";
import {PhotoType} from "../../types/photo";
import {DownloadLink} from "../UI/DownloadLink/DownloadLink";
import {Button} from "../UI/Button/Button";
import {useActions} from "../../hooks/useActions";
import {ResponsiveImage} from "../UI/ResponsiveImage/ResponsiveImage";

export const PhotoItem = ({id, user, links, urls, alt_description, width, height}: PhotoType) => {
    const {setInFavorites} = useActions()

    const {name, profile_image, username} = user
    const {small, regular} = urls
    const {download} = links

    return (
        <div className={css['card']}>
            <div className={css['card__info']}>
                <div className={css['card__overlay']}/>
                <Link to={`/user/${username}`} className={css['owner']}>
                    <img
                        className={css['owner__img']}
                        src={profile_image.large}
                        alt={name}
                    />
                    <div className={css['owner__name']}>
                        {name}
                    </div>
                </Link>
                <div className={css['actions']}>
                    <Button
                        onClick={() => setInFavorites({id, user, links, urls, alt_description, width, height})}
                        photoCard
                    >
                        <svg viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"
                            />
                        </svg>
                    </Button>

                    <Link to={`/photo/${id}`}>
                        <svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z"
                                  />
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z"
                                  />
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z"
                                  />
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z"
                                  />
                        </svg>
                    </Link>

                    <DownloadLink downloadSrc={download} photoCard>
                        <svg viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z"
                            />
                        </svg>
                    </DownloadLink>
                </div>
            </div>

            <ResponsiveImage
                src={regular}
                alt={alt_description}
                width={width}
                height={height}
                dataId={id}
                detailPage={false}
            />
        </div>
    );
};