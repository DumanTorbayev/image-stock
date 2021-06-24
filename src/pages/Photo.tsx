import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {PhotoParamsType} from "../types/photo";
import {Preloader} from "../components/UI/Preloader/Preloader";
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
import {PhotoDetail} from "../components/PhotoDetail/PhotoDetail";
import utils from "../utils";
import {getPhotoCollection} from "../store/photos/selectors";
import {getPhoto} from "../store/photoDetail/selectors";


export const Photo: FC = () => {
    const {photo, loading} = useTypedSelector(getPhoto)
    const {photos} = useTypedSelector(getPhotoCollection)
    const {handleFetchPhotoById, handleFetchRelatedPhotos} = useActions()
    const params = useParams<PhotoParamsType>()
    const {scrollToTop} = utils

    useEffect(() => {
        handleFetchPhotoById(params)
        handleFetchRelatedPhotos(params)
        scrollToTop()
    }, [params.id])

    if (loading) {
        return (
            <Preloader/>
        );
    }

    return (
        <>
            {photo && <PhotoDetail {...photo}/>}

            <div className="container">
                <PhotoGrid photos={photos}>
                    <h3>Похожие фотографии</h3>
                </PhotoGrid>
            </div>
        </>
    )

};