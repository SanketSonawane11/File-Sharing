import React, { useEffect } from 'react'
import gsap from 'gsap'
import PlayArea from './Components/PlayArea'
// import { Motion } from 'framer-motion'


export default function App() {

  useEffect(() =>
  {
    gsap.from(".navbar", {
      opacity: 0,
      // y: -50,
      scale: 0.5,
      // animation: EasePack,
      duration: 0.09,
    })

    gsap.to(".navbar", {
      opacity: 1,
      // y: 0,
      scale:1,
      // yoyo: "true",
      // repeat: 2
      // duration: 1,
    })
  }
  )


  return (
    <div className='main'>
      
      <h1 className='navbar'> Navbar. </h1>

      <PlayArea />

      
    </div>
  )
}
