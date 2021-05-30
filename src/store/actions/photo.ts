import {Dispatch} from "redux";
import {PhotoAction, PhotoActionTypes} from "../../types/photo";
import {handleFetchPhoto} from "../../api/api";

export const fetchPhotos = (page: number, per_page: number) => {
    return (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS})
            handleFetchPhoto(page, per_page)
                .then(response => {
                    dispatch({
                        type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
                        payload: response.data
                    })
                })
        } catch (e) {
            dispatch({
                type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
                payload: 'Error'
            })
        }
    }
}

export const setPhotoPage = (page: number): PhotoAction => ({
    type: PhotoActionTypes.FETCH_PHOTOS_PAGE,
    payload: page
})