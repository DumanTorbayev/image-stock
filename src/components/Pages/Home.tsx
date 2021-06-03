import React, {FC, useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {PhotoGrid} from "../PhotoGrid/PhotoGrid";
import {useLocation} from "react-router-dom";
import {getPhotoCollection} from "../../store/photoCollection/selectors";

interface LocationType {
    pathname: string
}

export const Home: FC = () => {
    const {photos, error, loading, page, limit} = useTypedSelector(getPhotoCollection)
    const {handleFetchPhotos, setPhotoPage, clearPhotos} = useActions()
    let location = useLocation<LocationType>()

    useEffect(() => {
        clearPhotos()
    }, [location])

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