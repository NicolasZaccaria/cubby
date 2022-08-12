import * as THREE from '../build/three.module.js';

export const Environment = {
    floor:    { 
        url: './models/Farm/floor.gltf', 
        position: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
        scaleFactor: 1.5, 
        obj: new THREE.Object3D(),
        name: 'floor'
    },

    windmill_structure:  { 
        url: './models/Farm/windmill_structure.gltf',
        position: new THREE.Vector3( 40.0, 0.0, 0.0), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.4, 
        obj: new THREE.Object3D(), 
        name: 'windmill_structure'
    },

    windmill_blades:    { 
        url: './models/Farm/windmill_blades.gltf', 
        position: new THREE.Vector3( -32.2, 36.5, -73.5), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(),
        name: 'windmill_blades'

    }, 

    tractor:    { 
        url: './models/Farm/tractor.gltf', 
        position: new THREE.Vector3( 3.0, 0.0, -19.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.4, 0.0), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(),
        name: 'tractor'
    },

	farm:    { 
        url: './models/Farm/farm.gltf', 
        position: new THREE.Vector3( -20.0, 1.0, 5.0), 
        rotation: new THREE.Vector3( 0.0, 0.3, 0.0), 
        scaleFactor: 1.4, 
        obj: new THREE.Object3D(),
        name: 'farm' 
    }, 

    farm_door:    { 
        url: './models/Farm/farm_door.gltf', 
        position: new THREE.Vector3( -35.0, 5.5, 80.0), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(),
        name: 'farm_door'  
    }, 

    clouds:    { 
        url: './models/Farm/clouds.gltf', 
        position: new THREE.Vector3( 0.0, 10.0, 0.0),
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(),
        name: 'clouds'   
    }, 

    haybale:    { 
        url: './models/Farm/haybale.gltf', 
        position: new THREE.Vector3( -30.0, 0.0, -20.0), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(),
        name: 'haybale'    
    }, 

    forest:    { 
        url: './models/Farm/forest.gltf', 
        position: new THREE.Vector3( 5.0, -1.1, 15.0), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(),
        name: 'forest'      
    }, 

    rocks:    { 
        url: './models/Farm/rocks.gltf', 
        position: new THREE.Vector3( -2.0, 0.0, 0.0), 
        rotation: new THREE.Vector3( 0.0, 0.2, 0.0), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(),
        name: 'rocks'      
    }, 

    wheatField:    { 
        url: './models/Farm/wheat_field.gltf', 
        position: new THREE.Vector3( 0.0, -4.0, 15.0), 
        rotation: new THREE.Vector3( -0.05, 0.4, 0.08), 
        scaleFactor: 1.0,
        obj: new THREE.Object3D(),
        name: 'wheatField'        
    }, 

    grass:    { 
        url: './models/Farm/grass.gltf', 
        position: new THREE.Vector3(-15.0, -0.3, -80.0 ), 
        rotation: new THREE.Vector3( 0.0, -0.2, 0.0), 
        scaleFactor: 1.2, 
        obj: new THREE.Object3D(),
        name: 'grass'
    }
    
};