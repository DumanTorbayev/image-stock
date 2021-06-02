import React from 'react';
import css from "./PhotoItem.module.scss";
import {Link} from "react-router-dom";
import maximizeIcon from "../../../static/images/maximize-icon.svg";
import {PhotoType} from "../../../types/photo";

export const PhotoItem = ({id, user, links, urls, alt_description}: PhotoType) => {
    const {name, profile_image} = user
    const {small} = urls
    const {download} = links

    return (
        <div className={css['card']} key={id}>
            <div className={css['card__info']}>
                <div className={css['card__overlay']}></div>
                <div className={css['owner']}>
                    <img
                        className={css['owner__img']}
                        src={profile_image.large}
                        alt={name}
                    />
                    <div className={css['owner__name']}>
                        {name}
                    </div>
                </div>
                <div className={css['actions']}>
                    <button
                        className={css['actions__item']}
                        type={"button"}
                    >
                        <img src={require('../../../static/images/heart-icon.svg').default}
                             alt="Like"
                        />
                    </button>
                    <Link to={`/photo/${id}`}
                          className={css['actions__item']}
                    >
                        <img src={maximizeIcon} alt="maximize"/>
                    </Link>
                    <a href={download}
                       download
                       target="_blank"
                       rel='noreferrer'
                       className={css['actions__item']}
                    >
                        <img src={require('../../../static/images/download-icon.svg').default}
                             alt=""
                        />
                    </a>
                </div>
            </div>
            <img data-id={id} src={small} alt={alt_description}/>
        </div>
    );
};