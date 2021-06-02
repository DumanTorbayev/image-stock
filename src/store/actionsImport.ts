import * as PhotoCollectionActionCreators from './photoCollection/actions'
import * as PhotoDetailActionCreators from './photoDetail/actions'
import {setPhotoPage, clearPhotos} from "./photoCollection/reducer";

export default {
    ...PhotoCollectionActionCreators,
    ...PhotoDetailActionCreators,
    setPhotoPage,
    clearPhotos
}