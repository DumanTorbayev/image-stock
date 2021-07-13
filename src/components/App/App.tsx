import React, {FC} from 'react';
import {Route} from 'react-router-dom'
import {Header} from "../Header/Header";
import {Photo} from "../../pages/Photo";
import {Home} from "../../pages/Home";
import {Favorites} from "../../pages/Favorites";
import {Search} from "../../pages/Search";

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
            <Route path="/search">
                <Search/>
            </Route>
        </>
    );
}