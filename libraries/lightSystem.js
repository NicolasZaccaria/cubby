import * as THREE from '../build/three.module.js';
import { TWEEN } from './jsm/animation/tween.module.min.js';
import { enableDayNightCycle, setEnableShadows, enableShadows } from './globals.js';

var directionalLight = new THREE.DirectionalLight();
var hemisphereLight = new THREE.HemisphereLight();

export function addHemisphereLight( scene, color, groundColor){

    hemisphereLight = new THREE.HemisphereLight( color, groundColor );
	scene.add( hemisphereLight );

}

export function addShadowedLight( scene, x, y, z, color, intensity ) {

	directionalLight = new THREE.DirectionalLight( color, intensity );
	directionalLight.position.set( x, y, z );
	scene.add( directionalLight );

	directionalLight.castShadow = true;

	var d = 220;
	directionalLight.shadow.camera.left = - d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = - d;

	directionalLight.shadow.camera.near = 1;
	directionalLight.shadow.camera.far = 1000;

	directionalLight.shadow.mapSize.width = 1024;
	directionalLight.shadow.mapSize.height = 1024;

	directionalLight.shadow.bias = - 0.002;
    
}

export function initDayNightCycle(scene, dayCycle){
    if(enableDayNightCycle)
        new TWEEN.Tween({r: 255, g: 255, b: 255}, dayCycle).to({r: 0, g: 85, b: 165}, 30000).onUpdate(function(obj){ 
            directionalLight.color.r = obj.r/255;
            directionalLight.color.g = obj.g/255;
            directionalLight.color.b = obj.b/255;
            }).repeat(Infinity).yoyo(true).repeatDelay(40000).delay(40000).start();

        new TWEEN.Tween(directionalLight.position, dayCycle).to({x: 200, y: 200, z: -200}, 30000).repeat(Infinity).yoyo(true).repeatDelay(40000).delay(40000).start();


        new TWEEN.Tween({r: 68, g: 51 , b: 51}, dayCycle).to({r: 0, g: 0, b: 0}, 30000).onUpdate(function(obj){ 
            hemisphereLight.color.r = obj.r/255;
            hemisphereLight.color.g = obj.g/255;
            hemisphereLight.color.b = obj.b/255;
            }).repeat(Infinity).yoyo(true).repeatDelay(40000).delay(40000).start();
        
        new TWEEN.Tween({r: 16, g: 17, b: 34 }, dayCycle).to({r: 0, g: 0, b: 0}, 30000).onUpdate(function(obj){ 
            hemisphereLight.groundColor.r = obj.r/255;
            hemisphereLight.groundColor.g = obj.g/255;
            hemisphereLight.groundColor.b = obj.b/255;
            }).repeat(Infinity).yoyo(true).repeatDelay(40000).delay(40000).start();	
            
        new TWEEN.Tween({r: 179, g: 218, b: 245 }, dayCycle).to({r: 25, g: 40, b: 65}, 30000).onUpdate(function(obj){ 
            scene.background.r = obj.r/255;
            scene.background.g = obj.g/255;
            scene.background.b = obj.b/255;
            }).repeat(Infinity).yoyo(true).repeatDelay(40000).delay(40000).start();	
    }

export function setShadows( value ){
    setEnableShadows( value );
    directionalLight.castShadow = enableShadows;
}