import {combineReducers} from "@reduxjs/toolkit";
import photoCollection from "./photoCollection/reducer";
import photo from "./photoDetail/reducer";

export const rootReducer = combineReducers({
    photoCollection,
    photo
})

export type RootState = ReturnType<typeof rootReducer>