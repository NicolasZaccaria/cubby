import * as THREE from '../build/three.module.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { STLLoader } from './jsm/loaders/STLLoader.js';
import { StarShip, StarShipComplete } from './starship.js';
import { Environment } from './environment.js';
import { Robot } from './robot.js';
import { setStarShipPropeller, setStarShipWheel} from './globals.js';

// LOADING MANAGER
export const manager = new THREE.LoadingManager();
// Loader manager error catcher
manager.onError = function ( ) {
	console.log('Loading error - Please try to refresh the page');
};

const stlLoader = new STLLoader( manager );
var material;

// ENVIRONMENT
export function initEnvironment(){
	const gltfLoader = new GLTFLoader( manager );
	for (const model of Object.values( Environment )) {
		gltfLoader.load( model.url, ( gltf ) => {
			gltf.scene.position.set( model.position.x, model.position.y, model.position.z );
			gltf.scene.rotation.set( model.rotation.x, model.rotation.y, model.rotation.z ); 
			gltf.scene.scale.set(model.scaleFactor, model.scaleFactor, model.scaleFactor);
			gltf.scene.name = model.name;
			gltf.scene.traverse( function( node ) {
				if ( node.isMesh ) { node.castShadow = true; node.receiveShadow = true;  }
			} );
			model.obj = gltf.scene;
		});
	}
}

export function traverseEnvinroment(scene){
	for (const model of Object.values(Environment)){
		if(model.name == 'floor') scene.add(model.obj);
		if(model.name == 'windmill_structure') Environment.floor.obj.add(model.obj);
		if(model.name == 'windmill_blades') Environment.windmill_structure.obj.add(model.obj);
		if(model.name == 'tractor') Environment.floor.obj.add(model.obj);
		if(model.name == 'farm') scene.add(model.obj);
		if(model.name == 'farm_door') Environment.farm.obj.add(model.obj);
		if(model.name == 'clouds') Environment.floor.obj.add(model.obj);
		if(model.name == 'haybale') Environment.floor.obj.add(model.obj);
		if(model.name == 'forest') Environment.floor.obj.add(model.obj);
		if(model.name == 'rocks') Environment.floor.obj.add(model.obj);
		if(model.name == 'wheatField') Environment.floor.obj.add(model.obj);
		if(model.name == 'grass') scene.add(model.obj);

	}
}
// END ENVIRONMENT


// ROBOT
export function initRobot(){
	for ( const model of Object.values( Robot )) {
	  	stlLoader.load(model.url, ( stl ) => {
			if(model.emissiveIntensity != undefined)
				material = new THREE.MeshPhongMaterial( { color: model.color, shininess: 200, emissive: model.emissiveColor, emissiveIntensity: model.emissiveIntensity} );
			else
				material = new THREE.MeshPhongMaterial( { color: model.color, shininess: 200 } );
			model.stl = new THREE.Mesh( stl, material );
			model.stl.position.set( model.position.x, model.position.y, model.position.z );
			model.stl.rotation.set( model.rotation.x, model.rotation.y, model.rotation.z ); 
			model.stl.scale.set(model.scaleFactor, model.scaleFactor, model.scaleFactor);
			model.stl.castShadow = true;
			model.stl.receiveShadow = true;
			model.stl.name = model.name;
			if ( model.stl.isMesh ) {
   
				const position = model.stl.geometry.attributes.position;
				const vector = new THREE.Vector3();
			 
				for ( let i = 0, l = position.count; i < l; i ++ ){
			 
				   vector.fromBufferAttribute( position, i );
				   vector.applyMatrix4( model.stl.matrixWorld );
				}
			  }
			model.obj = model.stl;
		});
	}
}

