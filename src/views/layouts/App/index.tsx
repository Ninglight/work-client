// define
import React from 'react'
import {hot} from "react-hot-loader"
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from '../../../routes'
import Header from '../Header/Header.component';


const App = () => {


    return (
        <>
            <Header />
            <Router>
                <main>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </main>
            </Router>
        </>
    )


}

export default (hot(module)(App));