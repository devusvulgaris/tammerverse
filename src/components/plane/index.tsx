import { DoubleSide } from 'three'

type Props = {}

const Plane = (props: Props) => {
  return (
    <mesh position={[0, 0, -0.05]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[300, 300]} />
      <meshStandardMaterial color="#9d6e5e" opacity={0.1} side={DoubleSide} />
    </mesh>
  )
}

export default Plane
