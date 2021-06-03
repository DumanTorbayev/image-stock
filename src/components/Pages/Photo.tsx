import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {PhotoParamsType} from "../../types/photo";
import {Preloader} from "../UI/Preloader/Preloader";
import {PhotoGrid} from "../PhotoGrid/PhotoGrid";
import {PhotoDetail} from "../PhotoDetail/PhotoDetail";
import {onScrollToTop} from "../../utils/scroll/ScrollToTop";
import {getPhotoCollection} from "../../store/photoCollection/selectors";
import {getPhoto} from "../../store/photoDetail/selectors";


export const Photo: FC = () => {
    const {photo, loading} = useTypedSelector(getPhoto)
    const {photos} = useTypedSelector(getPhotoCollection)
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