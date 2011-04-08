/**
 * This sample is based off of the Hello World sample, except the entire World
 * was created using the Kuda World Editor and saved as a JSON file in the Kuda
 * format called "Octane". Instead of scripting, the file is loaded and the
 * World is created from it.
 */

	o3djs.require('o3djs.util');
	o3djs.require('hemi.loader');
	var particleSystem;
	var vavSystem;
	var boxSystem;
	var showBoxes = false;	
	var theProgressObject;
	
	function init(clientElements) {
		hemi.core.init(clientElements[0]);
		hemi.view.setBGColor([0.7, 0.8, 1, 1]);
	}



		var box1 = [[20,1610,-10],[-60, 1600,-70]];
		var box3 = [[-20,1510,-10],[-40,1430,-60]];
		var box4 = [[100,1510,-10],[120,1430,-60]];
		//var box5 = [[200,420,-10],[220,440,10]];
		var box6 = [[410,1430,-20],[430,1435,-40]];
		var box7 = [[420,1200,-20],[440,1220,-40]];
		var box8 = [[420,1365,-20],[430,1375,-40]];
		var box9 = [[285,1345,-20],[295,1355,-40]];
		var box10= [[200,1100,-50],[400,1110,50]];
		var box11 = [[460,1355,-20],[470,1365,-40]];
		var box12 = [[800,1355,-20],[810,1365,-40]];
		var box13 = [[810,1355,400],[820,1365,410]];
		var box13 = [[810,1355,430],[820,1365,440]];
		var box14 = [[810,1335,510],[820,1325,520]];
		var box15 = [[730,1100,510],[890,1110,410]];
		
		var boxFan = [[305,1480,-10],[310,1490,-40]];
		var boxBump = [[285,1450,5],[290,1460,15]];
		var vavBox = [[385,1365,-20],[395,1355,-40]];

		/* The colors these arrows will be as they move through:
		 * Start out yellow and transparent, then turn red and opaque,
		 * quickly turn to blue, then fade to black and transparent.
		 */
		var colorKey1 = {key: 0, value: [1,1,0,1]};
		var colorKey2 = {key: 0.45, value: [1,0,0,1]};
		var colorKey3 = {key: 0.55, value: [0,0,1,1]};
		var colorKey4 = {key: 1, value: [0,0,0,1]};
		
		/* The scale of the arrows as they move through:
		 * Start out infinitesimal, then grow to a decent size,
		 * kind of stretched out, then shrink away again.
		 */
		var scaleKey1 = {key: 0, value: [8,8,8]};
		var scaleKey2 = {key: 1, value: [8,8,8]};
		var scaleKey3 = {key: 1, value: [8,8,8]};
        
        	
	function setupParticleSystems1() {

	 // console.time('-setupParticleSystems1');


		 
		var particleSystemConfig = {
			rate : 20,
			life : 10,
			boundingBoxes : [box1, box3, box4,boxBump, boxFan, box6, box7],
			shape : hemi.curve.shapeType.SPHERE,
			colorKeys : [colorKey1, colorKey2, colorKey3, colorKey4],
			scaleKeys : [scaleKey1, scaleKey2, scaleKey3]
		};
		
		 particleSystem = new hemi.curve.ParticleSystem (
			hemi.core.client.root, 
			particleSystemConfig);
			
	//  console.timeEnd('-setupParticleSystems1');
	 	theProgressObject.onProgress2(33);
		window.setTimeout('setupParticleSystems2()',200);
			
	}
	
	function setupParticleSystems2() {
		
	//	console.time('-setupParticleSystems2');
		
		var vavConfig = {
			rate : 20,
			life : 10,
			boundingBoxes : [box1, box3, box4,boxBump, boxFan, box6, box8, vavBox, box9, box10],
			shape : hemi.curve.shapeType.ARROW,
			colorKeys : [colorKey1, colorKey2, colorKey3, colorKey4],
			scaleKeys : [scaleKey1, scaleKey2, scaleKey3]
		};
		
		
		vavSystem = new hemi.curve.ParticleSystem(
		hemi.core.client.root, vavConfig);
		theProgressObject.onProgress2(66);
		window.setTimeout('setupParticleSystems3()',200);
		
		//console.timeEnd('-setupParticleSystems2');

	}
	
	
	
	function setupParticleSystems3() {
		
		//console.time('-setupParticleSystems3');
		
		var boxConfig = {
			rate : 20,
			life : 10,
			boundingBoxes : [box1, box3, box4,boxBump, boxFan, box6, box8, box11, box12, box13,box14, box15],
			shape : hemi.curve.shapeType.ARROW,
			colorKeys : [colorKey1, colorKey2, colorKey3, colorKey4],
			scaleKeys : [scaleKey1, scaleKey2, scaleKey3]
		}

			
			boxSystem = new hemi.curve.ParticleSystem(
			hemi.core.client.root, boxConfig);
			
			theProgressObject.onProgress2(100);
		//	console.timeEnd('-setupParticleSystems3');

	}
	
	
	    function onHemiComplete(arg) {
       // hemi.loader.timeStampMaker('loadOctane onHemiComplete');
        
       // hemi.loader.timeStampMaker('setupParticleSystems1');
       // setupParticleSystems1();
        
        
       // hemi.loader.timeStampMaker('onHemiComplete done');
        //loadWorldPost();
    }
    

    

	function loadWorld(progressObject, onComplete) {
 		theProgressObject = progressObject;
		// All we have to do is pass the file name to the Hemi loader.
		this.msgHandler = hemi.world.subscribe (
		  hemi.msg.progress,
		  progressObject,
		  'onProgress'
        );
		
		hemi.loader.loadOctane('assets/test_particles.json', onHemiComplete);
	}
	
	
	
	function particleSystemStart() {
			particleSystem.start();
			if (vavSystem) {
			   vavSystem.stop();
			}
			if (boxSystem) {
			   boxSystem.stop();
			}

	}
	function vavSystemStart() {
			particleSystem.stop();
			vavSystem.start();
			boxSystem.stop();
	}
	function boxSystemStart() {
			particleSystem.stop();
			vavSystem.stop();
			boxSystem.start();
	}
	
	function stopAllSystems() {
			particleSystem.stop();
			
			if (vavSystem) {
			   vavSystem.stop();
			}
			if (boxSystem) {
			   boxSystem.stop();
			}

	}
	
	function toggleBoxes() {
		if (showBoxes) {
			particleSystem.hideBoxes();
			vavSystem.hideBoxes();
			boxSystem.hideBoxes();
			showBoxes = false;
		} else {
			particleSystem.showBoxes();
			vavSystem.showBoxes();
			boxSystem.showBoxes();
			showBoxes = true;
		}
	}
	
	
	function resetView() {
		
		var vps = hemi.world.getViewpoints();
			
		hemi.world.camera.moveToView(vps[1]);
	}
	

	
	jQuery(window).load(function() {
		o3djs.util.makeClients(init,'LargeGeometry');
	});

	jQuery(window).unload(function() {
		if (hemi.core.client) {
			hemi.core.client.cleanup();
		}
	});
