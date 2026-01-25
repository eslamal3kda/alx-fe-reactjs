import React from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Layout from "./components/Layout";

export default function App() {
    // const Routes = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Layout />,
    //         children: [
    //             { path: "/", element: <Home /> },
    //             { path: "about", element: <About /> },
    //             { path: "contact", element: <Contact /> },
    //             { path: "services", element: <Services /> },
    //         ],
    //     },
    // ]);
    // return (
    //     <>
    //         <RouterProvider router={Routes}></RouterProvider>
    //     </>
    // );
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="services" element={<Services />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
