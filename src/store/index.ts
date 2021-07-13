import {clearPhotos, getPhotos, setIsLoading, setPhotoPage} from "./photos/slice";
import {getFetchPhotoById, getRelatedPhotos,} from "./photoDetail/slice";
import {setFavoritesId, setFavoritesPhoto, setInFavorites} from "./favorites/slice";

export default {
    getPhotos,
    getRelatedPhotos,
    setPhotoPage,
    //getSearchedPhotos,
    clearPhotos,
    getFetchPhotoById,
    setFavoritesPhoto,
    setInFavorites,
    setIsLoading,
    setFavoritesId,
}