import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotoType} from "../../types/photo";
import {FAVORITES} from "../../constants";
import {getStorage, setStorage} from "../../utils/storage/storage";

interface FavoriteTypes {
    photos: PhotoType[]
    checkedId: string | null
}

const initialState: FavoriteTypes = {
    photos: [],
    checkedId: null
}

const favoriteSlice = createSlice({
    name: 'favorite',
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
                setStorage(FAVORITES, arr)
            } else {
                arr.push(action.payload)
                setStorage(FAVORITES, arr)
            }
        }
    },
})

export const {setFavoritesPhoto, setInFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer