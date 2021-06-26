import {PhotoParamsType, PhotoType} from "../../types/photo";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPhotoById, fetchRelatedPhoto} from "../../api/api";

export const getFetchPhotoById = createAsyncThunk(
    'photo/getPhotoById',
    async (params: PhotoParamsType) => {
        try {
            const response = await fetchPhotoById(params)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const getRelatedPhotos = createAsyncThunk(
    'photos/getRelatedPhotos',
    async (params: PhotoParamsType) => {
        try {
            const response = await fetchRelatedPhoto(params)
            return response.data.results
        } catch (e) {
            console.log(e)
        }
    }
)

interface photoDetailStateType {
    photos: PhotoType[]
    photo: PhotoType | null
    loading: boolean
}

const initialState: photoDetailStateType = {
    photos: [],
    photo: null,
    loading: false,
}

const photoDetail = createSlice({
    name: 'photoDetail',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFetchPhotoById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getFetchPhotoById.fulfilled, (state, action: PayloadAction<PhotoType>) => {
            state.photo = action.payload
            state.loading = false
        })
        builder.addCase(getRelatedPhotos.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
            state.photos = action.payload
        })
    }
})

export const {} = photoDetail.actions
export default photoDetail.reducer
