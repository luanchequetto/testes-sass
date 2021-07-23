import React from 'react'
import { PageProvider } from './assets/utils/PageContext'
import HomePage from './pages/HomePage/homePage'

function App() {
  return (
    <div>
      <PageProvider>
        <HomePage />
      </PageProvider>
    </div>
  )
}

export default App
