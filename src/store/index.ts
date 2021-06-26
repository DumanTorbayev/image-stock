import {clearPhotos, getPhotos, setIsLoading, setPhotoPage} from "./photos/slice";
import {getFetchPhotoById, getRelatedPhotos,} from "./photoDetail/slice";
import {setFavoritesPhoto, setInFavorites} from "./favorites/slice";
import {getUser} from "./user/slice";

export default {
    getPhotos,
    getRelatedPhotos,
    setPhotoPage,
    clearPhotos,
    getFetchPhotoById,
    setFavoritesPhoto,
    setInFavorites,
    getUser,
    setIsLoading,
}