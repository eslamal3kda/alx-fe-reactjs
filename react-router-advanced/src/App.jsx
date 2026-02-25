import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import ProfileSetting from "./components/ProfileSetting";
import ProfileDetails from "./components/ProfileDetails";

export default function App() {
    const routing = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: "/profile",
                    element: <Profile />,
                    children: [
                        { path: "/profile/setting", element: <ProfileSetting /> },
                        { path: "/profile/details", element: <ProfileDetails /> },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={routing}></RouterProvider>;
}
