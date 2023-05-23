import { useEffect, useState, useMemo } from 'react'
import { loadGeoJson } from '@/utils/generateCity'
import { generateObjects } from '@/utils'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'
import { Line } from '@react-three/drei'

type Props = {}

const Roads = (props: Props) => {
  const [roads, setRoads] = useState([])
  const [roadPoints, setRoadPoints] = useState([])

  useEffect(() => {
    (async () => {
      const data = await loadGeoJson({ type: 'roads' })
      console.log('roads data', data)

      const { water, buildings, buildingsShapes, roads, roadPoints, greenArray, railwaysArray, railwaysPoints } = await generateObjects(data)
      // console.log('buildingsShapes', buildingsShapes)
      setRoads(roads)
      setRoadPoints(roadPoints)
      // setRailwaysPoints(railwaysPoints)
      // setBuildings(buildings)
      // setBuildingsShapes(buildingsShapes)
      // setRoads(roads)
      // setGreen(greenArray)
    })()
  }, [])

  const roadsGeometry = useMemo(() => {
    if (roads.length) {
      roads.length = 10
      console.log('roads geom===>', roads)
      const roadsGeom = mergeGeometries(roads.filter(Boolean), true)

      roadsGeom.name = "Roads"

      return roadsGeom
    }
  }, [roads])

  console.log('[roadsGeometry]', roadsGeometry)


  return (
    null
    // <>
    //           {roads
    //       .filter(Boolean)
    //       .map((road, index) => (
    //         <line key={index} geometry={road}>
    //           {/* <bufferGeometry args={road} /> */}
    //           <lineBasicMaterial color="#000000" linewidth={2} transparent={true} />
    //         </line>
    //       ))
    //       }</>
    // <lineSegments geometry={roadsGeometry}>
    //   {/* <bufferGeometry attach="geometry" args={roadPoints} /> */}
    //   <lineBasicMaterial color="#000000" attach="material" />
    // </lineSegments>
    // <Line
    // points={railwaysPoints}
    // segments
    // color="orange"
    //  />
  
  )
}



export default Roads
