import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from '../../api'

const {fetchFavorites} = Api

export const handleFetchFavorites = createAsyncThunk(
    'photos/fetchFavorites',
    async (user: string) => {
        try {
            const response = await fetchFavorites(user)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)