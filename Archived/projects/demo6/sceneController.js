//o3djs.require('lgb.animation');

o3djs.require('lgb.progressBar');
o3djs.require('lgb.controller.ModeController');
o3djs.require('lgb.controller.ZoneController');

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
	
		this.modeController = new lgb.controller.ModeController();
		this.zoneController = new lgb.controller.ZoneController();
		
		this.progressbar = new lgb.progressBar.Progressbar();	
		this.progressbar.init("Loading Geometry");
		this.progressbar.show(); 
			
		lgb.core.init();
		lgb.loader.init(this);
		lgb.view.gui.setCanvasSize();
		
		var delegateProgress = jQuery.proxy(this.onProgress, this);
		var delegateComplete = jQuery.proxy(this.onSceneLoaded, this);
		
		var modelAry = [
			{file: 'ductwork.json',mode: 'HVAC', name: 'ductwork'},
			{file: 'rooftop.json',mode: 'HVAC', name: 'rooftop'},
			{file: 'envelope.json',mode: 'ENVELOPE', name: 'floor1'},
			{file: 'envelope.json',mode: 'ENVELOPE', name: 'floor2'},
			{file: 'envelope.json',mode: 'ENVELOPE', name: 'floor3'},
			{file: 'envelope.json',mode: 'ENVELOPE', name: 'floor4'},
			{file: 'envelope.json',mode: 'ENVELOPE', name: 'floor5'}
		];
						
		
		lgb.loader.loadModels(
								delegateComplete, 
								delegateProgress,
								modelAry);

	};
	
	 sceneController.onWindowResize = function(event) {
		lgb.view.gui.resizeNow();
	};
		
			
		
	sceneController.onSceneLoaded = function(event) {
	
		console.log('onSceneLoaded');
		
		window.setTimeout('sceneController.progressbar.hide();',200);
		
		//this.opacity = lgb.animation.createAlphaParam('Mesh_033');
		
//		var target = [13.0, 0.0, 19.0];

	
			

				
		//hemi.model.modelRoot.rotateX(4.715);
		hemi.model.modelRoot.rotateX(4.715);
		this.setModelRootToOrigin();	
		
		hemi.world.camera.enableControl();	// Enable camera mouse control


		this.modeController.init(lgb.loader.modelList);

		var floor1Model = lgb.loader.modelList['floor1'];
		this.zoneController.init(floor1Model);
		


		lgb.view.gui.particleSystemInit();

		this.setViewPoint();
		
	};
	
	sceneController.setViewPoint = function() {
		
		var floor1Model = lgb.loader.modelList['floor1'];
		var bb = floor1Model.getBoundingBox();
		
		var width = bb.maxExtent[0] - bb.minExtent[0]; //long side
		var depth = bb.maxExtent[1] - bb.minExtent[1]; //narrow side
		var height = bb.maxExtent[2] - bb.minExtent[2]; //floor height
		depth -= 6;
		
		var centerZ = depth /2;
		var centerY = height /2;
		var centerX = width /2;
		
		var target = [centerX, centerY, -centerZ];
		
//		hemi.shape.create({
//			shape: 'box',
//			color: [1,1,0,0.8],
//			h:  1, w: 1, d: 1 }).translate(target[0], target[1],target[2]);
				
		
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
		
		var floor1Model = lgb.loader.modelList['floor1'];
		var bb = floor1Model.getBoundingBox();
		
		var width = bb.maxExtent[0] - bb.minExtent[0]; //long side
		var depth = bb.maxExtent[1] - bb.minExtent[1]; //narrow side
		var height = bb.maxExtent[2] - bb.minExtent[2]; //floor height
		depth -= 6;
		
		var deltaX = (-1 * bb.minExtent[0]);
		var deltaY = (-1 * bb.minExtent[1]);
		var deltaZ = (-1 * bb.minExtent[2]);
		hemi.model.modelRoot.translate(deltaX, deltaY, deltaZ);
		
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
