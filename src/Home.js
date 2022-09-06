import React from 'react'
import About from './components/About'
import Headers from './components/Headers'
import Nav from './components/Nav'
import Separate from './components/Separate'

export default function Home() {
  return (
    <div>
        <Nav />
        <Headers />
        <About />
        <Separate />
    </div>
  )
}
