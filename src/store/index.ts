import {clearPhotos, handleFetchPhotos, handleFetchRelatedPhotos, setPhotoPage} from "./photos/slice";
import {handleFetchPhotoById} from "./photoDetail/slice";
import {setFavoritesPhoto, setInFavorites} from "./favorites/slice";

export default {
    handleFetchPhotos,
    handleFetchRelatedPhotos,
    setPhotoPage,
    clearPhotos,
    handleFetchPhotoById,
    setFavoritesPhoto,
    setInFavorites
}