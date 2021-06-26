import {combineReducers} from "@reduxjs/toolkit";
import photos from "./photos/slice";
import photoDetail from "./photoDetail/slice";
import favorites from "./favorites/slice";
import user from "./user/slice";

export const rootReducer = combineReducers({
    photos,
    photoDetail,
    favorites,
    user,
})

export type RootState = ReturnType<typeof rootReducer>