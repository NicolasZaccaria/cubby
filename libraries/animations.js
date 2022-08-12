import * as THREE from '../build/three.module.js';
import { TWEEN } from './jsm/animation/tween.module.min.js';
import { Robot, robotOpenCoord, robotCloseCoord, robotWalkCoord, robotPicOBJ, robotStartJump, robotJumping } from './robot.js';
import { StarShip, StarShipComplete } from './starship.js';
import { Environment } from './environment.js';
import { repairStarship } from './modelsLoader.js';
import { playAudio } from './audioSystem.js';
import {setIsRobotTransforming, invertIsRobotOpen, setIsWalking, setIsPicking, setReadyToLaunch, setEndGame, 
		setStarShipCompleteBool, setInsideStarship, setOpenDoorBool,
		setCloseDoorBool, isWalking, isRobotOpen, isRobotTransforming, isPicking, StarShipCompleteBool, starShipPropeller,
		 starShipWheel, readyToLaunch, interactiveMeshes} from './globals.js';


var cloudsAngle = 1.0;


// Robot transforming (Open -> Close || Close -> Open)
export function transform( end, time){
	TWEEN.removeAll();
    setIsRobotTransforming( true );
    	for (const model of Object.keys(end)){
			if(Robot[ model ].obj.name == 'body') {
				if(isRobotOpen)
					var endY = Robot.body.obj.position.y - 14.0;
				else 
					var endY = Robot.body.obj.position.y + 14.0;
				new TWEEN.Tween(Robot[ model ].obj.position).to({y: endY }, time)
				.onComplete(function() { 
					setIsRobotTransforming( false ); 
					invertIsRobotOpen();
				}).start();
			}
			else 
				for(const prop of Object.keys(end[ model ]))
					new TWEEN.Tween(Robot[ model ].obj[ prop ]).to(end[ model ][ prop ], time).start();
    }

}

// Going into walking mode
export function startWalkAnimation( groupA){
    var time = 300;
	new TWEEN.Tween(Robot.shoulderJointL.obj.rotation, groupA).to(robotWalkCoord.shoulderJointR.rotation, time).start();
	new TWEEN.Tween(Robot.shoulderJointR.obj.rotation, groupA).to(robotWalkCoord.shoulderJointL.rotation, time).start();
	new TWEEN.Tween(Robot.legL.obj.rotation, groupA).to(robotWalkCoord.legR.rotation, time).start();
	new TWEEN.Tween(Robot.legR.obj.rotation, groupA).to(robotWalkCoord.legL.rotation, time).onComplete(function ( ) { walk( groupA, time); }).start();
}

// Robot walking
export function walk(groupA, time){
	for (const model of Object.keys(robotWalkCoord)){
		for(const prop of Object.keys(robotWalkCoord[ model ])){
			var tween = new TWEEN.Tween(Robot[ model ].obj[ prop ], groupA).to(robotWalkCoord[ model ][ prop ], time).repeat(Infinity).yoyo(true).start();
		}
	}
}

// Robot standing
export function standPosition( groupA, rotateBody){
	
	setIsWalking( false );
	groupA.removeAll();

	for (const model of Object.keys(robotOpenCoord)){
			if(Robot[ model ].obj.name == 'body'){
				if(rotateBody) 
					new TWEEN.Tween(Robot[ model ].obj.rotation).to(robotOpenCoord[ model ].rotation, 150).start();
				new TWEEN.Tween(Robot[ model ].obj.position).to({y: robotOpenCoord[ model ].position.y }, 150).start();
			}
			else
				for(const prop of Object.keys(robotOpenCoord[ model ]))
					new TWEEN.Tween(Robot[ model ].obj[ prop ]).to(robotOpenCoord[ model ][ prop ], 150).start();	
		
	}

}

// Robot avoid collision
export function avoidCollision( groupA ){
	TWEEN.removeAll();
	setIsWalking( true );
	groupA.removeAll();
	new TWEEN.Tween(Robot.body.obj.rotation, groupA).to({z: Robot.body.obj.rotation.z + 0.7 }, 100).onComplete(function () { standPosition(groupA); }).start();
	
}

