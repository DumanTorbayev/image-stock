import {ReactChild, ReactNode} from "react";
import {UserType} from "./user";

export interface PhotoGridProps {
    photos: PhotoType[],
    children?: ReactChild | ReactNode
}

export interface PhotoType {
    id: string
    user: UserType
    links: {download: string}
    urls: {
        small: string
        regular: string
    }
    alt_description: string | undefined
    width: number,
    height: number
}

export interface PhotoParamsType {
    id: string
}