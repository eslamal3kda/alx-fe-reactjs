import React from "react";
import WelcomeMessage from "./components/welcomeMessage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import  UserContext  from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";

export default function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com",age:25, bio:"Loves hiking and photography" };

    return (
        <>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <UserContext.Provider value={userData}>
                <ProfilePage />
                <UserProfile name="Alice" age="25" bio="Loves hiking and photography" value={userData} />
            </UserContext.Provider>
            <Footer />
        </>
    );
}
