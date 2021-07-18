import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
import {Preloader} from "../components/UI/Preloader/Preloader";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getPhotoCollection} from "../store/photos/selectors";
import {useActions} from "../hooks/useActions";
import {LocationType} from "../types/location";
import {PhotoNotFound} from "../components/UI/PhotoNotFound/PhotoNotFound";

export const Search = () => {
    const {photos, page, limit, loading} = useTypedSelector(getPhotoCollection)
    const {getSearchedPhotos, setPhotoPage, clearPhotos, setIsLoading} = useActions()
    const location = useLocation<LocationType>()
    const value = location.search.replace(/\?/, '')

    useEffect(() => {
        clearPhotos()
        setIsLoading(true)
    }, [value])

    useEffect(() => {
        getSearchedPhotos({page, limit, value})
    }, [page, limit, value])

    const handleSetPhotoPage = () => {
        const nextPage = page + 1
        setPhotoPage(nextPage)
    }

    if (loading) {
        return (
            <Preloader/>
        )
    }

    return (
        <>
            <div className="container">
                {photos.length !== 0
                    ? <InfiniteScroll
                        next={handleSetPhotoPage}
                        hasMore={true} loader={''}
                        dataLength={photos.length}
                        scrollThreshold={.7}
                    >
                        <PhotoGrid photos={photos}/>
                    </InfiniteScroll>
                    : <PhotoNotFound>По Вашему запросу <br/>не найдено ни одно фото</PhotoNotFound>
                }
            </div>
        </>

    )
}