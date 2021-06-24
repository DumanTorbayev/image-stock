import {PhotoParamsType, PhotoType} from "../../types/photo";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPhotoById} from "../../api/api";

export const handleFetchPhotoById = createAsyncThunk(
    'photo/fetchPhotoById',
    async (params: PhotoParamsType) => {
        try {
            const response = await fetchPhotoById(params)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

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

export const {} = photoSlice.actions
export default photoSlice.reducer
