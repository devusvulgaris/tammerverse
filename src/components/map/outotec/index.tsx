
import { useEffect, useState, useRef, useMemo } from 'react'

import { generateBuilding, normalizeCoordinates } from '@/utils'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'
import { Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useDisclosure } from '@chakra-ui/react'
import { InfoModal } from '@/components/map/info'
import useStore from '@/store'


const coords = [
  [
    [
      23.7694772,
      61.4840755
    ],
    [
      23.768372,
      61.4842097
    ],
    [
      23.7686768,
      61.4847817
    ],
    [
      23.7685188,
      61.4848009
    ],
    [
      23.768392,
      61.4848163
    ],
    [
      23.7679419,
      61.4839714
    ],
    [
      23.7693318,
      61.4838026
    ],
    [
      23.7694772,
      61.4840755
    ]
  ]
]


type Props = {}

const Outotec = (props: Props) => {
  const [buildingCenter, setBuildingCenter] = useState()
  const [hovered, setHovered] = useState(false)
  const [building, setBuilding] = useState()
  const [buildingsShapes, setBuildingsShapes] = useState([])
  const [isActive, setActive] = useState(false)
  const [isOpen, onOpen, onClose] = useStore(store => [store.modalOpen, store.openModal, store.closeModal])
  console.log('isOpen in outotec', isOpen)
  console.log('Outotec coords', coords)
  console.log('Outotec building', building)

  useEffect(() => {
    const building = generateBuilding(coords, 10)
    setBuilding(building)
    //   (async () => {
    //     const data = await loadGeoJson({ type: 'buildings' })

    //     const { water, buildings, buildingsShapes, roads, greenArray } = await generateObjects(data)
    //     // console.log('buildingsShapes', buildingsShapes)
    //     setBuildings(buildings)
    //     setBuildingsShapes(buildingsShapes)
    //     // setBuildings(buildings)
    //     // setBuildingsShapes(buildingsShapes)
    //     // setRoads(roads)
    //     // setGreen(greenArray)
    //   })()
  }, [])

  // const buildingsGeometry = useMemo(() => {
  //   if (buildings.length) {
  //     const buildingsGeom = mergeGeometries(buildings)

  //     buildingsGeom.name = "Buildings"

  //     return buildingsGeom
  //   }
  // }, [buildings])
  const ref = useRef()
  const textRef = useRef()
  if (ref.current && textRef.current) {
    textRef.current.geometry.center()
    const center = ref.current.geometry?.boundingSphere?.center
    console.log('center====>', center)
    // textRef.current?.position.set([center.x, center.y, center.z])
  }
  //textRef.current.geometry.center()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // console.log('centrr', ref.current.geometry?.boundingSphere?.center)
  // useEffect(() => {
  //   if (ref.current) {
  //     const center = ref.current.geometry?.boundingSphere?.center
  //     console.log('Outotec center', center)
  //     setBuildingCenter(center)
  //   }
  // }, [])

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01
    }
  })

  // x: -16.717056274414062, y: 10.39523696899414, z: 0.25

  // useEffect(() => {
  //   console.log('updating position hook??', textRef.current)
  //   // console.log('updating position hook building center??', buildingCenter)
  //   if (ref.current && textRef.current) {
  //     console.log('updating position', textRef.current)
  //     const center = ref.current.geometry?.boundingSphere?.center
  //     console.log('text ref center ', ref.current.geometry?.boundingSphere)
  //     if (center) {
  //     textRef.current.position.set([center.x, center.y, center.z])
  //     }
  //     }
  // }, [])


  return (
    <group>
      <Text3D ref={textRef} size={0.1} font={'/roboto-font.json'} rotation-x={Math.PI / 2} height={0.025} position={[-16.717056274414062, 10.39523696899414, 1]}>
        Outotec
        <meshNormalMaterial />
      </Text3D>
      <mesh ref={ref} geometry={building} onClick={onOpen} onPointerOver={() => { setHovered(true) }} onPointerLeave={() => setHovered(false)}>
        <meshPhongMaterial color={hovered ? '#753a88' : '#cc2b5e'} />
      </mesh>
    </group>
  )
}

export default Outotec
