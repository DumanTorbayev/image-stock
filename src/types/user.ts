export interface UserType {
    profile_image: {
        large: string
    }
    name: string
    username: string
}

export interface CurrentUserType {
    username: string
    total_likes: number
    total_photos: number
}

export interface UserInfoType {
    profile_image: {
        large: string
    }
    name: string
    instagram_username: string
}

export interface UserParamsType {
    username: string
}