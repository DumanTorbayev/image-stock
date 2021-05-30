import React, {FC} from 'react';
import css from './PhotoGrid.module.scss'
import {PhotoGridProps} from "../../types/photo";
import {Link} from 'react-router-dom'

const PhotoGrid: FC<PhotoGridProps> = ({photos}) => {
    const getColumns = () => {
        let columnsArr = [];

        for (let k = 0; k <= 2; k++) {
            columnsArr.push(
                <div key={k} className={css['img-grid__items']}>
                    {photos &&
                        photos.map((obj, index) => {
                            if (index % 3 === k) {
                                return (
                                    <div className={css['img-card']} key={obj.id}>
                                        <div className={css['img-card__info']}>
                                            <div className={css['img-card__overlay']}></div>
                                            <div className={css['img-owner']}>
                                                <img
                                                    className={css['img-owner__img']}
                                                    src={obj.user.profile_image.large}
                                                    alt={obj.user.name}
                                                />
                                                <div className={css['img-owner__name']}>
                                                    {obj.user.name}
                                                </div>
                                            </div>
                                            <div className={css['img-actions']}>
                                                <button
                                                    className={css['img-actions__item']}
                                                    type={"button"}
                                                >
                                                    <img src={require('../../static/images/heart-icon.svg').default}
                                                         alt="Like"
                                                    />
                                                </button>
                                                <Link to={`/photo/${obj.id}`}
                                                      className={css['img-actions__item']}
                                                >
                                                    <img src={require('../../static/images/maximize-icon.svg').default}
                                                         alt=""
                                                    />
                                                </Link>
                                                <a href={obj.links.download}
                                                   download
                                                   target="_blank"
                                                   rel='noreferrer'
                                                   className={css['img-actions__item']}
                                                >
                                                    <img src={require('../../static/images/download-icon.svg').default}
                                                         alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <img
                                            data-id={obj.id}
                                            src={obj.urls.small}
                                            alt={obj.alt_description}/>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            )
        }

        return columnsArr;
    };

    return (
        <div className={css['img-grid']}>
            {getColumns()}
        </div>
    );
};

export default PhotoGrid;