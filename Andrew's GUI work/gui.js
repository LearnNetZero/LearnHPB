/* 
 * Kuda includes a library and editor for authoring interactive 3D content for the web.
 * Copyright (C) 2011 SRI International.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms
 * of the GNU General Public License as published by the Free Software Foundation; either 
 * version 2 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; 
 * if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, 
 * Boston, MA 02110-1301 USA.
 */

/**
 * This is a simple hello world, showing how to set up a simple world, 
 *		load a model, and set the camera to a viewpoint once the model
 *		has loaded.

 
function traceview() {
	var vp = hemi.view.createViewpoint("myvp", hemi.world.camera) 
}
function  rotateX() {
	hemi.model.modelRoot.rotateX(1.57);
}
function  rotateY() {
	hemi.model.modelRoot.rotateY(1);
}
function  rotateZ() {
	hemi.model.modelRoot.rotateZ(1);
}
 */
(function() {
	o3djs.require('o3djs.util');

	function init(clientElements) {
		/**
		 * It is possible to have multiple clients (i.e. multiple frames
		 * 		rendering 3d content) on one page that would have to be
		 * 		initialized. In this case, we only want to initialize the
		 *		first one.
		 */
		hemi.core.init(clientElements[0]);
		
		/**
		 * Set the background color to a light-bluish. The parameter is in
		 * 		the form [red,blue,green,alpha], with each value on a 
		 *		scale of 0-1.
		 */
		hemi.view.setBGColor([0.8, 0.8, 0.8, 1]);
		
		/**
		 * Set a prefix for the loader that will allow us to load assets as if
		 * the helloWorld.html file was in the root directory.
		 */
	//	hemi.loader.loadPath = '../../';
		
		createWorld();
	}

	function createWorld() {

		/**
		 * hemi.world is the default world created to manage all of our models,
		 *		cameras, effects, etc. When we set the model's file name, it
		 *		will begin loading that file.
		 */
		var house = new hemi.model.Model();				// Create a new Model
		house.setFileName('scene.json'); // Set the model file
		
		/**
		 * When we call the world's 'ready' function, it will wait for the model
		 *		to finish loading and then it will send out a Ready message.
		 *		Here we register a handler, setupScene(), to be run when the
		 *		message is sent.
		 */
		hemi.world.subscribe(hemi.msg.ready,
			function(msg) {
				setupScene();
			});
		
		hemi.world.ready();   // Indicate that we are ready to start our script
	}

	function setupScene() {
		var vp = new hemi.view.Viewpoint();		// Create a new Viewpoint
		vp.eye = [-56,61,39];					// Set viewpoint eye
		vp.target = [0,10,0];					// Set viewpoint target
	//	vp.fov = 52;
		/**
		 * Move the camera from it's default position (eye : [0,0,-1],
		 *		target : [0,0,0]} to the new viewpoint, and take 120
		 *		render cycles (~2 seconds) to do so.
		 */
		hemi.world.camera.moveToView(vp,40);
		//hemi.console.addToPage();
		//trace (hemi.version);
		console.log("kuda version: %s", hemi.version);
		
		hemi.world.camera.enableControl();	// Enable camera mouse control
		
		hemi.model.modelRoot.rotateX(4.72);
			
		//var c = hemi.world.getCitizens();
		
		onWorldSetup();
	//	var scenes = hemi.world.getScenes();
//		hemi.model.modelRoot.rotateX(90);
	//	hemi.model.modelRoot.rotateY(90);
		//hemi.model.modelRoot.rotateZ(-90);
	}

	jQuery(window).load(function() {
		o3djs.webgl.makeClients(init);
	});

	jQuery(window).unload(function() {
		if (hemi.core.client) {
			hemi.core.client.cleanup();
		}
	});
})();