// Robot getting ready to jump into the starship
export function getIntoStarship( groupA ){

	for (const model of Object.keys(robotStartJump)){
			if(Robot[ model ].obj.name == 'body')
				new TWEEN.Tween(Robot[ model ].obj.rotation).to(robotStartJump[ model ].rotation, 350).onComplete(function () { jump( groupA ); }).start();
			else 	
				for(const prop of Object.keys(robotStartJump[ model ]))
					new TWEEN.Tween(Robot[ model ].obj[ prop ]).to(robotStartJump[ model ][ prop ], 350).start();
	}

}

// Robot jumping
export function jump( groupA ){
	TWEEN.removeAll();
	setIsRobotTransforming( true );
	for (const model of Object.keys(robotJumping)){
		if(Robot[ model ].obj.name == 'body'){
			new TWEEN.Tween(Robot[ model ].obj.rotation).to(robotJumping[ model ].rotation, 350).start();
			new TWEEN.Tween(Robot[ model ].obj.position).to({x: 83.0, y: robotJumping[ model ].position.y, z: -132.0 }, 350).onComplete(function() {
				setIsRobotTransforming( false );
				delete interactiveMeshes.starship;
				standPosition(groupA, true);}).start();
		}
		else 	
			for(const prop of Object.keys(robotJumping[ model ]))
				new TWEEN.Tween(Robot[ model ].obj[ prop ]).to(robotJumping[ model ][ prop ], 350).start();

	}

}

// Robot trasforming into the starship ( Open -> Close ) without closing the head
export function transformInsideStarship( StarShip ){
	TWEEN.removeAll();
	setIsRobotTransforming( true );
	delete interactiveMeshes.robot;
	for (const model of Object.keys(robotCloseCoord)){
		if(Robot[ model ].obj.name == 'body'){
			new TWEEN.Tween(Robot[ model ].obj.rotation).to({z: -1.0 }, 500).start();
			new TWEEN.Tween(Robot[ model ].obj.position).to({y: 4.0 }, 2000).onComplete(function() { 
				setReadyToLaunch( true ); 
				launch();
				}).start();
		}
		else if(Robot[ model ].obj.name != 'head')
			for(const prop of Object.keys(robotCloseCoord[ model ]))
				new TWEEN.Tween(Robot[ model ].obj[ prop ]).to(robotCloseCoord[ model ][ prop ], 2000).start();
	}

}

// Robot picking an object
export function pickOBJ( scene, objName){
	setIsPicking( true );
	for (const model of Object.keys(robotPicOBJ)){
		
		if(Robot[ model ].obj.name == 'body') {
			new TWEEN.Tween(Robot[ model ].obj.rotation).to(robotPicOBJ.body[ objName ].initialRotation, 2000).start();
			new TWEEN.Tween(Robot[ model ].obj.position).to(robotPicOBJ.body[ objName ].pickingPosition, 2000).start();
			new TWEEN.Tween(Robot[ model ].obj.rotation).to({x: robotPicOBJ.body[ objName ].pickingRotation.x, y: robotPicOBJ.body[ objName ].pickingRotation.y}, 2000).delay(2000).repeat(1).repeatDelay(1000).yoyo(true).onComplete(function() { 
				//disableControls( controls );
				setIsPicking( false );
				repairStarship( StarShip, scene, objName);
				playAudio('object_picked');
			}).start();
		}
		else 
			for(const prop of Object.keys(robotPicOBJ[ model ]))
				new TWEEN.Tween(Robot[ model ].obj[ prop ]).to(robotPicOBJ[ model ][ prop ], 2000).delay(2000).repeat(1).repeatDelay(1000).yoyo(true).start();
	}

}

