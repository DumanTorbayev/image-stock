import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom'
import {Header} from "../Header/Header";
import {Photo} from "../../pages/Photo";
import {Home} from "../../pages/Home";
import {Favorites} from "../../pages/Favorites";
import {User} from "../../pages/User";

export const App: FC = () => {
    return (
        <>
            <Header/>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/photo/:id">
                <Photo/>
            </Route>
            <Route path="/favorites">
                <Favorites/>
            </Route>
            <Route path="/user/:username">
                <User />
            </Route>
        </>
    );
}