import axios from "axios";
import {Dispatch} from "redux";
import {PhotoAction, PhotoActionTypes} from "../../types/photo";

export const fetchPhotos = (page: number, per_page: number) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS})
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/photos?client_id=${process.env.REACT_APP_API_KEY}`,
                {
                    params: {
                        per_page,
                        page
                    }
                })
            dispatch({
                type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
                payload: response.data
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