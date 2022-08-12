import { MapControls } from './jsm/controls/OrbitControls.js';

// Variables
// Controls
export var controls;
export var pan = false;

// Animations
export var isRobotTransforming = false;
export var isRobotOpen = true;
export var isWalking = false;
export var isPicking = false;
export var readyToLaunch = false;
export var endGame = false;
export var StarShipCompleteBool = false;
export var starShipWheel = false;
export var starShipPropeller = false;
export var insideStarship = false;
export var openDoorBool = false;
export var closeDoorBool = true;
export var enableDayNightCycle = true;

// Collision
export var activeCollisionSystem = true;
export var activeFloorCollisionSystem = true;
export var collisionDetected = false;
export var showCollisionSystem = false;
export var showFloorCollisionSystem = false;

// Interaction
export var interactiveMeshes;

// Light
export var enableShadows = true;

// GUI
export var enableNerdParam = false;

// Audio
export var enableAudio = true;



// Functions
export function initControls( camera, renderer ){
    controls = new MapControls( camera, renderer.domElement );
	controls.enableDamping = true;
	controls.dampingFactor = 0.05;
	controls.screenSpacePanning = false;
	controls.minDistance = 225;
	controls.maxDistance = 700;
	controls.maxPolarAngle = Math.PI / 2;
	controls.enablePan = pan;
}
export function setEnableCameraPan(value){
    controls.enablePan = value;
    pan = value;
}
export function setIsRobotTransforming(value){
    isRobotTransforming = value;
}
export function invertIsRobotOpen(){
    isRobotOpen = !isRobotOpen;
}
export function setIsWalking(value){
    isWalking = value;
}
export function setIsPicking(value){
    isPicking = value;
}
export function setReadyToLaunch(value){
    readyToLaunch = value;
}
export function setEndGame(value){
    endGame = value;
}
export function setStarShipCompleteBool(value){
    StarShipCompleteBool = value;
}
export function setStarShipWheel(value){
    starShipWheel = value;
}
export function setStarShipPropeller(value){
    starShipPropeller = value;
}
export function setInsideStarship(value){
    insideStarship = value;
}
export function setOpenDoorBool( value ){
    openDoorBool = value;
}
export function setCloseDoorBool( value ){
    closeDoorBool = value;
}
export function setInteractiveMeshes(dictionary){
    interactiveMeshes = dictionary;
}
export function setEnableDayNightCycle( value ){
    enableDayNightCycle = value;
}
export function setEnableShadows( value ){
    enableShadows = value;
}
export function setShowCollisionSystem( value ){
    showCollisionSystem = value;
}
export function setActiveCollisionSystem( value ){
    activeCollisionSystem = value;
}
export function setShowFloorCollisionSystem( value ){
    showFloorCollisionSystem = value;
}
export function setActiveFloorCollisionSystem( value ){
    activeFloorCollisionSystem = value;
}
export function setCollisionDetected( value ){
    collisionDetected = value;
}
export function setEnableNerdParam( value ){
    enableNerdParam = value;
}
export function setEnableAudio( value ){
    enableAudio = value;
}
