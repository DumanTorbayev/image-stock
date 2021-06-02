import Api from '../../../api'
import {createAsyncThunk} from "@reduxjs/toolkit";

const {likePhoto, unlikePhoto} = Api;

export const handleLikePhoto = createAsyncThunk(
    'photo/likePhoto',
    async (id: string) => {
        try {
            const response = await likePhoto(id)
            console.log(response.data);
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

export const handleUnlikePhoto = createAsyncThunk(
    'photo/unlikePhoto',
    async (id: string) => {
        try {
            const response = await unlikePhoto(id)
            console.log(response.data);
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)