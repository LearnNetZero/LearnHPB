/**
 * 
 */
//o3djs.base.o3d = o3d;
//o3djs.require('o3djs.webgl');


var lgb = (function(lgb) {
	

	/**
	 * @namespace A module for managing 3D models and their assets.
	 */
	lgb.loader = lgb.loader || {};
	
	lgb.loader.init = function() {
		
		jQuery(window).unload(function() {
			//alert('Handler for .unload() called.');
			if (hemi.core.client) {
				hemi.core.client.cleanup();
			}
		});
			
		
		this.theModel = null;
		this.msgHandler = null;
		this.count = 0; // Counter to keep track of wall opacity
		this.dir = 1; // Whether wall is becoming more or less opaque
		this.subscriberWorldReady = null;
		this.subscriberCameraStopped = null;
		this.opacity = null;
		this.filePath = 'scene.json';
		var that = this;
		
		this.init2 = function(clientElements) {
			hemi.core.init(clientElements[0]);
			that.init3();
		}
		

	}
	
	lgb.loader.loadScene = function(callbackFunction){
		this.callbackFunction = callbackFunction;
		o3djs.webgl.makeClients(this.init2);
	}
	

	lgb.loader.init3 = function() {
		
		hemi.view.setBGColor([0.8, 0.8, 0.8, 1]);
			
		this.theModel = new hemi.model.Model();	// Create a new Model
		

		this.subscriberWorldReady = hemi.world.subscribe(
				hemi.msg.ready,
				this,
				'init4'
			);
		
		this.theModel.setFileName(this.filePath); // Set the model file
		hemi.world.ready();   // Indicate that we are ready to start our script
	}
	
	
	lgb.loader.init4 = function(){
		
		console.log('lgb.loader.init4');
		
		var result = hemi.world.camera.unsubscribe(this.subscriberWorldReady, hemi.msg.stop);
		this.callbackFunction.call();
	}
	
	
			

	
	return lgb;
	
})(lgb || {});