export function traverseRobot(scene){
	for (const model of Object.values(Robot)){
		if(model.name == 'body') scene.add(model.obj);
		if(model.name == 'head') Robot.body.obj.add(model.obj);
		if(model.name == 'eyeL') Robot.head.obj.add(model.obj);
		if(model.name == 'eyeR') Robot.head.obj.add(model.obj);
		if(model.name == 'shoulderJointL') Robot.body.obj.add(model.obj);
		if(model.name == 'shoulderJointR') Robot.body.obj.add(model.obj);
		if(model.name == 'shoulderL') Robot.shoulderJointL.obj.add(model.obj);
		if(model.name == 'shoulderR') Robot.shoulderJointR.obj.add(model.obj);
		if(model.name == 'armJointL') Robot.shoulderL.obj.add(model.obj);
		if(model.name == 'armJointR') Robot.shoulderR.obj.add(model.obj);
		if(model.name == 'armL') Robot.armJointL.obj.add(model.obj);
		if(model.name == 'armR') Robot.armJointR.obj.add(model.obj);
		if(model.name == 'legL') Robot.body.obj.add(model.obj);
		if(model.name == 'legR') Robot.body.obj.add(model.obj);
		if(model.name == 'footL') Robot.legL.obj.add(model.obj);
		if(model.name == 'footR') Robot.legR.obj.add(model.obj);
		
	}
}
// END ROBOT


// STARSHIP
export function initStarShip(){
	for ( const model of Object.values( StarShip )) {
	  	stlLoader.load(model.url, ( stl ) => {
			material = new THREE.MeshPhongMaterial( { color: model.color, shininess: 200 } );
			model.stl = new THREE.Mesh( stl, material );
			model.stl.position.set( model.position.x, model.position.y, model.position.z );
			model.stl.rotation.set( model.rotation.x, model.rotation.y, model.rotation.z ); 
			model.stl.scale.set(model.scaleFactor, model.scaleFactor, model.scaleFactor);
			model.stl.name = model.name;
			model.stl.castShadow = true;
			model.stl.receiveShadow = true;
			model.obj = model.stl;
		});
	}
}

export function traverseStarShip(scene){
	for (const model of Object.values(StarShip)){
		if(model.name == 'rocket') scene.add(model.obj);
		if(model.name == 'wheel'){ 
									scene.add(model.obj);
									var scaleFactor = StarShip.rocket.scaleFactor * model.scaleFactor;
									model.obj.scale.set(scaleFactor, scaleFactor, scaleFactor);
								}
		if(model.name == 'motor1') StarShip.rocket.obj.add(model.obj);
		if(model.name == 'motor2') StarShip.rocket.obj.add(model.obj);
		if(model.name == 'motor3') StarShip.rocket.obj.add(model.obj);
		if(model.name == 'motor4') StarShip.rocket.obj.add(model.obj);
		if(model.name == 'propeller1') StarShip.motor1.obj.add(model.obj);
		if(model.name == 'propeller2') StarShip.motor2.obj.add(model.obj);
		if(model.name == 'propeller3'){ 
									scene.add(model.obj);
									var scaleFactor = StarShip.rocket.scaleFactor * StarShip.motor3.scaleFactor * model.scaleFactor;
									model.obj.scale.set(scaleFactor, scaleFactor, scaleFactor);
								}
		if(model.name == 'propeller4') StarShip.motor4.obj.add(model.obj);
	}
}

export function repairStarship(StarShip, scene, objName){
	for (var i = scene.children.length - 1; i >= 0; i--) 
	if(scene.children[i].name == objName)
		scene.remove(scene.children[i]);
	StarShip[ objName ].obj.scale.set(StarShip[ objName ].scaleFactor, StarShip[ objName ].scaleFactor, StarShip[ objName ].scaleFactor);
	StarShip[ objName ].obj.position.x = StarShipComplete[ objName ].position.x;
	StarShip[ objName ].obj.position.y = StarShipComplete[ objName ].position.y;
	StarShip[ objName ].obj.position.z = StarShipComplete[ objName ].position.z;
	StarShip[ objName ].obj.rotation.x = StarShipComplete[ objName ].rotation.x;
	StarShip[ objName ].obj.rotation.y = StarShipComplete[ objName ].rotation.y;
	StarShip[ objName ].obj.rotation.z = StarShipComplete[ objName ].rotation.z;
	if(objName == 'wheel'){
		StarShip.rocket.obj.add(StarShip[ objName ].obj);
		setStarShipWheel( true );
	}
	else if(objName == 'propeller3'){
		StarShip.motor3.obj.add(StarShip[ objName ].obj);
		setStarShipPropeller( true );
	}
}
// END STARSHIP