import { useRef } from 'react'
import type * as THREE from 'three'
import { Extrude } from '@react-three/drei'

type Props = {}

const Building = ({shape, height}: Props) => {
  // console.log('shape--', shape)
  const mesh = useRef<THREE.Mesh>(null)
  return (
    // <mesh
    //   ref={mesh}
    //  // position={position}
    // >
    //   <extrudeGeometry shape={shape} />
    //   <meshStandardMaterial color="green" />
    // </mesh>
    <Extrude ref={mesh} args={[shape, {depth: height * 0.05, bevelEnabled: false }]} frustumCulled={false} castShadow receiveShadow>
       <meshPhongMaterial color="grey" />
      </Extrude>
  )
}

export default Building
