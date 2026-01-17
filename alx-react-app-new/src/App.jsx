import React from 'react'
import WelcomeMessage from './components/welcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'


export default function App() {
  return (
    <>
    <Header />
    <WelcomeMessage />
    <MainContent />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography"/>
    <Footer />
    </>
  )
}
