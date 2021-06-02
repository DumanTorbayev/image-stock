import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from '../../../api'
import {PhotoParamsType} from "../../../types/photo";

const {fetchPhotos, fetchRelatedPhoto} = Api

export const handleFetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async ({page, limit}: any) => {
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
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)