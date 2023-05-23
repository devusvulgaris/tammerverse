import { useEffect, useState, useMemo } from 'react'
import { loadGeoJson } from '@/utils/generateCity'
import { generateObjects } from '@/utils'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'

type Props = {}

const Water = (props: Props) => {
  const [water, setWater] = useState([])

  useEffect(() => {
    (async () => {
      const data = await loadGeoJson({ type: 'water' })
      // console.log('water data', data)

      const { water, buildings, buildingsShapes, roads, greenArray } = await generateObjects(data)
      // console.log('buildingsShapes', buildingsShapes)
      setWater(water)
      // setBuildings(buildings)
      // setBuildingsShapes(buildingsShapes)
      // setRoads(roads)
      // setGreen(greenArray)
    })()
  }, [])

  // console.log('[WATER]', water)
  const waterGeometry = useMemo(() => {
    if (water.length) {
      const waterGeom = mergeGeometries(water)

      waterGeom.name = "Water"

      return waterGeom
    }
  }, [water])

  return (
    <mesh geometry={waterGeometry}>
      <meshBasicMaterial color="blue" />
    </mesh>
  )
}

export default Water
