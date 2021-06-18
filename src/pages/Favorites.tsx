import React, {useEffect} from 'react';
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
import {getStorage} from "../utils/storage/storage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getFavorite} from "../store/favorites/selectors";
import {useActions} from "../hooks/useActions";
import PhotoNotFound from "../components/UI/PhotoNotFound/PhotoNotFound";

const Favorites = () => {
    const {photos, deletedId} = useTypedSelector(getFavorite)
    const {setFavoritesPhoto} = useActions()

    useEffect(() => {
        setFavoritesPhoto(getStorage('favorites'))
    }, [deletedId])

    return (
        <div className={'container'}>
            {photos && photos.length !== 0
                ? <PhotoGrid photos={photos}/>
                : <PhotoNotFound>Нет избранных фото</PhotoNotFound>
            }
        </div>
    );
}

export default Favorites;