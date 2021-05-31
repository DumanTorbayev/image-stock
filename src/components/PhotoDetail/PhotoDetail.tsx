import React, {FC} from 'react';
import css from './PhotoDetail.module.scss'
import {PhotosType} from "../../types/photo";

const PhotoDetail: FC<PhotosType> = (
    {
        user,
        urls,
        alt_description,
        links
    }
) => {
    return (
        <div className={css.head}>
            <div className={css.background} style={{backgroundImage: `url(${urls.regular})`}}/>
            <div className="container">
                <div className={css.head__top}>
                    <div className={css.user}>
                        <img className={css.user__avatar} src={user.profile_image.large} alt=""/>
                        <div className={css.user__name}>{user.name}</div>
                    </div>
                    <div className={css.buttons}>
                        <button className={css['like-btn']}>
                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"
                                      fill="#828282"/>
                            </svg>
                        </button>
                        <a className={css['download-link']} href={links.download} target="_blank">
                            <img src={require('../../static/images/download-icon.svg').default} alt=""/>
                            Download
                        </a>
                    </div>
                </div>

                <div className={css['img-container']}>
                    <img src={urls.regular} alt={alt_description}/>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetail;