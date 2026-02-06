import React, { useState } from "react";
import UserCard from "./UserCard";
import fetchUserData from "../services/githubService";

export default function Search() {
    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const handleInput = (e) => {
        setUserName(e.target.value);
    };
    const getServerRequest = async () => {
        setLoading(true);
        setError(false)
        setUserData(null)

        try {
            const data = await fetchUserData(userName);
            console.log(data.data);
            
        setUserData(data.data);
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
        

        setUserName("");
    };
    return (
        <>
            <input type="text" value={userName} onChange={handleInput} />
            <button style={{ marginInline: "10px", cursor: "pointer" }} onClick={getServerRequest}>
                Search
            </button>
            {loading && <p>loading...</p>}
            {error && <p>Can't find user data</p>}
            {userData && !loading && !error && <UserCard userData={userData} />}
            
        </>
    );
}
