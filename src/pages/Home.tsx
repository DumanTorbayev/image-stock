import React, {FC, useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
import {getPhotoCollection} from "../store/photos/selectors";
import {Preloader} from "../components/UI/Preloader/Preloader";

export const Home: FC = () => {
    const {photos, page, limit, loading} = useTypedSelector(getPhotoCollection)
    const {getPhotos, setPhotoPage, clearPhotos, setIsLoading} = useActions()

    useEffect(() => {
        clearPhotos()
        setIsLoading(true)
    }, [])

    useEffect(() => {
        getPhotos({page, limit})
    }, [page, limit])

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
                <InfiniteScroll
                    next={handleSetPhotoPage}
                    hasMore={true} loader={''}
                    dataLength={photos.length}
                    scrollThreshold={.7}
                >
                    <PhotoGrid photos={photos}/>
                </InfiniteScroll>
            </div>
        </>

    )
}