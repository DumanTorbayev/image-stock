import {PhotoParamsType, PhotoType} from "../../types/photo";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPhotos, fetchRelatedPhoto} from "../../api/api";
//import {normalize, schema} from "normalizr"

interface getPhotosParamsType {
    page: number
    limit: number
}

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async ({page, limit}: getPhotosParamsType) => {
        try {
            const response = await fetchPhotos(page, limit)

            // const normalized = normalize(response.data, [userEntity])
            // return normalized.entities
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export interface PhotosStateType {
    photos: PhotoType[]
    loading: boolean
    error: null | string
    page: number
    limit: number
}

const initialState: PhotosStateType = {
    photos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 15
}

const photos = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setPhotoPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        clearPhotos(state) {
            state.photos.splice(0, state.photos.length)
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getPhotos.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
            state.photos = state.photos.concat(action.payload).filter((n, i, a) => n === a.find(m => m.id === n.id))
            state.loading = false
        })
    }
})

export const {setPhotoPage, clearPhotos, setIsLoading} = photos.actions
export default photos.reducer
