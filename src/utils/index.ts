
import { Shape, ExtrudeGeometry, BufferAttribute, BufferGeometry } from 'three'
import {getDistance, getRhumbLineBearing} from 'geolib'

export function normalizeCoordinates(objectPosition, centerPosition) {
	// Get GPS distance
	let dis = getDistance(objectPosition, centerPosition);

	// Get bearing angle
	let bearing = getRhumbLineBearing(objectPosition, centerPosition);

	// Calculate X by centerPosi.x + distance * cos(rad)
	let x = centerPosition[0] + dis * Math.cos((bearing * Math.PI) / 180);

	// Calculate Y by centerPosi.y + distance * sin(rad)
	let y = centerPosition[1] + dis * Math.sin((bearing * Math.PI) / 180);

	// Reverse X (it work)
	return [-x / 100, y / 100];
}

function calcPosFromLatLonRad(lat,lon,radius){
  
  var phi   = (90-lat)*(Math.PI/180);
  var theta = (lon+180)*(Math.PI/180);

  x = -(radius * Math.sin(phi)*Math.cos(theta));
  z = (radius * Math.sin(phi)*Math.sin(theta));
  y = (radius * Math.cos(phi));

  return [x,y,z];

}

const CITY_CENTER_COORDS = [23.78712, 61.49911] // [61.49911, 23.78712]

export function generateShape(polygon) {
  if (!polygon) return
  const shape = new Shape()

  Array.isArray(polygon) && polygon?.forEach((coordinates, index) => {
    const coords = normalizeCoordinates(coordinates, CITY_CENTER_COORDS)

    if (index === 0) {
      shape.moveTo(coords[0], coords[1])
    } else {
      shape.lineTo(coords[0], coords[1])
    }
  })

  return shape
}

export const generateGeometry = (shape, height) => {
  const geometry = new ExtrudeGeometry(shape, {
    curveSegments: 1,
    depth: 0.05 * height,
    bevelEnabled: false
  })

 //  geometry.rotateX(Math.PI / 2)
 //  geometry.rotateZ(Math.PI)

  return geometry
}

export const generateBuilding = (coordinates, height = 1) => {
  let buildingShape

  coordinates.forEach((points, index) => {
    if (index === 0) {
      buildingShape = generateShape(points)
    } else {
      buildingShape.holes.push(generateShape(points))
    }
  })

  return generateGeometry(buildingShape, height)
}

export const generateBuildingShape = (coordinates, height = 1) => {
  let buildingShape

  coordinates.forEach((points, index) => {
    if (index === 0) {
      buildingShape = generateShape(points)
    } else {
      buildingShape.holes.push(generateShape(points))
    }
  })

  return {shape: buildingShape, height}
}

function generateWater(coordinates, height = 0.2) {
	//each geojson "object" has multiple arrays of coordinates.
	//the first array is the main (outer) building shape
	//the second & third & .. are the "holes" in the building
	let waterShape, waterGeometry; //main building
	// let buildingHoles = []; //holes to punch out shape

	coordinates.forEach((points, index) => {
		//for each building do:
		if (index === 0) {
			//create main building shape
			waterShape = generateShape(points);
		} else {
			//create shape of holes in building
			waterShape.holes.push(generateShape(points));
			// buildingHoles.push(generateShape(points));
		}
	});

	waterGeometry = generateGeometry(waterShape, height)
  
	return waterGeometry;
}

function generateRoad(coordinates, height = 0) {
	// console.log(1);
	let points = [];
  let vertices

	//check if multi-point road, not a point.
	if (coordinates.length > 1) {
		coordinates.forEach((coordinates) => {
      // console.log('coords', coordinates)
			let coords = normalizeCoordinates(coordinates, CITY_CENTER_COORDS);
			// points.push(new THREE.Vector3(coords[0], height, coords[1])); //old way
			points.push(coords[0], coords[1], height)
		});

    vertices = new Float32Array(points)

		// NEW WAY
		let geometry = new BufferGeometry()
		geometry.setAttribute(
			"position",
			new BufferAttribute(vertices, 3),
		)

    // geometry.rotateX(Math.PI / 2)
    // geometry.rotateZ(Math.PI)

		//OLD WAY
		// let geometry = new THREE.BufferGeometry().setFromPoints(points);
		//geometry.rotateZ(Math.PI);
		return {geometry, points}
	} else {
		return {}
	}
}

function generateGreen(coordinates, height = 0.5) {
	//each geojson "object" has multiple arrays of coordinates.
	//the first array is the main (outer) building shape
	//the second & third & .. are the "holes" in the building
	let greenShape, greenGeometry; //main building
	// let buildingHoles = []; //holes to punch out shape

	coordinates.forEach((points, index) => {
		//for each building do:
		if (index === 0) {
			//create main building shape
			greenShape = generateShape(points)
		} else {
			//create shape of holes in building
			greenShape.holes.push(generateShape(points))
			// buildingHoles.push(generateShape(points))
		}
	});

	greenGeometry = generateGeometry(greenShape, height)
	return greenGeometry
}

export const generateObjects = (data) => {

  const buildingsArray = []

  const buildingsShapes = []

  const waterArray = []
  const waterShapes = []

  const roadGeometryArray = []
  const roadPointsArray = []

  const greenArray = []

  const railwaysArray = []
  const railwaysPoints = []

  // console.log('data length', data.length)

  data.forEach(item => {
   //  console.log('item??', item)
    let coordinates = item?.geometry?.coordinates;
    let properties = item?.properties
    const geometryType = item?.geometry?.type
  // console.log('geom type', geometryType)
  
    if (properties.building) {
      //if data is a building property (if it's a building)
      let building_levels = item?.properties?.height / 3 || item?.properties["building:levels"] || 1; //if building:levels property exists use it, otherwise use 1

      // if (properties.name === 'Näsinneula')
      buildingsArray.push(generateBuilding(coordinates, building_levels));

      const buildingShape = generateBuildingShape(coordinates, building_levels)
      buildingsShapes.push(buildingShape)
    } else if (properties.natural) {

        const waterArrayItem = generateWater(coordinates)
        waterArray.push(waterArrayItem)
    } else if (properties.highway && geometryType === "LineString") {
      const {geometry, points} = generateRoad(coordinates)
      if (geometry) {
        roadGeometryArray.push(geometry)
      }
     
      roadPointsArray.push(points)
    } else if (properties.leisure) {
      const greenArrayItem = generateGreen(coordinates)
      greenArray.push(greenArrayItem)
    } else if (properties.railway) {
      const {geometry, points} = generateRoad(coordinates)
      railwaysArray.push(geometry)
      railwaysPoints.push(points)
    }
  })

  return {
    buildings: buildingsArray,
    buildingsShapes,
    water: waterArray,
    roads: roadGeometryArray,
    roadPoints: roadPointsArray,
    greenArray,
    railwaysArray,
    railwaysPoints
  }
}
