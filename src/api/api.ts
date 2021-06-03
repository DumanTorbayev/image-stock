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

export const fetchFavorites = (user: string) => {
    return apiInstance.get(`/users/${user}/likes`)

}

export const likePhoto = (id: string) => {
    return apiInstance.post(`/photos/${id}/like`)
}

export const unlikePhoto = (id: string) => {
    return apiInstance.delete(`/photos/${id}/like`)
}