import * as PhotoCollectionActionCreators from './photoCollection/actions'
import * as PhotoDetailActionCreators from './photoDetail/actions'
import {setPhotoPage, clearPhotos} from "./photoCollection/slice";
import {setIsDelete, setIsChecked, setFavoritesPhoto} from './favorites/slice'

export default {
    ...PhotoCollectionActionCreators,
    ...PhotoDetailActionCreators,
    setPhotoPage,
    clearPhotos,
    setIsDelete,
    setIsChecked,
    setFavoritesPhoto,
}