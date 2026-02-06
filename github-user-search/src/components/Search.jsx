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
    const getServerRequest = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(false);
        setUserData(null);

        try {
            const data = await fetchUserData(userName);
            console.log(data.data);

            setUserData(data.data);
        } catch (err) {
            setError(true);
            console.log(err);
        } finally {
            setLoading(false);
        }

        setUserName("");
    };
    return (
        <>
            <form action="" onSubmit={getServerRequest}>
                <input type="text" value={userName} onChange={handleInput} />
                <button style={{ marginInline: "10px", cursor: "pointer" }}>Search</button>
            </form>

            {loading && <p>loading...</p>}
            {error && <p>Looks like we cant find the use</p>}
            {userData && !loading && !error && (
                <div className="user-card" style={{ padding: "10px", margin: "20px", minHeight: "400px", borderRadius: "10px" }}>
                    <div className="user-img" style={{ width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden" }}>
                        <img src={userData.avatar_url} alt="" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className="user-info">
                        <h2>{userData.login}</h2>
                        <span style={{ marginRight: "20px" }}>Followers: {userData.followers}</span>
                        <span>Following: {userData.following}</span>
                    </div>
                    <a href={userData.html_url} target="_blanck">
                        <button>Go TO GitHub</button>
                    </a>
                </div>
            )}
        </>
    );
}
