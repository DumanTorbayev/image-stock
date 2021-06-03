import React, {useEffect} from 'react';
import {PhotoGrid} from "../PhotoGrid/PhotoGrid";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getFavoritePhoto} from "../../store/favorites/selectors";
import {useActions} from "../../hooks/useActions";

const Favorites = () => {
    const {photos, loading} = useTypedSelector(getFavoritePhoto)
    const {handleFetchFavorites} = useActions()

    useEffect(() => {
        handleFetchFavorites('dumantorbayev')
    }, [])

    return (
        <div className={'container'}>
            <PhotoGrid photos={photos} />
        </div>
    );
};

export default Favorites;