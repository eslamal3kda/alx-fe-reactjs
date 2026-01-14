import React from 'react'
import WelcomeMessage from './components/welcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'


export default function App() {
  return (
    <>
    <WelcomeMessage />
    <Header />
    <MainContent />
    <UserProfile name="Eslam" age="26" bio="Frontend Developer"/>
    <Footer />
    </>
  )
}
