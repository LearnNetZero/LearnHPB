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
			{file: 'envelope.json',mode: 'ENVELOPE', name: 'floor1'}
		];
						
		lgb.loader.loadModels(  delegateComplete, 
								delegateProgress,
								modelAry );

	};
	
	 sceneController.onWindowResize = function(event) {
		lgb.view.gui.resizeNow();
	};
		
			
		
	sceneController.onSceneLoaded = function(event) {
	
		console.log('onSceneLoaded');
		
		window.setTimeout('sceneController.progressbar.hide();',200);
		
		hemi.model.modelRoot.rotateX(4.715);
		this.setModelRootToOrigin();	
		
		hemi.world.camera.enableControl();	// Enable camera mouse control


		this.modeController.init(lgb.loader.modelList);

		var floor1Model = lgb.loader.modelList['floor1'];
		this.zoneController.init(floor1Model);
		
		
		var delegate = $.proxy(this.parseXml, this);

		  $.ajax({
		    type: "GET",
		    url: "particleSystems.xml",
		    dataType: "xml",
		    success: delegate
		  });


		
	};
	
	sceneController.parseXml = function(xml) {
		lgb.view.gui.particleSystemInit(xml);
		
		this.setViewPoint();
	};
	
	
	
	sceneController.setViewPoint = function() {
		
		var floor1Model = lgb.loader.modelList['floor1'];
	
		var target = floor1Model.getCenterPoint();
		//target[2] = -1 * target[2];
		//target[2] = target[2] -3;

		
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
		var min = floor1Model.getBoundingBox().minExtent;
		hemi.model.modelRoot.translate(-min[0],-min[1],-min[2]);
		
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
