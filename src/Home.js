import React from 'react'
import About from './components/About'
import Become from './components/Become'
import Headers from './components/Headers'
import Mask from './components/Mask'
import Member from './components/Member'
import Nav from './components/Nav'
import Separate from './components/Separate'

export default function Home() {
  return (
    <div>
        <Nav />
        <Headers />
        <About />
        <Separate />
        <Become />
        <Mask />
        <Member />
    </div>
  )
}
