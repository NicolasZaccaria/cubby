import * as THREE from '../build/three.module.js';

export var Robot = {

	body:    { 
        url: './models/Robot/body.stl', 
        position: new THREE.Vector3( 20.0, 10.5, -30.0 ), 
        rotation: new THREE.Vector3( -1.57, 0.0, -0.7 ), 
        scaleFactor: 0.5, 
        obj: new THREE.Object3D(), 
        color: 0x0d0d0d,
        name: 'body'
    },

	head:    { 
        url: './models/Robot/head.stl', 
        position: new THREE.Vector3( 0.0, 1.0, 17.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0xbfbfbf, 
        name: 'head'

    }, 

    eyeL:    { 
        url: './models/Robot/eyeL.stl', 
        position: new THREE.Vector3( 0.0, 1.1, 10.5 ), 
        rotation: new THREE.Vector3( 0.0, -1.57, 1.60 ), 
        scaleFactor: 0.015, 
        obj: new THREE.Object3D(), 
        color: 0x5a5aff, 
        emissiveColor: 0x00dfff,
        emissiveIntensity: 0.9,
        name: 'eyeL'

    }, 

    eyeR:    { 
        url: './models/Robot/eyeR.stl', 
        position: new THREE.Vector3( 0.0, -1.1, 10.5 ), 
        rotation: new THREE.Vector3( 0.0, -1.57, 2.13 ), 
        scaleFactor: 0.015, 
        obj: new THREE.Object3D(), 
        color: 0x5a5aff, 
        emissiveColor: 0x00dfff,
        emissiveIntensity: 0.9,
        name: 'eyeR'

    }, 

	shoulderJointL:  { 
        url: './models/Robot/shoulderJointL.stl', 
        position: new THREE.Vector3( 3.7, 4.0, 21.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.5 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0xbfbfbf, 
        name: 'shoulderJointL'

    },

	shoulderJointR:    { 
        url: './models/Robot/shoulderJointR.stl', 
        position: new THREE.Vector3( 3.7, -2.0, 21.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, -0.5 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0xbfbfbf,
        name: 'shoulderJointR'

    },

	shoulderL:  { 
        url: './models/Robot/shoulderL.stl', 
        position: new THREE.Vector3( 0.0, 5.0, 0.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0x993300, 
        name: 'shoulderL'

    },

	shoulderR:  { 
        url: './models/Robot/shoulderR.stl', 
        position: new THREE.Vector3( 0.0, -5.0, -0.5 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0x993300, 
        name: 'shoulderR'

    },

	armJointL:  { 
        url: './models/Robot/armJointL.stl', 
        position: new THREE.Vector3( -1.2, 3.9, -6.5 ), 
        rotation: new THREE.Vector3( 0.0, 1.0, 1.5 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0xbfbfbf, 
        name: 'armJointL'

    },

	armJointR: { 
        url: './models/Robot/armJointR.stl', 
        position: new THREE.Vector3( -1.2, -4.0, -6.0 ), 
        rotation: new THREE.Vector3( 0.0, 1.0, -1.5 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0xbfbfbf, 
        name: 'armJointR'

    },

	armL: { 
        url: './models/Robot/armL.stl', 
        position: new THREE.Vector3( 0.0, -10.5, 5.0 ), 
        rotation: new THREE.Vector3( -1.0, 0.0, 1.5 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0x993300, 
        name: 'armL'

    },

	armR: { 
        url: './models/Robot/armR.stl', 
        position: new THREE.Vector3( 0.0, 10.0, 5.0 ), 
        rotation: new THREE.Vector3( 2.5, 0.0, -1.5 ), 
        scaleFactor: 0.25, 
        obj: new THREE.Object3D(), 
        color: 0x993300,
        name: 'armR'

    },

	legL: { 
        url: './models/Robot/legL.stl', 
        position: new THREE.Vector3( 0.0, 3.5, 3.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0xbfbfbf,
        name: 'legL'

    },

	legR: { 
        url: './models/Robot/legR.stl', 
        position: new THREE.Vector3( 0.0, -2.5, 3.5 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0xbfbfbf, 
        name: 'legR'

    },

	footL: { 
        url: './models/Robot/footL.stl', 
        position: new THREE.Vector3( 0.0, 4.0, -16.5 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0x993300,
        name: 'footL'

    },

	footR: { 
        url: './models/Robot/footR.stl', 
        position: new THREE.Vector3( 0.0, -3.0, -16.95 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ), 
        scaleFactor: 1.0, 
        obj: new THREE.Object3D(), 
        color: 0x993300,
        name: 'footR'

    },

};

export var robotOpenCoord = {

	body:    { 
        position: new THREE.Vector3( 20.0, 10.5, -30.0 ), 
        rotation: new THREE.Vector3( -1.57, 0.0, 0.0 ), 
    },

	head:    { 
        position: new THREE.Vector3( 0.0, 1.0, 17.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ) 
    }, 

	shoulderJointL:  { 
        position: new THREE.Vector3( 3.7, 4.0, 21.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.25 )
    },

	shoulderJointR:    { 
        position: new THREE.Vector3( 3.7, -2.0, 21.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, -0.25 ) 
    },

	shoulderL:  { 
        position: new THREE.Vector3( 0.0, 5.0, 0.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ) 
    },

	shoulderR:  {  
        position: new THREE.Vector3( 0.0, -5.0, -0.5 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ) 
    },

	armJointL:  { 
        position: new THREE.Vector3( -1.2, 3.9, -6.5 ), 
        rotation: new THREE.Vector3( 0.0, 1.0, 1.5 )  
    },

	armJointR: {  
        position: new THREE.Vector3( -1.2, -4.0, -6.0 ), 
        rotation: new THREE.Vector3( 0.0, 1.0, -1.5 ) 
    },

	armL: { 
        position: new THREE.Vector3( 0.0, -10.5, 5.0 ), 
        rotation: new THREE.Vector3( -1.0, 0.0, 1.5 ) 
    },

	armR: { 
        position: new THREE.Vector3( 0.0, 10.0, 5.0 ), 
        rotation: new THREE.Vector3( 2.5, 0.0, -1.5 ) 
    },

	legL: {  
        position: new THREE.Vector3( 0.0, 3.5, 3.0 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ) 
    },

	legR: {  
        position: new THREE.Vector3( 0.0, -2.5, 3.5 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ) 
    },

	footL: {  
        position: new THREE.Vector3( 0.0, 4.0, -16.5 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ) 
    },

	footR: {  
        position: new THREE.Vector3( 0.0, -3.0, -16.95 ), 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.0 ) 
    },

};

export var robotCloseCoord = {

	body:    { 
        position: new THREE.Vector3( 20.0, -4.0, -30.0  ), 
    },

	head:    { 
        rotation: new THREE.Vector3( 0.0, 1.5, 0.0 ) 
    }, 

	shoulderJointL:  { 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.5 ) 
    },

	shoulderJointR:    { 
        rotation: new THREE.Vector3( 0.0, 0.0, -0.5 )  
    },

	shoulderL:  { 
        rotation: new THREE.Vector3( 0.0, 0.0, 1.05 ) 
    },

	shoulderR:  { 
        rotation: new THREE.Vector3( 0.0, 0.0, -1.05 )
    },

	armJointL:  { 
        position: new THREE.Vector3( -2.2, 3.9, -2.5 ), 
        rotation: new THREE.Vector3( 0.0, 2.0, 1.5 ) 
    },

	armJointR: { 
        position: new THREE.Vector3( -2.2, -4.0, -2.5 ), 
        rotation: new THREE.Vector3( 0.0, 2.0, -1.5 ) 
    },

	armL: { 
        position: new THREE.Vector3( 0.5, -7.0, 3.5 ), 
        rotation: new THREE.Vector3( -3.6, 0.0, 1.5 ) 
    },

	armR: { 
        position: new THREE.Vector3( 0.5, 7.0, 3.0 ), 
        rotation: new THREE.Vector3( 5.15, 0.06, -1.5 ) 
    },

	legL: { 
        position: new THREE.Vector3( 0.0, 3.5, 3.5 ), 
        rotation: new THREE.Vector3( 0.0, -2.4, 0.0 ) 
    },

	legR: { 
        position: new THREE.Vector3( 0.0, -2.5, 3.5 ), 
        rotation: new THREE.Vector3( 0.0, -2.4, 0.0 ) 
    },

	footL: { 
        position: new THREE.Vector3( 0.0, 4.0, -16.95 ), 
        rotation: new THREE.Vector3( 0.0, 2.4, 0.0 ) 
    },

	footR: {  
        position: new THREE.Vector3( 0.0, -3.0, -16.95 ), 
        rotation: new THREE.Vector3( 0.0, 2.4, 0.0 ) 
    },
    
};

export var robotWalkCoord = {

	shoulderJointL:  { 
        rotation: new THREE.Vector3( 0.0, -0.15, 0.0 )
    },

	shoulderJointR:    { 
        rotation: new THREE.Vector3( 0.0, 0.15, -0.0 ) 
    },

	legL: {  
        rotation: new THREE.Vector3( 0.0, -0.3, 0.0 ) 
    },

	legR: {  
        rotation: new THREE.Vector3( 0.0, 0.3, 0.0 ) 
    },

};


export var robotPicOBJ = {

    body:    {
        wheel: {
            initialRotation: new THREE.Vector3( -1.57, 0.0, -2.6 ), 
            pickingPosition: new THREE.Vector3( -24.0, 10.5, 115.0 ),
            pickingRotation: new THREE.Vector3( -1.1, -0.8, 0.0 ), 
        },
        propeller3: {
            initialRotation: new THREE.Vector3( -1.57, 0.0, -1.7 ), 
            pickingPosition: new THREE.Vector3( -159.0, 10.5, -124.0 ), 
            pickingRotation: new THREE.Vector3( -0.8, -0.15, 0.0 ), 
        }
    },
  
    head:    { 
          rotation: new THREE.Vector3( 0.0, 0.5, 0.0 ), 
    }, 
  
    shoulderJointL:  { 
          rotation: new THREE.Vector3( 0.0, 0.0, -1.4 ), 
    },
  
    shoulderJointR:    { 
          rotation: new THREE.Vector3( 0.0, 0.0, 1.4 ), 

    },
  
    shoulderL:  { 
          rotation: new THREE.Vector3( 0.0, 0.0, 1.57 ), 
    },
  
    shoulderR:  { 
          rotation: new THREE.Vector3( 0.0, 0.0, -1.57 ), 
    },
  
    armJointL:  { 
          rotation: new THREE.Vector3( 0.0, 0.5, 1.5 ), 
    },
  
    armJointR: { 
          rotation: new THREE.Vector3( 0.0, 0.5, -1.5 ), 
    },
  
    armL: { 
          position: new THREE.Vector3( 0.0, -14.5, 9.0 ), 
          rotation: new THREE.Vector3( -0.7, 0.0, 1.5 ), 
    },
  
    armR: { 
          position: new THREE.Vector3( 0.0, 14.0, 9.0 ), 
          rotation: new THREE.Vector3( 2.2, 0.0, -1.5 ), 
    },
  
    legL: { 
          rotation: new THREE.Vector3( 0.0, -1.35, 0.0 ), 
    },
  
    legR: { 
          rotation: new THREE.Vector3( 0.0, -1.35, 0.0 ), 
    },
  
    footL: { 
          rotation: new THREE.Vector3( 0.0, 0.6, 0.0 ), 
    },

  footR: { 
          rotation: new THREE.Vector3( 0.0, 0.6, 0.0 ), 
    },
  
  };

export var robotStartJump = {

	body:    { 
        rotation: new THREE.Vector3( -1.57, 0.8, 0.0 ) 
    },

	shoulderJointL:  { 
        rotation: new THREE.Vector3( 0.0, 0.0, 0.45 )
    },

	shoulderJointR:    { 
        rotation: new THREE.Vector3( 0.0, 0.0, -0.45 ) 
    },

	shoulderL:  { 
        rotation: new THREE.Vector3( 0.0, 0.5, 0.0 ) 
    },

	shoulderR:  {  
        rotation: new THREE.Vector3( 0.0, 0.5, 0.0 ) 
    },

	armJointL:  { 
        rotation: new THREE.Vector3( 0.0, 0.0, 1.5 )  
    },

	armJointR: {  
        rotation: new THREE.Vector3( 0.0, 0.0, -1.5 ) 
    },

	legL: {  
        rotation: new THREE.Vector3( 0.0, -1.7, 0.0 ) 
    },

	legR: {  
        rotation: new THREE.Vector3( 0.0, -1.7, 0.0 ) 
    },

	footL: {  
        rotation: new THREE.Vector3( 0.0, 1.0, 0.0 ) 
    },

	footR: {  
        rotation: new THREE.Vector3( 0.0, 1.0, 0.0 ) 
    },

};

export var robotJumping = {

    body:    { 
        position: new THREE.Vector3( 20.0, 35.5, -30.0 ), 
        rotation: new THREE.Vector3( -1.57, 0.4, 0.0 ), 
    },

    head:    {
        rotation: new THREE.Vector3( 0.0, 0.5, 0.0 ), 
    }, 

    shoulderJointL:  { 
        rotation: new THREE.Vector3( 0.5, 0.0, 0.5 ), 
    },

    shoulderJointR:    { 
        rotation: new THREE.Vector3( -0.5, 0.0, -0.5 ), 
    },

    armJointL:  { 
        rotation: new THREE.Vector3( 0.0, 0.2, 1.5 ), 
    },

    armJointR: { 
        rotation: new THREE.Vector3( 0.0, 0.2, -1.5 ), 
    },

    armL: { 
        position: new THREE.Vector3( 0.0, -12.5, 8.0 ), 
    },

    armR: { 
        position: new THREE.Vector3( 0.0, 12.0, 8.0 ), 
    },
};
