import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {UserParamsType} from "../types/user";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getUserData} from "../store/user/selector";
import {Preloader} from "../components/UI/Preloader/Preloader";
import {UserInfo} from "../components/UserInfo/UserInfo";

export const User: FC = () => {
    const params = useParams<UserParamsType>()
    const {getUser} = useActions()
    const {user, loading} = useTypedSelector(getUserData)

    const {} = user

    useEffect(() => {
        getUser(params)
    }, [params])

    if (loading) {
        return (
            <Preloader/>
        );
    }

    return (
        <div className="container">
            {
                Object.keys(user).length !== 0
                    ? <>
                        <UserInfo instagram_username={user.instagram_username} name={user.name}
                                  profile_image={user.profile_image}
                        />
                    </>
                    : null
            }
        </div>
    );
};