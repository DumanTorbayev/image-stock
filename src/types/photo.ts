import {ReactChild, ReactNode} from "react";

export enum PhotoActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
    FETCH_PHOTOS_PAGE = 'FETCH_PHOTOS_PAGE',
}

export interface PhotoState {
    photos: PhotosType[]
    loading: boolean
    error: null | string
    page: number
    pre_page: number
}

export interface PhotoGridProps {
    photos: PhotosType[],
    children?: ReactChild | ReactNode
}

export interface PhotosType {
    id: string
    user: UserType
    links: {download: string}
    urls: {
        small: string
        regular: string
    }
    alt_description: string | undefined
}

export interface UserType {
    profile_image: {
        large: string
    }
    name: string
}

export interface PhotoParamsType {
    id: string
}

interface FetchPhotosAction {
    type: PhotoActionTypes.FETCH_PHOTOS
}

interface FetchPhotosSuccessAction {
    type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS
    payload: PhotosType[]
}

interface FetchPhotosErrorAction {
    type: PhotoActionTypes.FETCH_PHOTOS_ERROR
    payload: string
}

interface FetchPhotosPageAction {
    type: PhotoActionTypes.FETCH_PHOTOS_PAGE
    payload: number
}

export type PhotoAction = FetchPhotosAction | FetchPhotosSuccessAction | FetchPhotosErrorAction | FetchPhotosPageAction