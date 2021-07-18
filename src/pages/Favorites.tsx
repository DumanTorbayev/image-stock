import React, {useEffect} from 'react';
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getFavorite} from "../store/favorites/selectors";
import {useActions} from "../hooks/useActions";
import utils from "../utils";
import {PhotoNotFound} from "../components/UI/PhotoNotFound/PhotoNotFound";
import {FAVORITES} from "../constants";

export const Favorites = () => {
    const {photos, removedPhotoId} = useTypedSelector(getFavorite)
    const {setFavoritesPhoto} = useActions()
    const {getStorage} = utils

    useEffect(() => {
        setFavoritesPhoto(getStorage(FAVORITES))
    }, [removedPhotoId])

    return (
        <div className={'container'}>
            {photos && photos.length !== 0
                ? <PhotoGrid photos={photos}/>
                : <PhotoNotFound>Нет избранных фото</PhotoNotFound>
            }
        </div>
    )
}