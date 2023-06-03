import { type ReactNode, useEffect, useState, useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Sky, MapControls, Extrude, FirstPersonControls, } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Plane from '../plane'
import { BufferGeometry, Shape, AxesHelper } from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'
import plots from '../../data/plots'
import Building from '../building'
import { generateCity } from '../../utils/generateCity'
import { generateObjects } from '../../utils'
import Water from '@/components/map/water'
import Parks from '@/components/map/parks'
import Buildings from '@/components/map/buildings'
import Railways from '@/components/map/railways'
import Roads from '@/components/map/roads'

type Props = {
  children: ReactNode
}

// const CameraHelper = () => {
//   const { camera } = useThree()

// //   useEffect(() => {
// // const eventId = 
// //   }, [])
// }

// const cameraSettings = {
//   position: [0, 20, 20],
//   up: [0, 0, 10],
//   far: 100000000,
// 

// const Road = useMemo((road) => {
//   return (
//   <line geometry={road}>
//     {/* <bufferGeometry args={road} /> */}
//     <lineBasicMaterial color="#000000" linewidth={2} transparent={true} />
//   </line>
//   )
// }, [road])

const Map = () => {
  const [water, setWater] = useState([])
  const [buildings, setBuildings] = useState([])
  const [buildingsShapes, setBuildingsShapes] = useState([])
  const [roads, setRoads] = useState([])
  const [green, setGreen] = useState([])


  useEffect(() => {
    (async () => {
      const data = await generateCity()
      const { water, buildings, buildingsShapes, roads, greenArray } = await generateObjects(data)
      // console.log('buildingsShapes', buildingsShapes)
      setWater(water)
      setBuildings(buildings)
      setBuildingsShapes(buildingsShapes)
      setRoads(roads)
      setGreen(greenArray)
    })()
  }, [])

  // useEffect(() => {

  //   const controls = 
  // }, [])

  const waterGeometry = useMemo(() => {
    if (water.length) {
      const waterGeom = mergeGeometries(water)

      waterGeom.name = "Water"

      return waterGeom
    }
  }, [water])

  const greenGeometry = useMemo(() => {
    if (green.length) {
      const greenGeom = mergeGeometries(green)

      greenGeom.name = "Parks"

      return greenGeom
    }
  }, [green])

  const buildingsGeometry = useMemo(() => {
    if (buildings.length) {
      const buildingsGeom = mergeGeometries(buildings)

      buildingsGeom.name = "Buildings"

      return buildingsGeom
    }
  }, [buildings])

  // const roadsGeometry = useMemo(() => {
  //   if (roads.length) {
  //     const roadsGeom = mergeGeometries(roads.filter)

  //     roadsGeom.name = "Roads"

  //     return roadsGeom
  //   }
  // }, [roads])

  // console.log('water', water)
  //console.log('waterGeometry', waterGeometry)

  // console.log('green', green)

  const builingShape = buildingsShapes[0]
  // console.log('builingShape', builingShape)

  const shape = useMemo(() => {
    const _shape = new Shape()

    const width = 8,
      length = 12

    _shape.moveTo(0, 0)
    _shape.lineTo(0, width)
    _shape.lineTo(length, width)
    _shape.lineTo(length, 0)
    _shape.lineTo(0, 0)

    return _shape
  }, [])

  // console.log('my shape', shape)

  return (
      <Canvas camera={{
        position: [-90, 0, 50],
        up: [0, 0, 10], // [0, 0, 10],
        far: 10000,
      }}>
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <primitive object={new AxesHelper(100)} />
        <gridHelper />
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 20, 200]} castShadow />
        {/* <CameraHelper /> */}
        <Physics>
          {/* {plots.map(({ position, size }) => (
          <Box position={position} size={size} />
        ))} */}
          {/* <group>
            {buildingsShapes.map(({ shape, height }, index) => (
              <Building key={index} shape={shape} height={height} />
            ))}
          </group> */}

          {/* <Extrude args={[shape]}>
          <meshPhongMaterial color="pink" />
        </Extrude>
        */}
          {/* {builingShape && (
          <Extrude args={[shape]}>
          <meshPhongMaterial color="pink" />
        </Extrude>
)} */}
          {/* {console.log('water length', water.length)}
          {water.map((water, index) => (
            <mesh key={index} geometry={water}>
              <meshPhongMaterial color="blue" />
            </mesh>
          ))} */}

          {/* <mesh geometry={roadsGeometry}>
            <meshBasicMaterial color="#000000" transparent={true} />
        </mesh> */}


          {/* <mesh geometry={buildingsGeometry}>
          <meshPhongMaterial color="gray" />
        </mesh> */}


        </Physics>
        {/* <mesh geometry={waterGeometry}>
        <meshPhongMaterial color="blue" />
      </mesh> */}
        {/* <mesh geometry={greenGeometry}>
          <meshPhongMaterial color="green" />
        </mesh> */}
        <Water />
        <Parks />
        <Buildings />
        <Railways />
        {/* <Roads /> */}
        <Plane />
        <MapControls
          // minPolarAngle={0}
          // maxPolarAngle={Math.PI * 0.5} 
          />
        {/* <FirstPersonControls /> */}
      </Canvas>
  )
}

export default Map
