import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {
const color = "red"
  return (
    <>
      <div className="app">
        hello!!!
      </div>
      <Home color={color} />
      <Header   color={color}/>
    </>
  )
}

export default App
