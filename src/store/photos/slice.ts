import {PhotoParamsType, PhotoType} from "../../types/photo";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPhotos, fetchRelatedPhoto} from "../../api/api";

const _ = require("lodash")

interface fetchPhotosParamsType {
    page: number
    limit: number
}

export const handleFetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async ({page, limit}: fetchPhotosParamsType) => {
        try {
            const response = await fetchPhotos(page, limit)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const handleFetchRelatedPhotos = createAsyncThunk(
    'photos/fetchRelatedPhotos',
    async (params: PhotoParamsType) => {
        try {
            const response = await fetchRelatedPhoto(params)
            return response.data.results
        } catch (e) {
            console.log(e)
        }
    }
)

export interface PhotoState {
    photos: PhotoType[]
    loading: boolean
    error: null | string
    page: number
    limit: number
}

const initialState: PhotoState = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 15
}

const photoSlice = createSlice({
    name: 'photoCollection',
    initialState,
    reducers: {
        setPhotoPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        clearPhotos(state) {
            state.photos.splice(0, state.photos.length)
        }
    },
    extraReducers: builder => {
        builder.addCase(handleFetchPhotos.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
            //state.photos = state.photos.concat(action.payload)
            state.photos = _.uniqBy(state.photos.concat(action.payload), 'id')
        })
        builder.addCase(handleFetchRelatedPhotos.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
            state.photos = action.payload
        })
    }
})

export const {setPhotoPage, clearPhotos} = photoSlice.actions
export default photoSlice.reducer
