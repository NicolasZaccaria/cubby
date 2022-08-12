
import * as THREE from '../build/three.module.js';

export var listener = new THREE.AudioListener();
var audioLoader = new THREE.AudioLoader();

const soundDict = {
    'soundscape': { path: 'soundscape.mp3', soundObj: new THREE.Audio( listener ), volume: 0.03, loop: true, delay: 0.0 },
    'transforming': { path: 'transforming.wav', soundObj: new THREE.Audio( listener ), volume: 0.5, loop: false, delay: 0.0 },
    'openDoor': { path: 'door_open.mp3', soundObj: new THREE.Audio( listener ), volume: 0.4, loop: false, delay: 0.0 },
    'closeDoor': { path: 'door_close.mp3', soundObj: new THREE.Audio( listener ), volume: 0.15, loop: false, delay: 0.0 },
    'object_picked': { path: 'object_picked.wav', soundObj: new THREE.Audio( listener ), volume: 0.3, loop: false, delay: 0.0 },
    'launch_sequence': { path: 'launch_sequence.mp3', soundObj: new THREE.Audio( listener ), volume: 0.4, loop: false, delay: 0.0 },
    'flying_rocket': { path: 'flying_rocket.wav', soundObj: new THREE.Audio( listener ), volume: 0.7, loop: false, delay: 2.6 },
    'alarm': { path: 'alarm.wav', soundObj: new THREE.Audio( listener ), volume: 0.05, loop: false, delay: 0.0 }
}

export function initAudio(){
    for(const audio of Object.values(soundDict)){
        audioLoader.load('./sounds/' + audio.path, function( buffer ) {
            audio.soundObj.setBuffer( buffer );
            audio.soundObj.setLoop( audio.loop );
            audio.soundObj.setVolume( audio.volume );
            if(audio.path =='soundscape.mp3' )
                audio.soundObj.play();
        });
    }
}

export function playAudio(audio){
    soundDict[ audio ].soundObj.play( soundDict[ audio ].delay );
}

export function muteAudio(){
    for(const audio of Object.values(soundDict))
        audio.soundObj.setVolume( 0.0 );
}

export function activateAudio(){
    for(const audio of Object.values(soundDict))
        audio.soundObj.setVolume( audio.volume );
}