import React, {FC} from 'react';
import css from './UserInfo.module.scss'
import {UserInfoType} from "../../types/user";

export const UserInfo: FC<UserInfoType> = ({name, profile_image, instagram_username}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{instagram_username}</div>
            <img src={profile_image.large} alt=""/>
        </div>
    );
}