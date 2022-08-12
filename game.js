import * as THREE from './build/three.module.js';
import { TWEEN } from './libraries/jsm/animation/tween.module.min.js';
import { Robot } from './libraries/robot.js';
import { initGUI, nerdInfo } from './libraries/gui.js';
import { initAudio, listener } from './libraries/audioSystem.js';
import { setInteractiveActions, blink, doorInteraction } from './libraries/interactionSystem.js';
import { addHemisphereLight, addShadowedLight, initDayNightCycle } from './libraries/lightSystem.js';
import { checkCollision, checkFloorCollision, setCollidableMeshes } from './libraries/collisionSystem.js';
import { startWalkAnimation, standPosition, starShipAnimations, windmillAnimation, cloudsAnimation } from './libraries/animations.js';
import { manager, initEnvironment, traverseEnvinroment, traverseRobot, initRobot, initStarShip, traverseStarShip } from './libraries/modelsLoader.js';
import { controls, isRobotTransforming, isRobotOpen, isWalking, isPicking, endGame, initControls, setIsWalking,  insideStarship,  interactiveMeshes, enableDayNightCycle, setCollisionDetected } from './libraries/globals.js';

// VARIABLES

// Control system
var isHovering = false;
var intersectedPoint = new THREE.Vector3();
var mouse = new THREE.Vector2();
var INTERSECTED;
var mouseDownTime;

// Animation system
var groupA = new TWEEN.Group();
var dayCycle = new TWEEN.Group();

// Others
var camera, renderer, scene;

// Loader manager onLoad 
manager.onLoad = function ( ) {
	init();
	animate();
};


initAudio();
initRobot();
initStarShip();
initEnvironment();


// FUNCTIONS

function init() {

	// hide the loading bar
	const loadingElem = document.querySelector('#loading');
	loadingElem.style.display = 'none';
	
	// scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xB3DAF5 );
	scene.fog = new THREE.FogExp2( 0xffffff, 0.0007 );
	
	const canvas = document.querySelector('#canvas');

	// renderer
	renderer = new THREE.WebGLRenderer( { canvas, antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.body.appendChild( renderer.domElement );

	// camera
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 550, 200, 0 );
	camera.add( listener );

	initControls( camera, renderer );

	initGUI();

	traverseRobot(scene);
	traverseStarShip(scene);
	traverseEnvinroment(scene);
	setInteractiveActions(scene);
	setCollidableMeshes();

	// Lights
	addHemisphereLight( scene, 0x443333, 0x111122 )
	addShadowedLight(scene, 200, 200, 200, 0xffffff, 1.35 );
	initDayNightCycle(scene, dayCycle);

	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener('mousedown', onDocumentMouseDown, false);
	window.addEventListener('mouseup', onDocumentMouseUp, false);
	window.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'dblclick', onDoubleClick, false);

}

function animate() {
	requestAnimationFrame( animate );
	
	nerdInfo( document );

	controls.update();

	intersectHover();

	windmillAnimation();

	cloudsAnimation();

	doorInteraction();

	starShipAnimations( groupA, interactiveMeshes);

	groupA.update();

	TWEEN.update();

	if(enableDayNightCycle)
		dayCycle.update();

	if(!isHovering) blink();
	
	checkCollision( scene, groupA );
	checkFloorCollision( scene );

	if( endGame ) document.getElementById("endgame").style.display = "block";

	render();
}


function render() {
	
	renderer.render( scene, camera );

}


function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

// CONTROL FUNCTIONS

function onDocumentMouseMove( event ) {

	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function onDocumentMouseDown( event ) {
	mouseDownTime = Date.now();
}

function onDocumentMouseUp( event ) {
	var duration = Date.now() - mouseDownTime;
	if(duration < 200){
		var raycaster = new THREE.Raycaster();
		var mouse = new THREE.Vector2();
		
		event.preventDefault();

		mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
		raycaster.setFromCamera( mouse, camera );
		var meshes = [];
		for(const model of Object.values(interactiveMeshes)) 
			meshes.push(model);
		var intersects = raycaster.intersectObjects( meshes, true ); 
		if ( intersects.length > 0 ) {

			var intersected = intersects[0].object;

			while(intersected.callback == null)	intersected = intersected.parent;

			intersected.callback();

		}
	}
}

function onDoubleClick(){
	if(!isWalking && !isRobotTransforming && isRobotOpen && !isPicking && !insideStarship){
		
		const mouse = {
			x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
			y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
		}
		var raycaster = new THREE.Raycaster();
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( scene.children, true );

		if ( intersects.length > 0 ) {
			intersectedPoint = intersects[0].point;
			var zAngle = -Math.atan2( ( intersectedPoint.z - Robot.body.obj.position.z ), ( intersectedPoint.x - Robot.body.obj.position.x ) ) ;
			var distance = Robot.body.obj.position.distanceTo(intersectedPoint);
			setIsWalking( true );
			startWalkAnimation( groupA );
			new TWEEN.Tween(Robot.body.obj.rotation).to({z: zAngle }, 250)
								.onUpdate(function() { setCollisionDetected( true ); })
								.onComplete( function () { setCollisionDetected( false );})
								.start();
			new TWEEN.Tween(Robot.body.obj.position).delay(250).to({x: intersectedPoint.x, z: intersectedPoint.z }, 25*distance).onComplete(function ( ) { standPosition( groupA ); }).start();

		}
	}
	
}

function intersectHover(){
	var raycaster = new THREE.Raycaster();

	raycaster.setFromCamera( mouse, camera );
	var meshes = [];
	for(const model of Object.values(interactiveMeshes)) 
		meshes.push(model);
	var intersects = raycaster.intersectObjects( meshes, true );
	if ( intersects.length > 0 ) {
		isHovering = true;
		if ( INTERSECTED != intersects[ 0 ].object ) {

			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			INTERSECTED.material.emissive.setHex( 0xffd11a );
			INTERSECTED.material.emissiveIntensity = 0.8;

		}

	} else {
		
		if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

		INTERSECTED = null;
		isHovering = false;

	}
}