// Starship taking off
export function launch( ){
	playAudio('alarm');
	Robot.eyeL.obj.material.color.setHex( 0xd21111 );
	Robot.eyeR.obj.material.color.setHex( 0xd21111 );
	Robot.eyeL.obj.material.emissive.setHex( 0xea1313 );
	Robot.eyeR.obj.material.emissive.setHex( 0xea1313 );

	var starshipFinal = new THREE.Vector3(750, 750, 750);
	
	new TWEEN.Tween(Robot.body.obj.position).to(starshipFinal, 4000).delay(8000).onComplete(function(){setEndGame( true );}).start();
	new TWEEN.Tween(Robot.body.obj.rotation).to({x: -1.9, y: -0.2}, 2000).delay(2000)
	.onComplete(function(){
		playAudio('launch_sequence');
        playAudio('flying_rocket');})
        .start();
	new TWEEN.Tween(StarShip.rocket.obj.position).to(starshipFinal, 4000).delay(8000).start();
	new TWEEN.Tween(StarShip.rocket.obj.rotation).to({z: 3.57}, 2000).delay(2000).start();

}

export function starShipAnimations( groupA, interactiveMeshes ) {
	if( !StarShipCompleteBool ){ 
		if( starShipPropeller ) { StarShip.propeller3.obj.rotation.z += 0.1; }
		if( starShipWheel ) {
			StarShip.propeller1.obj.rotation.z += 0.1;
			StarShip.propeller2.obj.rotation.z += 0.1;
			StarShip.propeller4.obj.rotation.z += 0.1;
			StarShip.wheel.obj.rotation.z += 0.1;
		}
		if (starShipPropeller && starShipWheel) { 
				setStarShipCompleteBool( true ); 
				interactiveMeshes.starship =  StarShip.rocket.obj; 		
				interactiveMeshes.starship.callback = function() { 
					var distance = Robot.body.obj.position.distanceTo(interactiveMeshes.starship.position);
					if(!isWalking && isRobotOpen && !isRobotTransforming && !isPicking && distance < 45.0){
						setInsideStarship( true );
						getIntoStarship( groupA );
					}
				}
	 	}
	} 
	if( StarShipCompleteBool && !readyToLaunch) {
		StarShip.propeller1.obj.rotation.z += 0.1;
		StarShip.propeller2.obj.rotation.z += 0.1;
		StarShip.propeller3.obj.rotation.z += 0.1;
		StarShip.propeller4.obj.rotation.z += 0.1;
		StarShip.wheel.obj.rotation.z += 0.1;
		if(StarShip.rocket.obj.position.y < StarShipComplete.rocket.position.y)
		StarShip.rocket.obj.position.y += 0.035;
	}
	if( StarShipCompleteBool && readyToLaunch) {
		StarShip.propeller1.obj.rotation.z += 0.4;
		StarShip.propeller2.obj.rotation.z += 0.4;
		StarShip.propeller3.obj.rotation.z += 0.4;
		StarShip.propeller4.obj.rotation.z += 0.4;
		StarShip.wheel.obj.rotation.z += 0.4;
	}
	if(StarShip.propeller1.obj.rotation.z >= 6.28){
		StarShip.propeller1.obj.rotation.z = 0.0;
		StarShip.propeller2.obj.rotation.z = 0.0;
		StarShip.propeller3.obj.rotation.z = 0.0;
		StarShip.propeller4.obj.rotation.z = 0.0;
		StarShip.wheel.obj.rotation.z = 0.0;
	}
}


export function openDoor(){
	if(Environment.farm_door.obj.rotation.y > -2.5)
		Environment.farm_door.obj.rotation.y -= 0.1;
	else
		setOpenDoorBool( true );
}

export function closeDoor(){
	if(Environment.farm_door.obj.rotation.y < 0.0)
		Environment.farm_door.obj.rotation.y += 0.2;
	else
		setCloseDoorBool( true );
}


export function windmillAnimation(){

    if(Environment.windmill_blades.obj.rotation.x >= 6.28)
        Environment.windmill_blades.obj.rotation.x = 0.0;

    else
        Environment.windmill_blades.obj.rotation.x += 0.01;

}

export function cloudsAnimation(){

	Environment.clouds.obj.position.z = 3*Math.cos(cloudsAngle);
	Environment.clouds.obj.position.x = Math.sin(cloudsAngle);

	if(cloudsAngle > 6.28)
		cloudsAngle = 0.0;

	else
		cloudsAngle += 0.015;

}