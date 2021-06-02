import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from '../../../api'
import {PhotoParamsType} from "../../../types/photo";

const {fetchPhotoById} = Api

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