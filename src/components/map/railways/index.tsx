import { useEffect, useState, useMemo } from 'react'
import { loadGeoJson } from '@/utils/generateCity'
import { generateObjects } from '@/utils'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'
import { Line } from '@react-three/drei'

type Props = {}

const Railways = (props: Props) => {
  const [railways, setRailways] = useState([])
  const [railwaysPoints, setRailwaysPoints] = useState([])

  useEffect(() => {
    (async () => {
      const data = await loadGeoJson({ type: 'railways' })
      console.log('park data', data)

      const { water, buildings, buildingsShapes, roads, greenArray, railwaysArray, railwaysPoints } = await generateObjects(data)
      // console.log('buildingsShapes', buildingsShapes)
      setRailways(railwaysArray)
      setRailwaysPoints(railwaysPoints)
      // setBuildings(buildings)
      // setBuildingsShapes(buildingsShapes)
      // setRoads(roads)
      // setGreen(greenArray)
    })()
  }, [])

  console.log('[railways]', railways)
  const railwaysGeometry = useMemo(() => {
    if (railways.length) {
      const railwaysGeom = mergeGeometries(railways)

      railwaysGeom.name = "Railways"

      return railwaysGeom
    }
  }, [railways])

  // console.log('railwaysPoints', railwaysPoints)

  return (
    <>
    {railways.forEach(railway => (
      <line geometry={railway}>
         <lineBasicMaterial color="orange" attach="material" />
      </line>
    ))}
    </>
    // <lineSegments>
    //   <bufferGeometry attach="geometry" args={[railwaysGeometry]} />
    //   <lineBasicMaterial color="orange" attach="material" />
    // </lineSegments>
    // <Line
    // points={railwaysPoints}
    // segments
    // color="orange"
    //  />
  
  )
}



export default Railways
