import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotoType} from "../../types/photo";
import {FAVORITES} from "../../constants";
import {getStorage, setStorage} from "../../utils/storage/storage";

interface FavoriteTypes {
    photos: PhotoType[]
    checkedPhotoId: string[]
    removedPhotoId: string | null
}

const initialState: FavoriteTypes = {
    photos: [],
    checkedPhotoId: [],
    removedPhotoId: null
}

const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesPhoto(state, action: PayloadAction<PhotoType[]>) {
            state.photos = action.payload
        },
        setFavoritesId(state, action: PayloadAction<string>) {
            state.checkedPhotoId.push(action.payload)
        },
        setInFavorites(state, action: PayloadAction<PhotoType>) {
            const localeStorageItem = getStorage(FAVORITES)
            const arrOfObj = localeStorageItem ? localeStorageItem : []

            const index = arrOfObj.findIndex((item: PhotoType) => item.id === action.payload.id)

            if (index !== -1) {
                arrOfObj.splice(index, 1)
                state.removedPhotoId = state.removedPhotoId === action.payload.id ? null : action.payload.id
                setStorage(FAVORITES, arrOfObj)
            } else {
                arrOfObj.push(action.payload)
                setStorage(FAVORITES, arrOfObj)
            }
        }
    },
})

export const {setFavoritesPhoto, setInFavorites, setFavoritesId} = favorites.actions
export default favorites.reducer