import { useRef } from 'react'
import type * as THREE from 'three'

type Props = {}

const Box = ({position, size}: Props) => {
  const mesh = useRef<THREE.Mesh>(null)
  return (
    <mesh
      ref={mesh}
      position={position}
    >
      <boxGeometry  args={size} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

export default Box
