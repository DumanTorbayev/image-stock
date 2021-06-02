import {PhotoType} from "../../../types/photo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {handleFetchPhotoById} from "../actions";

interface PhotoStateType {
    photo: PhotoType | null
    loading: boolean
}

const initialState: PhotoStateType = {
    photo: null,
    loading: false,
}

const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(handleFetchPhotoById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(handleFetchPhotoById.fulfilled, (state, action: PayloadAction<PhotoType>) => {
            state.photo = action.payload
            state.loading = false
        })
    }
})

const {reducer: photo, actions} = photoSlice

export const {} = actions
export default photo
