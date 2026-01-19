import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "10px", backgroundColor: "#2d2d2d", display: "flex", gap: "10px", justifyContent: "center" }}>
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={"/"}>
                Home
            </Link>
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={"about"}>
                About
            </Link>
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={"services"}>
                Services
            </Link>
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={"contact"}>
                Contact
            </Link>
        </nav>
    );
}
