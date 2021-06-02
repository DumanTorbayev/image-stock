import React, {FC} from 'react';
import {Route} from 'react-router-dom'
import {Header} from "../Header/Header";
import {Photo} from "../Pages/Photo";
import {Home} from "../Pages/Home";

const App: FC = () => {

    return (
        <>
            <Header/>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/photo/:id">
                <Photo />
            </Route>
        </>
    );
}

export default App;