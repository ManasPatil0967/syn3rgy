import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Carousel from './three/Carousel'
import './SponsorStyles.css'

export default function App() {
  return (
    <div className="">
      <Canvas>
        <Suspense fallback={null}>
          <Carousel />
        </Suspense>
      </Canvas>
    </div>
  )
}