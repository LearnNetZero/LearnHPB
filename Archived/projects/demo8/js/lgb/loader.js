/**
 * 
 */
//o3djs.base.o3d = o3d;
//o3djs.require('o3djs.webgl');

o3djs.require('lgb.o3dpatches');
//o3djs.require('hext.sharedModel.modelManager');


var lgb = (function(lgb) {
	

	/**
	 * @namespace A module for managing 3D models and their assets.
	 */
	lgb.loader = lgb.loader || {};
	
	
	lgb.loader.init = function(controller) {
		
		jQuery(window).unload(function() {
			//alert('Handler for .unload() called.');
			if (hemi.core.client) {
				hemi.core.client.cleanup();
			}
		});
			
		this.controller = controller;
		this.theModel = null;
		this.msgHandler = null;
		this.count = 0; // Counter to keep track of wall opacity
		this.dir = 1; // Whether wall is becoming more or less opaque
		this.subscriberWorldReady = null;
		this.subscriberCameraStopped = null;
		this.opacity = null;
		this.fileList = new Array();  
		this.callbackComplete = null;
		this.callbackProgress = null;
		this.assetsPath = '3d_assets/';
	};
	
		
		
	lgb.loader.loadScene = function(callbackComplete, callbackProgress){
		this.loadModels(callbackComplete, callbackProgress, ['scene.json']);
	};
	
	lgb.loader.loadModels = function(callbackComplete, callbackProgress, fileList){
		this.fileList = fileList;
		
		this.callbackComplete = callbackComplete;
		this.callbackProgress = callbackProgress;
		
		var delegate = jQuery.proxy( this.onMakeClientsComplete, this );
		o3djs.webgl.makeClients(delegate);
	};
	
	
	
	lgb.loader.onMakeClientsComplete = function(clientElements) {
		hemi.core.init(clientElements[0]);
		this.init3();
	};


	lgb.loader.init3 = function() {
		
		hemi.view.setBGColor([0.7, 0.8, 1, 1]);
		this.modelList = {};
		
		this.subscriberWorldReady = hemi.world.subscribe(
				hemi.msg.ready,
				this,
				'init4'
			);
			
		//TODO:(raj dye) get rid of this patch when o3d gets fixed
		var delegate = jQuery.proxy( this.onProgress2, this );
		o3djs.io.loadTextFileProgressCallback = delegate;
	
		this.subscriberOnLoad = hemi.world.subscribe (
		  hemi.msg.progress,
		  this,
		  'onProgress'
		);

		//loop through all the filenames and set them up to load asynchronously
		var len = this.fileList.length;
		
		for (var i = 0; i < len; i++) {
			
			var fileObj = this.fileList[i];
			var newModel = new hemi.model.Model();
			var fullPath = this.assetsPath + fileObj.file;

			newModel.LGBmode = fileObj.mode;
			newModel.setFileName(fullPath);
			newModel.name = fileObj.name;
			
			this.modelList[fileObj.name] = newModel;
		};

		hemi.world.ready();   // Indicate that we are ready to start our script

	};
	
	
	lgb.loader.onLoadModelFinish = function(){
		console.log('lgb.loader.onLoadModelFinish');
		var result = hemi.world.unsubscribe(this.subscriberOnFinish, hemi.msg.stop);
	};
	
	
	lgb.loader.init4 = function(){
		console.log('lgb.loader.init4');

			
		var result = hemi.world.camera.unsubscribe(this.subscriberWorldReady, hemi.msg.stop);
		this.callbackComplete.call(this.controller);
	};
	
	
	lgb.loader.onProgress = function(event){
		
		//console.log('lgb.loader.onProgress event.data.percent: ' + event.data.percent);

	};
	
	lgb.loader.onProgress2 = function(event){
		
		var percent = event.loaded / event.total * 100;
		percent = Math.round(percent);

		this.callbackProgress.call(this.controller, percent);
		
		//console.log('onProgress event.data.percent: ' + percent);

	};



	return lgb;
	
})(lgb || {});

















