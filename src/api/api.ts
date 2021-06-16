import axios from "axios";
import {PhotoParamsType} from "../types/photo";

const apiInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        "Authorization": `Client-ID ${process.env.REACT_APP_API_KEY}`,
    }
});

export const fetchPhotoById = (params: PhotoParamsType) => {
    return apiInstance.get(`/photos/${params.id}`)
}

export const fetchRelatedPhoto = (params: PhotoParamsType) => {
    return apiInstance.get(`/photos/${params.id}/related`)
}

export const fetchPhotos = (page: number, limit: number) => {
    return apiInstance.get(`/photos`,
        {
            params: {page, per_page: limit}
        })
}