import * as PhotoCollectionActionCreators from './photoCollection/actions'
import * as PhotoDetailActionCreators from './photoDetail/actions'
import {setPhotoPage, clearPhotos} from "./photoCollection/slice";
import * as LikeUnlikeActionCreators from './rating/actions'
import * as FavoritesActionCreators from './favorites/actions'

export default {
    ...PhotoCollectionActionCreators,
    ...PhotoDetailActionCreators,
    setPhotoPage,
    clearPhotos,
    ...LikeUnlikeActionCreators,
    ...FavoritesActionCreators
}