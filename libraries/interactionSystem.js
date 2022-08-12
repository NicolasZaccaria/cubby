
import { Robot, robotCloseCoord, robotOpenCoord } from './robot.js';
import { StarShip } from './starship.js';
import { Environment } from './environment.js';
import { pickOBJ, transform, transformInsideStarship, openDoor, closeDoor } from './animations.js';
import { playAudio } from './audioSystem.js';
import { isRobotTransforming, isRobotOpen, isWalking, isPicking, insideStarship, 
         interactiveMeshes, openDoorBool, closeDoorBool, StarShipCompleteBool, readyToLaunch,
         setOpenDoorBool, setCloseDoorBool, setInteractiveMeshes } from './globals.js';


var blinkingAux = 0.0;
var blinkingIncrement = 0.13;
var wheelDistance, propellerDistance, rocketDistance;
var motors;

function createInteractiveMeshes(){

    var intMeshes = {
        door: Environment.farm_door.obj,
        wheel: StarShip.wheel.obj,
        propeller3: StarShip.propeller3.obj,
        robot: Robot.body.obj
    };

    setInteractiveMeshes(intMeshes);

}


export function setInteractiveActions( scene ){

    createInteractiveMeshes();

	interactiveMeshes.door.callback = function() { 
													if(!isPicking){ 	
														if(!openDoorBool) playAudio( 'openDoor' );	
                                                        else playAudio( 'closeDoor' );	
                                                        setOpenDoorBool( !openDoorBool ); 
                                                        setCloseDoorBool( !closeDoorBool ); 
													}
                                                }
                                                
	interactiveMeshes.wheel.callback = function() { 
													var distance = Robot.body.obj.position.distanceTo(interactiveMeshes.wheel.position);
													if(!isWalking && isRobotOpen && !isRobotTransforming && !isPicking && distance < 25.0){
														pickOBJ( scene, 'wheel'); 
														delete interactiveMeshes.wheel;
                                                    }
                                                    
                                                }
                                                
	interactiveMeshes.propeller3.callback = function() { 
													var distance = Robot.body.obj.position.distanceTo(interactiveMeshes.propeller3.position);
													if(!isWalking && isRobotOpen && !isRobotTransforming && !isPicking && distance < 25.0){
														pickOBJ( scene, 'propeller3'); 
														delete interactiveMeshes.propeller3;													
                                                    }
                                                    
                                                }
                                                
	interactiveMeshes.robot.callback = function() {
													if(!isWalking && !isPicking && !insideStarship && !isRobotTransforming){
														playAudio('transforming');
														if(isRobotOpen) transform( robotCloseCoord, 1500 );
														else transform( robotOpenCoord, 1500);

													}
													if(insideStarship){
														playAudio('transforming');
														transformInsideStarship();
													}
													
												}
												
}


export function doorInteraction(){
    
    if(openDoorBool && !isPicking)
         openDoor();

    else if(closeDoorBool && Environment.farm_door.obj.rotation.y != 0.0 && !isPicking) 
        closeDoor(); 

}

export function blink(){
	wheelDistance = Robot.body.obj.position.distanceTo(StarShip.wheel.obj.position);
	propellerDistance = Robot.body.obj.position.distanceTo(StarShip.propeller3.obj.position);
	rocketDistance = Robot.body.obj.position.distanceTo(StarShip.rocket.obj.position);

	if(wheelDistance < 25 && !StarShipCompleteBool)
        setBlinkingValue( StarShip.wheel.obj, 0xcca300, 0.2 );

	else if(propellerDistance < 25 && !StarShipCompleteBool)
        setBlinkingValue( StarShip.propeller3.obj, 0xcca300, 0.2 );

	else if( rocketDistance < 45 && !insideStarship && StarShipCompleteBool){
        StarShip.wheel.obj.material.emissiveIntensity = 0.0;
		StarShip.propeller3.obj.material.emissiveIntensity = 0.0;
        setBlinkingValue( StarShip.rocket.obj, 0xcca300, 0.2 );
    }

	else if(insideStarship && !readyToLaunch){
        StarShip.rocket.obj.material.emissiveIntensity = 0.0;
        StarShip.wheel.obj.material.emissiveIntensity = 0.0;
		StarShip.propeller3.obj.material.emissiveIntensity = 0.0;
        setBlinkingValue( Robot.body.obj, 0xcca300, 0.2 );
    }

	else if( readyToLaunch ){
        Robot.body.obj.material.emissiveIntensity = 0.0;
        StarShip.wheel.obj.material.emissiveIntensity = 0.0;
		StarShip.propeller3.obj.material.emissiveIntensity = 0.0;
        motors = [ StarShip.motor1.obj, StarShip.motor2.obj, StarShip.motor3.obj, StarShip.motor4.obj ];
        setBlinkingValue(motors, 0xff0000, 0.8 );
	}

	else{
		blinkingAux = 0.0;
		StarShip.wheel.obj.material.emissiveIntensity = 0.0;
		StarShip.propeller3.obj.material.emissiveIntensity = 0.0;
        StarShip.rocket.obj.material.emissiveIntensity = 0.0;
        Robot.body.obj.material.emissiveIntensity = 0.0;
	}
}

function setBlinkingValue(obj, color, intensity){
    if(Array.isArray(obj)){
        for(const part of obj){
            if(Math.cos(blinkingAux) > 0){
                part.material.emissive.setHex( color );
                part.material.emissiveIntensity = intensity;
            }
            else 
            part.material.emissiveIntensity = 0.0;
        }
    }
    else{
        if(Math.cos(blinkingAux) > 0){
            obj.material.emissive.setHex( color );
             obj.material.emissiveIntensity = intensity;
         }
         else 
             obj.material.emissiveIntensity = 0.0;
    }
    blinkingAux += blinkingIncrement;
}
