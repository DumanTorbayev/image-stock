import React, {useEffect} from 'react';
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
import {getStorage} from "../utils/storage/storage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getIsDelete} from "../store/favorites/selectors";
import {useActions} from "../hooks/useActions";

const Favorites = () => {
    const {photos, deletedId} = useTypedSelector(getIsDelete)
    const {setFavoritesPhoto} = useActions()

    useEffect(() => {
        setFavoritesPhoto(getStorage('favorites'))
    }, [deletedId])

    return (
        <div className={'container'}>
            <PhotoGrid photos={photos}/>
        </div>
    );
};

export default Favorites;