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
                <Route path="/image-stock" exact>
                    <Home/>
                </Route>
                <Route path="/image-stock/photo/:id">
                    <Photo />
                </Route>
                <Route path="/image-stock/favorites" exact>
                    <Favorites />
                </Route>
            </Switch>
        </>
    );
}

export default App;