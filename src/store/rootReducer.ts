import {combineReducers} from "@reduxjs/toolkit";
import photoCollection from "./photoCollection/slice";
import photo from "./photoDetail/slice";

export const rootReducer = combineReducers({
    photoCollection,
    photo
})

export type RootState = ReturnType<typeof rootReducer>