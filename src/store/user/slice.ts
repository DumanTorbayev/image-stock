import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser} from "../../api/api";
import {UserParamsType} from "../../types/user";

export const getUser = createAsyncThunk(
    'user/fetchUser',
    async (params: UserParamsType) => {
        try {
            const response = await fetchUser(params)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)

interface UserType {
    user: any
    loading: boolean
}

const initialState: UserType = {
    user: {},
    loading: false
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUser.pending, (state, action: PayloadAction<any>) => {
            state.loading = true
        })
        builder.addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.user = action.payload
            state.loading = false
        })
    }
})

export const {} = user.actions
export default user.reducer