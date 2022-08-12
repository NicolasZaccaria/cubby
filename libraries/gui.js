import { GUI } from './jsm/libs/dat.gui.module.js';
import Stats from './jsm/libs/stats.module.js';
import { setShadows } from './lightSystem.js';
import { muteAudio, activateAudio } from './audioSystem.js';
import { pan, activeCollisionSystem, activeFloorCollisionSystem, enableDayNightCycle, enableShadows, 
		enableNerdParam, enableAudio, setEnableNerdParam, setActiveCollisionSystem, setShowCollisionSystem, 
		setActiveFloorCollisionSystem, setShowFloorCollisionSystem, setEnableDayNightCycle, setEnableAudio, setEnableCameraPan } from './globals.js';


// Stats
var stats = new Stats();

// GUI
const gui = new GUI();

var hintsBool = false;

var param = {
	nerdParam: enableNerdParam,
	collisionSyst: activeCollisionSystem,
	floorCollisionSyst: activeFloorCollisionSystem,
	daynight: enableDayNightCycle,
	shadows: enableShadows,
	audio: enableAudio,
	enablePan: pan,
	Help: showHelp,
	Commands: showCommands,
	Hints: showHints,
	Exit: exitGame
	};
    
    
export function initGUI(){
	gui.add(param, 'Help');
	gui.add(param, 'Commands');
	gui.add(param, 'Hints');
	gui.add(param, 'Exit');
	var debugMenu = gui.addFolder('Debug menu')
	var nerdParam = debugMenu.add(param, 'nerdParam' ).name( 'Nerd Parameters' ).listen();
	var collisionSyst = debugMenu.add(param, 'collisionSyst' ).name( 'Collision System' ).listen();
	var floorCollisionSyst = debugMenu.add(param, 'floorCollisionSyst' ).name( 'Floor Collision' ).listen();
	var daynight = debugMenu.add(param, 'daynight' ).name( 'Day Cycle' ).listen();
	var shadows = debugMenu.add(param, 'shadows' ).name( 'Enable Shadows' ).listen();
	var audio = debugMenu.add(param, 'audio' ).name( 'Enable audio' ).listen();
	var enablePan = debugMenu.add(param, 'enablePan' ).name( 'Enable Pan' ).listen();


	nerdParam.onChange( function() { setEnableNerdParam( !enableNerdParam ) });
	collisionSyst.onChange( function() { setActiveCollisionSystem( !activeCollisionSystem ) });
	floorCollisionSyst.onChange( function() { setActiveFloorCollisionSystem( !activeFloorCollisionSystem ) });
	daynight.onChange( function() { setEnableDayNightCycle ( !enableDayNightCycle ) });
	shadows.onChange( function() { setShadows( !enableShadows ); });
	audio.onChange( function() {  setEnableAudio( !enableAudio ); if(enableAudio) activateAudio(); else muteAudio(); });
	enablePan.onChange( function() { setEnableCameraPan( !pan ); });

	showHelp();
	
}

export function nerdInfo( document ) {
    if ( enableNerdParam ) { 
		setShowFloorCollisionSystem( true ); 
		setShowCollisionSystem( true ); 
		document.body.appendChild( stats.dom );
		stats.update(); 
	}
    else { 
		try{
			document.body.removeChild( stats.dom );
		}
		catch{}

		setShowFloorCollisionSystem( false );
		setShowCollisionSystem( false ); 
	}
}

function showHelp(){
	document.getElementById("help").style.display = "block";
}

function showCommands(){
	document.getElementById("commands").style.display = "block";
}
function showHints(){
	hintsBool = !hintsBool;
	if(hintsBool)
		document.getElementById("hints").style.display = "block";
	else
		document.getElementById("hints").style.display = "none";
}

function exitGame(){
	window.location.href = "index.html"
}