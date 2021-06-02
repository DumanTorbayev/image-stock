import {PhotoType, RelatedPhotoType} from "../../../types/photo";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {handleFetchPhotos, handleFetchRelatedPhotos} from "../actions";

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
            state.photos = state.photos.concat(action.payload)
        })
        builder.addCase(handleFetchRelatedPhotos.fulfilled, (state, action: PayloadAction<RelatedPhotoType>) => {
            state.photos = action.payload.results
        })
    }
})

const {reducer: photoCollection, actions} = photoSlice

export const {setPhotoPage, clearPhotos} = actions
export default photoCollection
