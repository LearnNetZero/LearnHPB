/**
 * 
 */


o3djs.base.o3d = o3d;
o3djs.require('lgb.utils');
o3djs.require('lgb.loader');
o3djs.require('lgb.gui');
o3djs.require('lgb.animation');

var lgb = (function(lgb) {
	
		
	
	/**
	 * The version of LGB released
	 * @constant
	 */
	lgb.version = '0.11';
	
	/**
	 * @namespace A module for managing 3D models and their assets.
	 */
	lgb.core = lgb.core || {};
	
	
	lgb.core.init = function() {
		
		console.log("kuda version: " + hemi.version);
		console.log("lgb version: " + lgb.version);
		
		lgb.gui.init();
		lgb.loader.init();
		lgb.animation.init();
		lgb.utils.init();
	};
	
	
	/**
	 * @class A Loader to get all the 3d content and init the GUI
	 */
	lgb.core.Loader = function() {
		this.theModel = null;
		this.msgHandler = null;
		this.count = 0; // Counter to keep track of wall opacity
		this.dir = 1; // Whether wall is becoming more or less opaque
		this.subscriberWorldReady = null;
		this.subscriberCameraStopped = null;
		this.opacity = null;
		var that = this;
		
		this.makeClientsCallback = function(clientElements) {
			hemi.core.init(clientElements[0]);
			hemi.view.setBGColor([0.8, 0.8, 0.8, 1]);
			that.createWorld();
		}
		
	};
	
	
	lgb.core.Loader.prototype = {
			filePath : 'scene.json',

			
			createWorld: function() {
				this.theModel = new hemi.model.Model();	// Create a new Model
				
				this.subscriberWorldReady = hemi.world.subscribe(
						hemi.msg.ready,
						this,
						'setupScene'
					);
				
				this.theModel.setFileName(this.filePath); // Set the model file
				hemi.world.ready();   // Indicate that we are ready to start our script
			},
			
	
			setupScene: function(msg) {
				
				var result = hemi.world.camera.unsubscribe(this.subscriberWorldReady, hemi.msg.stop);
				
				var transformList = this.theModel.getTransforms('Mesh_033');
				var transform = transformList[0];
				
				var theMaterial = transform.shapes[0].elements[0].material;
				
				var drawList = theMaterial.getParam('o3d.drawList').value;
				var zdrawList = hemi.view.viewInfo.zOrderedDrawList;
				
				theMaterial.getParam('o3d.drawList').value = zdrawList;
				
				var theMaterialOpacity = hemi.fx.addOpacity(theMaterial);
				theMaterialOpacity.value = 1.0;
				
				/* Create a transform-level opacity paramater that will override the
				 * material-level opacity parameter. That way, we can make this wall
				 * fade without fading every object that uses the wall material.
				 */
				this.opacity = transform.createParam('opacity','ParamFloat');
				this.opacity.value = 1.0;
				
				/* On any keyDown, begin the fading. Reverse the direction each time */

					
				/* Fade the wall a little more on each frame, between 1 and 0.4 */
				hemi.view.addRenderListener(this);
				
				
				var vp = new hemi.view.Viewpoint();		// Create a new Viewpoint
				vp.eye = [-56,61,39];					// Set viewpoint eye
				vp.target = [0,10,0];					// Set viewpoint target


				//hemi.console.addToPage();
				console.log("kuda version: %s", hemi.version);
				
				hemi.world.camera.enableControl();	// Enable camera mouse control
				hemi.model.modelRoot.rotateX(4.72);
				
				
				this.subscriberCameraStopped = hemi.world.camera.subscribe(
						hemi.msg.stop,
						this,
						'onCameraMoved');
				
				hemi.world.camera.moveToView(vp,40);
			},
			
			onRender : function(msg) {
				if (this.count > 0) {
					this.opacity.value += this.dir*0.02;
					this.count--;
				}
			},
			
			onCameraMoved: function(msg) {
				var result = hemi.world.camera.unsubscribe(this.subscriberCameraStopped, hemi.msg.stop);
				onWorldSetup();
			},
			
			
			leftNavClick: function(buttonNumber) {
				switch(buttonNumber)
				{
					case 0:
						
						if (this.count == 0) {
							this.count = 40;
							this.dir = -this.dir;
						} 
						
					  break;
					case 1:
			
					  break;
					default:
			
					}
			}	
			

			
			
			
	};
	

	
	return lgb;
	
})(lgb || {});