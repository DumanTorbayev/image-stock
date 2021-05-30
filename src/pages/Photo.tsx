import React, {useEffect, useState} from 'react';
import {PhotoParamsType, PhotosType} from "../types/photo";
import {useParams} from 'react-router-dom'
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";
import {fetchPhoto, fetchRelatedPhoto} from "../api/api";

const Photo = () => {
    const [photo, setPhoto] = useState<PhotosType | null>(null)
    const [relatedPhoto, setRelatedPhoto] = useState<PhotosType[]>([])
    const params = useParams<PhotoParamsType>()

    useEffect(() => {
        fetchPhoto(setPhoto, params)
        fetchRelatedPhoto(setRelatedPhoto, params)
        window.scrollTo({top: 0})
    }, [params.id])

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