import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/PhotoTypedSelector";
import {useActions} from "../hooks/useActions";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoGrid from "../components/PhotoGrid/PhotoGrid";
import Preloader from "../components/Preloader/Preloader";

const Home: FC = () => {
    const {photos, error, loading, page, pre_page} = useTypedSelector(state => state.photo)
    const {fetchPhotos, setPhotoPage} = useActions()

    useEffect(() => {
        fetchPhotos(page, pre_page)
    }, [page])

    const handleSetPhotoPage = () => {
        let nextPage = page + 1
        setPhotoPage(nextPage)
    }

    if (loading) {
        return (
            <Preloader />
        )
    }

    if (error) {
        return <h1>Ошибка</h1>
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

export default Home;