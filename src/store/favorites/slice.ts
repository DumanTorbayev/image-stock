import {PhotoType} from "../../types/photo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {handleFetchFavorites} from "./actions";

interface FavoriteTypes {
    photos: PhotoType[]
    loading: boolean
}

const initialState: FavoriteTypes = {
    photos: [],
    loading: false,
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(handleFetchFavorites.pending, (state => {
            state.loading = true
        }))
        builder.addCase(handleFetchFavorites.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
            state.loading = false
            state.photos = action.payload
        })
    }
})

export default favoriteSlice.reducer