import {PhotoAction, PhotoActionTypes, PhotoState} from "../../types/photo";


const initialState: PhotoState = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
    pre_page: 15
}

export const photoReducer = (state = initialState, action: PhotoAction): PhotoState => {
    switch (action.type) {
        case PhotoActionTypes.FETCH_PHOTOS:
            return {
                ...state,
                loading: true,
            }
        case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                photos: state.photos.concat(action.payload)
            }
        case PhotoActionTypes.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PhotoActionTypes.FETCH_PHOTOS_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        default:
            return state
    }
}