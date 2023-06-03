import React from 'react'
import { Canvas } from '@react-three/fiber'
import {Model} from '@/components/models/RoboticArm'
import { OrbitControls } from '@react-three/drei'
type Props = {}

const Scene = (props: Props) => {
  return (
    <div style={{ width: '70%', height: '50vh' }}>
      <Canvas
        camera={{
          position: [3, 4, 0],
          up: [0, 0, 10]
        }}>
        <ambientLight intensity={0.5} />
        <axesHelper />
        <Model />
        <OrbitControls />
      </Canvas>
    </div>

  )
}

export default Scene
