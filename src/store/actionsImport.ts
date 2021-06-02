import * as PhotoCollectionActionCreators from './photoCollection/actions'
import * as PhotoDetailActionCreators from './photoDetail/actions'
import {setPhotoPage, clearPhotos} from "./photoCollection/reducer";
import * as LikeUnlikeActionCreators from './LikeUnlike/actions'

export default {
    ...PhotoCollectionActionCreators,
    ...PhotoDetailActionCreators,
    setPhotoPage,
    clearPhotos,
    ...LikeUnlikeActionCreators
}