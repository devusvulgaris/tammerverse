
import * as THREE from 'three'

export async function loadGeoJson({ type }) {

  const getFileName = (type) => {
    switch (type) {
      case 'water':
        return 'water.geojson'
      case 'parks':
        return 'parks.geojson'
      case 'riverbank':
        return 'riverbank.geojson'
      case 'buildings':
        return 'buildings.geojson'
      case 'railways':
        return 'railways.geojson'
      case 'roads':
        return 'roads.geojson'
      default:
        return null
    }
  }

  const fileName = getFileName(type)

  // console.log('finame', fileName)

  if (!fileName) return

const response = await fetch(`/data/${fileName}`)

const data = await response.json()
return data.features
}

async function loadWholeJson() {

const response = await fetch('/data/export.geojson')

const data = await response.json()
return data.features
}

// const renderBuilding = ({ coordinates, buildingLevels }) => {
//   return (
//     <mesh>
//     </mesh>
//   ) 
// }

export async function generateCity () {
  const data = await loadWholeJson()
  // console.log(
  // 'data stuff', data
  // )

  return data
}
