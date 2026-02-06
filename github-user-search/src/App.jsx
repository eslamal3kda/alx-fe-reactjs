import React from 'react'
import Search from './components/Search'

export default function App() {
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY

  return (
    <div>
      <h1>App</h1>
      <p>{apiKey }</p>
      <Search />
    </div>
  )
}
