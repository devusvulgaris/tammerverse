import { useEffect, useState, useMemo } from 'react'
import { loadGeoJson } from '@/utils/generateCity'
import { generateObjects } from '@/utils'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'

type Props = {}

const Parks = (props: Props) => {
  const [parks, setParks] = useState([])

  useEffect(() => {
    (async () => {
      const data = await loadGeoJson({ type: 'parks' })
      // console.log('park data', data)

      const { water, buildings, buildingsShapes, roads, greenArray } = await generateObjects(data)
      // console.log('buildingsShapes', buildingsShapes)
      setParks(greenArray)
      // setBuildings(buildings)
      // setBuildingsShapes(buildingsShapes)
      // setRoads(roads)
      // setGreen(greenArray)
    })()
  }, [])

  // console.log('[PARKS]', parks)
  const parksGeometry = useMemo(() => {
    if (parks.length) {
      const parksGeom = mergeGeometries(parks)

      parksGeom.name = "Parks"

      return parksGeom
    }
  }, [parks])

  return (
    <mesh geometry={parksGeometry}>
      <meshPhongMaterial color="green" />
    </mesh>
  )
}

export default Parks
