import React from "react";
import WelcomeMessage from "./components/welcomeMessage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import  UserContextProvider  from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";

export default function App() {
    return (
        <>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <UserContextProvider>
                <ProfilePage />
            </UserContextProvider>
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </>
    );
}
