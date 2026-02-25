import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-blue-100 p-4 flex justify-center">
            <ul className="flex gap-4">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to={"profile"}>Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
}
