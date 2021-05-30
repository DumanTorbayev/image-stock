import React, {useEffect, useState} from 'react';
import axios from "axios";
import {PhotosType} from "../types/photo";
import {useParams} from 'react-router-dom'
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";

interface PhotoParamsType {
    id: string
}

const Photo = () => {
    const [photo, setPhoto] = useState<PhotosType | null>(null)
    const [relatedPhoto, setRelatedPhoto] = useState([])
    const params = useParams<PhotoParamsType>()

    useEffect(() => {
        fetchPhoto()
        fetchRelatedPhoto()
        window.scrollTo({top: 0})
    }, [params.id])

    async function fetchPhoto() {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/photos/${params.id}?client_id=${process.env.REACT_APP_API_KEY}`)

            setPhoto(response.data)
        } catch (e) {
            alert(e)
        }
    }

    async function fetchRelatedPhoto() {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/photos/${params.id}/related?client_id=${process.env.REACT_APP_API_KEY}`)

            setRelatedPhoto(response.data.results)
        } catch (e) {
            alert(e)
        }
    }

    if (!photo) {
        return (
            <h1>
                Loading...
            </h1>
        );
    }

    return (
        <div>
            <div>{photo.user.name}</div>
            <img src={photo.user.profile_image.large} alt=""/>
            {photo.tags?.map((t, i) => <div key={`${i}${t.title}`}>{t.title}</div>)}
            <img src={photo.urls.regular} alt={photo.alt_description}/>

            <PhotoGrid photos={relatedPhoto}/>
        </div>
    )

};

export default Photo;