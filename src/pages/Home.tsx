import React, {FC, useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
import {getPhotoCollection} from "../store/photoCollection/selectors";

export const Home: FC = () => {
    const {photos, loading, page, limit} = useTypedSelector(getPhotoCollection)
    const {handleFetchPhotos, setPhotoPage, clearPhotos} = useActions()

    useEffect(() => {
        clearPhotos()
    }, [])

    useEffect(() => {
        handleFetchPhotos({page, limit})
    }, [page, limit])

    const handleSetPhotoPage = () => {
        const nextPage = page + 1
        setPhotoPage(nextPage)
    }

    return (
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
    );
};