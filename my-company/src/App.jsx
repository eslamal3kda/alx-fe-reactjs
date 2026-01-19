import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Layout from "./components/Layout";

export default function App() {
    const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "about", element: <About /> },
                { path: "contact", element: <Contact /> },
                { path: "services", element: <Services /> },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={Routes}></RouterProvider>
        </>
    );
}
