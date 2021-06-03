import {combineReducers} from "@reduxjs/toolkit";
import photoCollection from "./photoCollection/slice";
import photo from "./photoDetail/slice";
import favorite from "./favorites/slice";

export const rootReducer = combineReducers({
    photoCollection,
    photo,
    favorite
})

export type RootState = ReturnType<typeof rootReducer>