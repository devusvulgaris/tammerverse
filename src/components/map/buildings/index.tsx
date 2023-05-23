import { useEffect, useState, useMemo } from 'react'
import { loadGeoJson } from '@/utils/generateCity'
import { generateObjects } from '@/utils'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'

type Props = {}

const Buildings = (props: Props) => {
  const [buildings, setBuildings] = useState([])
  const [buildingsShapes, setBuildingsShapes] = useState([])

  useEffect(() => {
    (async () => {
      const data = await loadGeoJson({ type: 'buildings' })

      const { water, buildings, buildingsShapes, roads, greenArray } = await generateObjects(data)
      // console.log('buildingsShapes', buildingsShapes)
      setBuildings(buildings)
      setBuildingsShapes(buildingsShapes)
      // setBuildings(buildings)
      // setBuildingsShapes(buildingsShapes)
      // setRoads(roads)
      // setGreen(greenArray)
    })()
  }, [])

  const buildingsGeometry = useMemo(() => {
    if (buildings.length) {
      const buildingsGeom = mergeGeometries(buildings)

      buildingsGeom.name = "Buildings"

      return buildingsGeom
    }
  }, [buildings])

  return (
    <mesh geometry={buildingsGeometry}>
      <meshPhongMaterial color="gray" />
    </mesh>
  )
}

export default Buildings
