import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom'
import {Header} from "../Header/Header";
import {Photo} from "../Pages/Photo";
import {Home} from "../Pages/Home";
import Favorites from "../Pages/Favorites";

const App: FC = () => {

    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/photo/:id">
                    <Photo />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
            </Switch>
        </>
    );
}

export default App;