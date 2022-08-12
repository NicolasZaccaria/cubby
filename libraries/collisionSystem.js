
import * as THREE from '../build/three.module.js';
import { Robot } from './robot.js';
import { StarShip } from './starship.js';
import { Environment } from './environment.js';
import { avoidCollision } from './animations.js';
import { showCollisionSystem, activeCollisionSystem, showFloorCollisionSystem, activeFloorCollisionSystem, collisionDetected, isRobotTransforming, isRobotOpen, insideStarship, isPicking } from './globals.js';

// Objects collision
var collidable = [];
var supportAngle = 0.0;
var intersectionAngle = 1.0;
var collisionArrowHelper = new THREE.ArrowHelper();

// Floor collision
var floorCollidable = [];
var floorCollisionArrowHelper = new THREE.ArrowHelper();

var origin, direction, ray, collisionResults, floorPoint, floorDistance;

export function setCollidableMeshes(){
	collidable.push(Environment.farm.obj);
	collidable.push(Environment.haybale.obj);
	collidable.push(Environment.wheatField.obj);
	collidable.push(Environment.forest.obj);
	collidable.push(Environment.rocks.obj);
	collidable.push(Environment.tractor.obj);
	collidable.push(Environment.windmill_structure.obj);
	collidable.push(StarShip.rocket.obj);

	floorCollidable.push(Environment.floor.obj);
	floorCollidable.push(StarShip.rocket.obj);

}


export function checkCollision( scene, groupA ){
	origin = Robot.body.obj.position.clone();
	direction = new THREE.Vector3();

	direction.x = Math.sin(intersectionAngle + Robot.body.obj.rotation.z);
	direction.y = -1.0;
	direction.z =  Math.cos(intersectionAngle + Robot.body.obj.rotation.z);
	direction.normalize();

	intersectionAngle += Math.sin(supportAngle)/3;
	supportAngle += 0.5;

	if(showCollisionSystem){
		scene.remove( collisionArrowHelper );
		collisionArrowHelper = new THREE.ArrowHelper( direction, origin, 20, 0x000000, 2, 2 );
		scene.add( collisionArrowHelper );
	}

	else 
		scene.remove( collisionArrowHelper );


	ray = new THREE.Raycaster( origin, direction );
	collisionResults = ray.intersectObjects( collidable, true );
	
	if ( collisionResults.length > 0 ){
		collisionArrowHelper.setColor(0xFF0000);
        if(activeCollisionSystem && !isRobotTransforming && isRobotOpen && !insideStarship && !isPicking && !collisionDetected)
            avoidCollision( groupA );
	}
}

export function checkFloorCollision( scene ){
	origin = Robot.body.obj.position.clone();
	direction = new THREE.Vector3();

	direction.x = 0.0;
	direction.y = -1.0;
	direction.z = 0.0;
	direction.normalize();

	if(showFloorCollisionSystem){
		scene.remove( floorCollisionArrowHelper );
		floorCollisionArrowHelper = new THREE.ArrowHelper( direction, origin, 12, 0x000000, 2, 2 );
		scene.add( floorCollisionArrowHelper );
	}

	else 		
		scene.remove( floorCollisionArrowHelper );


	ray = new THREE.Raycaster( origin, direction );
	collisionResults = ray.intersectObjects( floorCollidable, true );

	if ( collisionResults.length > 0 ){
		floorPoint = Robot.body.position.clone();
		floorPoint.y = collisionResults[0].point.y
		floorDistance = Robot.body.position.distanceTo(floorPoint);
		if(isRobotOpen && !isRobotTransforming){
			if(floorDistance < 13.6){
				floorCollisionArrowHelper.setColor(0xFF0000);
				if(activeFloorCollisionSystem)
					Robot.body.obj.position.y = ( 10.5 + 13.6 - floorDistance );
			}
			else if(floorDistance > 13.8){
				floorCollisionArrowHelper.setColor(0x00f0ff);
				if(activeFloorCollisionSystem)
					Robot.body.obj.position.y = (  10.5 + 13.8 - floorDistance);
			}
		}
	}
}