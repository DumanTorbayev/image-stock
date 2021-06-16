import React, {FC} from 'react';
import css from './PhotoDetail.module.scss'
import {PhotoType} from "../../types/photo";
import {Button} from "../UI/Button/Button";
import {DownloadLink} from "../UI/DownloadLink/DownloadLink";
import {handleAddInArr} from "../../utils/addInArr/handleAddInArr";
import {useActions} from "../../hooks/useActions";

export const PhotoDetail: FC<PhotoType> = (
    {
        id,
        user,
        urls,
        alt_description,
        links
    }
) => {
    const {setIsDelete} = useActions()

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
                            onClick={() => handleAddInArr(
                                {id, user, links, urls, alt_description},
                                setIsDelete,
                            )}
                            type={'inner-page'}
                        />

                        <DownloadLink downloadSrc={download} type={"inner-page"}>
                            Скачать
                        </DownloadLink>
                    </div>
                </div>

                <div className={css['img-container']}>
                    <img src={regular} alt={alt_description}/>
                </div>
            </div>
        </div>
    );
};