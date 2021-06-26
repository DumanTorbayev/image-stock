import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotoType} from "../../types/photo";
import {FAVORITES} from "../../constants";
import {getStorage, setStorage} from "../../utils/storage/storage";

interface FavoriteTypes {
    photos: PhotoType[]
    checkedId: string | null
    removedPhotoId: string | null
}

const initialState: FavoriteTypes = {
    photos: [],
    checkedId: null,
    removedPhotoId: null
}

const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesPhoto(state, action: PayloadAction<PhotoType[]>) {
            state.photos = action.payload
        },
        setInFavorites(state, action: PayloadAction<PhotoType>) {
            const localeStorageItem = getStorage(FAVORITES)
            const arr = localeStorageItem ? localeStorageItem : []

            const index = arr.findIndex((item: PhotoType) => item.id === action.payload.id)

            if (index !== -1) {
                arr.splice(index, 1)
                state.removedPhotoId = state.removedPhotoId === action.payload.id ? null : action.payload.id
                setStorage(FAVORITES, arr)
            } else {
                arr.push(action.payload)
                setStorage(FAVORITES, arr)
            }
        }
    },
})

export const {setFavoritesPhoto, setInFavorites} = favorites.actions
export default favorites.reducer