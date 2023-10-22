import React from "react";
import ReactDOM  from "react-dom";
import Header from "./src/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./src/Body";
import Error from "./src/Error";
import Api from "./src/Api";
import About from "./src/About";

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter ([

    {
        path : "/",
        element : <Main/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/api",
                element : <Api/>
            },
            {
                path : "/about",
                element : <About/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render (<RouterProvider router={appRouter}/>)