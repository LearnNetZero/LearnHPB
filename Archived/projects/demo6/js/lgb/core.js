/**
 * 
 */


o3djs.base.o3d = o3d;
o3djs.require('lgb.utils');
o3djs.require('lgb.loader');
o3djs.require('lgb.view.gui');
o3djs.require('lgb.animation');

var lgb = (function(lgb) {
	
		
	
	/**
	 * The version of LGB released
	 * @constant
	 */
	lgb.version = '0.12';
	
	/**
	 * @namespace A module for managing 3D models and their assets.
	 */
	lgb.core = lgb.core || {};
	
	
	lgb.core.init = function() {
		
		console.log("kuda version: " + hemi.version);
		console.log("lgb version: " + lgb.version);
		
		lgb.view.gui.init();

		lgb.animation.init();
		lgb.utils.init();
		
		hemi.model.Model.prototype.getBoundingBox = function() {

			var bb = new o3d.BoundingBox();
			
			for (var i = this.shapes.length - 1; i >= 0; i--){
				
				bb = bb.add( this.shapes[i].elements[0].boundingBox);
			};
			
			return bb;
			
		};
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
		};
		
	};
	
	
	
			

			


	
	return lgb;
	
})(lgb || {});