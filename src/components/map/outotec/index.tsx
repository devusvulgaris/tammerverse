
import { useEffect, useState, useMemo } from 'react'

import { generateBuilding, generateBuildingShape } from '@/utils'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils'

const coords = [
  [
    23.8340093,
    61.4855454
  ],
  [
    23.8342022,
    61.4855426
  ],
  [
    23.8342044,
    61.4855763
  ],
  [
    23.8340116,
    61.4855792
  ],
  [
    23.8340093,
    61.4855454
  ]
]


type Props = {}

const Outotec = (props: Props) => {
  const [buildings, setBuildings] = useState([])
  const [buildingsShapes, setBuildingsShapes] = useState([])

  const building = generateBuildingShape(coords)

  // useEffect(() => {
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
  // }, [])

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

export default Outotec
