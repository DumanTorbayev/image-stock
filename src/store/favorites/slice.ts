import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotoType} from "../../types/photo";

interface FavoriteTypes {
    photos: PhotoType[]
    deletedId: string | null
    checkedId: string | null
}

const initialState: FavoriteTypes = {
    photos: [],
    deletedId: null,
    checkedId: null
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setIsDelete(state, action: PayloadAction<string>) {
            state.deletedId = action.payload
        },
        setIsChecked(state, action: PayloadAction<string>) {
            state.deletedId = action.payload
        },
        setFavoritesPhoto(state, action: PayloadAction<PhotoType[]>) {
            state.photos = action.payload
        }
    },
})

export const {setIsDelete, setIsChecked, setFavoritesPhoto} = favoriteSlice.actions
export default favoriteSlice.reducer