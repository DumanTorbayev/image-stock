import React from 'react';
import css from "./PhotoItem.module.scss";
import {Link} from "react-router-dom";
import maximizeIcon from "../../static/images/maximize-icon.svg";
import {PhotoType} from "../../types/photo";
import {DownloadLink} from "../UI/DownloadLink/DownloadLink";
import {Button} from "../UI/Button/Button";
import {useActions} from "../../hooks/useActions";
import {handleAddInArr} from "../../utils/addInArr/handleAddInArr";

export const PhotoItem = ({id, user, links, urls, alt_description, width, height}: PhotoType) => {
    const {setIsDelete} = useActions()

    const {name, profile_image} = user
    const {small} = urls
    const {download} = links

    return (
        <div className={css['card']}>
            <div className={css['card__info']}>
                <div className={css['card__overlay']}/>
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
                    <Button
                        onClick={() => handleAddInArr(
                            {id, user, links, urls, alt_description, width, height},
                            setIsDelete
                        )}
                        type={'inCard'}
                        className={css['actions__item']}
                    />

                    <Link to={`/photo/${id}`} className={css['actions__item']}>
                        <img src={maximizeIcon} alt="maximize"/>
                    </Link>

                    <DownloadLink downloadSrc={download} type={"inCard"}/>
                </div>
            </div>
            <img data-id={id} src={small} alt={alt_description}/>
        </div>
    );
};