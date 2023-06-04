import React from 'react'
import { Canvas } from '@react-three/fiber'
// import {Model} from '@/components/models/RoboticArm'
import { Model } from '@/components/models/6axis-RoboticArm'
import { OrbitControls } from '@react-three/drei'
import {Box} from '@chakra-ui/react'
import Info from './Info'

type Props = {}

const Scene = (props: Props) => {
  return (
    <Box minH="80vh" height="100%">
      <Info />
      <Canvas
        camera={{
          position: [0, 0, 1],
          up: [0, 0, 3]
        }}>
        <ambientLight intensity={0.5} />
        {/* <axesHelper /> */}
        <Model />
        <OrbitControls />
      </Canvas>
    </Box>
  )
}

export default Scene
