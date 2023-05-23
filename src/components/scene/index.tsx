import React from 'react'
import { Canvas } from '@react-three/fiber'

type Props = {}

const Scene = (props: Props) => {
  return (
    <div style={{ width: '50%', height: '50vh' }}>
      <Canvas
        camera={{
          position: [0, 0, 0],
          up: [0, 0, 10]
        }}>
        <ambientLight intensity={0.5} />
        <axesHelper />
      </Canvas>
    </div>

  )
}

export default Scene
