import axios from "axios";
import {PhotoParamsType} from "../types/photo";

let instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        "Authorization": `Client-ID ${process.env.REACT_APP_API_KEY}`,
    }
});

export async function fetchPhoto(setPhoto: any, params: PhotoParamsType) {
    try {
        const response = await instance.get(`/photos/${params.id}`)
        setPhoto(response.data)
    } catch (e) {
        console.error(e)
    }
}

export async function fetchRelatedPhoto(setRelatedPhoto: any, params: PhotoParamsType) {
    try {
        const response = await instance.get(`/photos/${params.id}/related`)
        setRelatedPhoto(response.data.results)
    } catch (e) {
        console.error(e)
    }
}

export const handleFetchPhoto = (page: number, per_page: number) => {
    return instance.get(`/photos`,
        {
            params: {
                per_page,
                page
            }
        })
}