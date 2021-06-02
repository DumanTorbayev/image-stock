import React, {FC, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom'
import {useTypedSelector} from "../../hooks/PhotoTypedSelector";
import {useActions} from "../../hooks/useActions";
import {PhotoParamsType} from "../../types/photo";
import {Preloader} from "../UI/Preloader/Preloader";
import {PhotoGrid} from "../PhotoGrid/PhotoGrid";
import {PhotoDetail} from "../PhotoDetail/PhotoDetail";
import {onScrollToTop} from "../../utils/scroll/ScrollToTop";



export const Photo: FC = () => {
    const {photo, loading} = useTypedSelector(state => state.photo)
    const {photos} = useTypedSelector(state => state.photoCollection)
    const {handleFetchPhotoById, handleFetchRelatedPhotos} = useActions()
    const params = useParams<PhotoParamsType>()

    useEffect(() => {
        handleFetchPhotoById(params)
        handleFetchRelatedPhotos(params)
        onScrollToTop()
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