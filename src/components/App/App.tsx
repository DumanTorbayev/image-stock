import React, {FC} from 'react';
import {Route} from 'react-router-dom'
import Header from "../Header/Header";
import Home from "../../Pages/Home";
import Photo from "../../Pages/Photo";

const App: FC = () => {

    return (
        <>
            <Header/>
            <div className="container">
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/photo/:id">
                    <Photo />
                </Route>
            </div>
        </>
    );
}

export default App;