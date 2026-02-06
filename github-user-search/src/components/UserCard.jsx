import React from "react";

export default function UserCard({ userData }) {
    return (
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
    );
}
