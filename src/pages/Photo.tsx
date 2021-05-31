import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {PhotoParamsType, PhotosType} from "../types/photo";
import {fetchPhoto, fetchRelatedPhoto} from "../api/api";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";
import PhotoDetail from "../components/PhotoDetail/PhotoDetail";
import Preloader from "../components/Preloader/Preloader";

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
            <Preloader />
        );
    }

    return (
        <>
            <PhotoDetail
                user={photo.user}
                urls={photo.urls}
                links={photo.links}
                id={photo.id}
                alt_description={photo.alt_description}
            />

            {relatedPhoto.length !== 0
                ? <div className="container">
                    <PhotoGrid photos={relatedPhoto}>
                        <h3>Похожие фотографии</h3>
                    </PhotoGrid>
                </div>
                : null
            }
        </>
    )

};

export default Photo;