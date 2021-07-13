import {combineReducers} from "@reduxjs/toolkit";
import photos from "./photos/slice";
import photoDetail from "./photoDetail/slice";
import favorites from "./favorites/slice";

export const rootReducer = combineReducers({
    photos,
    photoDetail,
    favorites,
})

export type RootState = ReturnType<typeof rootReducer>