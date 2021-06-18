import {PhotoType} from "../../types/photo";
import {getStorage, setStorage} from "../storage/storage";

export const handleAddInStorage = (
    data: PhotoType,
    setIsDelete: (arg0: string) => void,
) => {
    const localeStorageItem = getStorage('favorites')
    let favoritesArr = localeStorageItem ? localeStorageItem : []

    const index = favoritesArr.findIndex((item: PhotoType) => item.id === data.id)

    if (index !== -1) {
        favoritesArr.splice(index, 1)
        setStorage('favorites', favoritesArr)
        setIsDelete(data.id)
    } else {
        favoritesArr.push(data)
        setStorage('favorites', favoritesArr)
    }
}