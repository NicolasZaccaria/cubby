import * as THREE from '../build/three.module.js';

export const StarShip = {

	rocket:    { 
		url: './models/StarShip/Rocket.stl', 
		position: new THREE.Vector3( 85.0, 3.0, -130.0 ), 
		rotation: new THREE.Vector3( 0.0, -1.0, 3.1), 
		scaleFactor: 0.1, 
		obj: new THREE.Object3D(), 
		color: 0x0d0d0d,
		name: 'rocket'
	},

	wheel:    { 
		url: './models/StarShip/Wheel.stl', 
		position: new THREE.Vector3( -40.0, 2.0, 122.0 ), 
		rotation: new THREE.Vector3( 1.0, -0.6, 0.0), 
		scaleFactor: 1.0,
		obj: new THREE.Object3D(), 
		color: 0x993300,
		name: 'wheel'
	},

	motor1:    { 
		url: './models/StarShip/Motor.stl', 
		position: new THREE.Vector3( 152.0, 5.0, 65.0 ), 
		rotation: new THREE.Vector3( 0.0, -1.57, 0.0), 
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0x993300,
		name: 'motor1' 
	},

	motor2:    { 
		url: './models/StarShip/Motor.stl', 
		position: new THREE.Vector3( 152.0, 5.0, -65.0 ), 
		rotation: new THREE.Vector3( 0.0, 1.57, 0.0),
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0x993300,
		name: 'motor2' 
	},

	motor3:    { 
		url: './models/StarShip/Motor.stl', 
		position: new THREE.Vector3( -113.0, 5.0, 86.0 ), 
		rotation: new THREE.Vector3( 0.0, -1.57, 0.0), 
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0x993300,
		name: 'motor3' 
	},

	motor4:    { 
		url: './models/StarShip/Motor.stl', 
		position: new THREE.Vector3( -113.0, 5.0, -86.0 ), 
		rotation: new THREE.Vector3( 0.0, 1.57, 0.0), 
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0x993300,
		name: 'motor4' 
	},

	propeller1:    { 
		url: './models/StarShip/Propeller.stl', 
		position: new THREE.Vector3( 65.0, 0.0, 0.0 ), 
		rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0xbfbfbf,
		name: 'propeller1' 
	},

	propeller2:    { 
		url: './models/StarShip/Propeller.stl', 
		position: new THREE.Vector3( 63.0, 0.0, 2.0 ), 
		rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0xbfbfbf,
		name: 'propeller2' 
	},

	propeller3:    { 
		url: './models/StarShip/Propeller.stl', 
		position: new THREE.Vector3( -162.0, 0.5, -110.0 ), 
		rotation: new THREE.Vector3( 1.0, 0.0, 0.0), 
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0xbfbfbf,
		name: 'propeller3' 
	},

	propeller4:    { 
		url: './models/StarShip/Propeller.stl', 
		position: new THREE.Vector3( 65.0, 0.0, 0.0 ), 
		rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
		scaleFactor: 1.0, 
		obj: new THREE.Object3D(), 
		color: 0xbfbfbf,
		name: 'propeller4'
	},
};

// Original position of starship
export const StarShipComplete = {

	rocket:    { 
		position: new THREE.Vector3( 85.0, 8.0, -130.0 ), 
		rotation: new THREE.Vector3( 0.0, -1.0, 3.1), 
	},

	wheel:    { 
		position: new THREE.Vector3( -175.0, 4.0, 0.0 ), 
		rotation: new THREE.Vector3( 0.0, -1.57, 0.0), 
	},

	motor1:    { 
		position: new THREE.Vector3( 152.0, 5.0, 65.0 ), 
		rotation: new THREE.Vector3( 0.0, -1.57, 0.0), 
	},

	motor2:    { 
		position: new THREE.Vector3( 152.0, 5.0, -65.0 ), 
		rotation: new THREE.Vector3( 0.0, 1.57, 0.0), 
	},

	motor3:    { 
		position: new THREE.Vector3( -113.0, 5.0, 86.0 ), 
		rotation: new THREE.Vector3( 0.0, -1.57, 0.0), 
	},

	motor4:    { 
		position: new THREE.Vector3( -113.0, 5.0, -86.0 ), 
		rotation: new THREE.Vector3( 0.0, 1.57, 0.0), 
	},

	propeller1:    { 
		position: new THREE.Vector3( 65.0, 0.0, 0.0 ), 
		rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
	},

	propeller2:    { 
		position: new THREE.Vector3( 63.0, 0.0, 2.0 ), 
		rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
	},

	propeller3:    { 
		position: new THREE.Vector3( 65.0, 0.0, 0.0 ), 
		rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
	},

	propeller4:    { 
		position: new THREE.Vector3( 65.0, 0.0, 0.0 ), 
		rotation: new THREE.Vector3( 0.0, 0.0, 0.0), 
	},

};