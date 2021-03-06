//o3djs.require('lgb.animation');

o3djs.require('lgb.progressBar');
o3djs.require('lgb.controller.HvacDamperController');

/**
 * @namespace MVC controller for the project
 */
var sceneController = (function(sceneController) {


	/**
	 * @namespace MVC controller for the project
	 */
	sceneController = sceneController || {};
	sceneController._NAME = 'sceneController';
	
	sceneController.init = function(controller) {
		
		jQuery(document).ready($.proxy(this.onDocumentReady, this));	
		jQuery(window).resize($.proxy(this.onWindowResize, this));
			
		sceneController.progressbar = null; // the progress bar that we display
	};
	
	sceneController.onDocumentReady = function(event) {
	
		this.hvacDamperController = new lgb.controller.HvacDamperController(this);
		this.hvacDamperController.init();
		
		var modelAry = this.hvacDamperController.getModels();
		
		this.progressbar = new lgb.progressBar.Progressbar();	
		this.progressbar.init("Loading Geometry");
		this.progressbar.show(); 
			
		lgb.core.init();
		lgb.loader.init(this);
		lgb.view.gui.setCanvasSize();
		
		var delegateProgress = jQuery.proxy(this.onProgress, this);
		var delegateComplete = jQuery.proxy(this.onSceneLoaded, this);
		
		lgb.loader.loadModels(  delegateComplete, 
								delegateProgress,
								modelAry );

	};
	
	 sceneController.onWindowResize = function(event) {
		lgb.view.gui.resizeNow();
	};
		
			
		
	sceneController.onSceneLoaded = function(event) {
	
		console.log('onSceneLoaded');
		
		sceneController.hvacDamperController.model3dLoaded();
		window.setTimeout('sceneController.hvacDamperController.resetAnimation()',400);
		
		window.setTimeout('sceneController.progressbar.hide();',100);
		
		var model = lgb.loader.modelList['damper'];
		this.centerModelToOrigin(model);
		
		hemi.world.camera.enableControl();	// Enable camera mouse control

		var result = hemi.world.camera.unsubscribe(this.subscriberCameraStopped, hemi.msg.stop);
		lgb.view.gui.showHud();
	
		lgb.utils.preload('icon_exterior_envelope_over.png,icon_lighting_over.png,icon_general_over.png,icon_exterior_envelope_over.png');
	
		
	};
	
	sceneController.parseXml = function(xml) {
		lgb.view.gui.particleSystemInit(xml);
	};
	
	
	
	sceneController.setViewPoint = function() {
		
		var floor1Model = lgb.loader.modelList['floor1'];
	
		var target = floor1Model.getCenter();
		target[2] -= 3;
		target[2] = -1 * target[2];
		
		var vp = new hemi.view.Viewpoint();		// Create a new Viewpoint
		vp.eye = [-56,61,39];					// Set viewpoint eye
		vp.target = target;					// Set viewpoint target
		
		this.subscriberCameraStopped = hemi.world.camera.subscribe(
				hemi.msg.stop,
				this,
				'onCameraMoved');
				
		hemi.world.camera.moveToView(vp,40);
		
	};
	
	
	sceneController.setModelRootToOrigin = function() {
		
		var model = lgb.loader.modelList['damper'];
		var min = model.getBoundingBox().minExtent;
		hemi.model.modelRoot.translate(-min[0],-min[1],-min[2]);
		
	};
	sceneController.centerModelToOrigin = function(model) {
		
		
		var bb = model.getBoundingBox();
		
		hemi.model.modelRoot.translate(-bb.minExtent[0],-bb.minExtent[1],-bb.minExtent[2]);
		//var bb2 = model.getBoundingBox();
		
		//debugger;
		//var box 
		var centerPoint = model.getCenter();
		hemi.model.modelRoot.translate(0,-0.7,-0.7);
		
	};
	
	
	sceneController.onCameraMoved = function(event) {
		
		console.log('onCameraMoved');
		var result = hemi.world.camera.unsubscribe(this.subscriberCameraStopped, hemi.msg.stop);
		lgb.view.gui.showHud();
	
		lgb.utils.preload('icon_exterior_envelope_over.png,icon_lighting_over.png,icon_general_over.png,icon_exterior_envelope_over.png');
	};
	
	sceneController.onProgress = function(percent) {
		this.progressbar.onProgress(percent);
	};
		
		
		
	
	return sceneController;
	
})(sceneController || {});



sceneController.init();
