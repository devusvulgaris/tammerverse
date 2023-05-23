import { type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, MapControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Plane from '../plane'
import * as THREE from 'three'
import plots from '../../data/plots'
import Box from '../box'

type Props = {
  children: ReactNode
}

const cameraSettings = {
  position: [20, 20, 20],
  up: [0, 0, 100],
  
  far: 100
}

const Map = () => {
  return (
    <Canvas camera={cameraSettings}>
      <Sky distance={100000} sunPosition={[10, 10, 0]} />
      <primitive object={new THREE.AxesHelper(100)} />
      <ambientLight intensity={0.7} />
      <Physics>
        {plots.map(({ position, size }, index) => (
          <Box key={index} position={position} size={size} />
        ))}
      </Physics>
      <Plane />
      <MapControls />
    </Canvas>
  )
}

export default Map
