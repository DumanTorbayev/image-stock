import {PhotoType} from "../../types/photo";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchPhotos} from "../../api/api";

interface getPhotosParamsType {
    page: number
    limit: number
}

// interface searchPhotosParamsType {
//     page: number
//     limit: number
//     value: string
// }

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async ({page, limit}: getPhotosParamsType) => {
        try {
            const response = await fetchPhotos(page, limit)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

// export const getSearchedPhotos = createAsyncThunk(
//     'photos/getSearchedPhotos',
//     async ({page, limit, value}: searchPhotosParamsType) => {
//         try {
//             const response = await fetchSearchedPhoto(page, limit, value)
//             return response.data
//         } catch (e) {
//             console.log(e)
//         }
//     }
// )

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
        // builder.addCase(getSearchedPhotos.fulfilled, (state, action: PayloadAction<PhotoType[]>) => {
        //     state.photos = state.photos.concat(action.payload).filter((n, i, a) => n === a.find(m => m.id === n.id))
        //     state.loading = false
        // })
    }
})

export const {setPhotoPage, clearPhotos, setIsLoading} = photos.actions
export default photos.reducer
