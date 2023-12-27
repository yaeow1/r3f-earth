import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {  ContactShadows, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Earth from '../public/Earth'

function App() {
  

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={true}/>
        <Suspense fallback={null}>
          <Earth/>
        </Suspense>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color='#000000'/>
      </Canvas>
    </>
  )
}

export default App
