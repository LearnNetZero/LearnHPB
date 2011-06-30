




var lgb = (function(lgb) {

	lgb.controller = lgb.controller || {};
	
	
	/**
	 * @class MVC controller for the building envelope
	 * @extends lgb.controller.ControllerBase
	 */
	lgb.controller.MainController = function() {
		
		lgb.controller.ControllerBase.call(this);

	};
	
	
	lgb.controller.MainController.prototype = {
		
		init: function() {
			
			this.meshList = []; //an array of all the lgb.view.Mesh objects
			
			this.listen(lgb.event.Event.MESH_REQUEST, this.onMeshRequest);
			this.listen(lgb.event.Loader.ALL_MESHES_LOADED, this.onMeshesLoaded);
					
			jQuery(document).ready(this.d(this.onDocumentReady));
			jQuery(window).resize(this.d(this.onWindowResize));
			jQuery(window).unload(this.d(this.onWindowUnload));

		},
		
		onDocumentReady : function(event) {
		
		
			$('head').append ('<title>{0}</title>'.format(lgb.Config.getTitle()));
			
			console.log("kuda version: " + hemi.version);
			console.log("lgb version: " + lgb.Config.VERSION);
			console.log("jQuery version: " + $().jquery);
			
			//this.adminController = new lgb.controller.AdminController();
			this.adminController2 = new lgb.controller.AdminController2();
			
			
			this.guiController = new lgb.controller.GuiController();
			
			//lgb.animation.init();
			
			this.buildingController = new lgb.controller.BuildingController();
			this.leftNavController = new lgb.controller.LeftNavController();
			this.titleBarController = new lgb.controller.TitleBarController();
			
			this.viewPointController = new lgb.controller.ViewPointController(this.buildingController);
			this.listen(lgb.view.ViewPointViewState.STOPPED, this.onCameraMoved);
			
			this.cameraController = new lgb.controller.CameraController();
			
			this.progressBar = new lgb.view.ProgressBar();	
			this.progressBar.show(); 
				
			this.loader = new lgb.util.Loader();
			this.loader.loadMeshes( this.meshList );
			
			lgb.util.F.preload('icon_exterior_envelope_over.png,icon_lighting_over.png,icon_general_over.png,icon_exterior_envelope_over.png');
										
		},
		
		//handles the MESH_REQUEST event and adds meshes to the load queue
		// a mesh to load
		onMeshRequest : function(event) {
			
			var meshListRequest = event.value;
			meshListRequest.assertContainsType(lgb.view.Mesh);
			this.meshList = this.meshList.concat(meshListRequest);
		
		},


		onMeshesLoaded : function(event) {
			hemi.world.camera.enableControl();	// Enable camera mouse control
		},


		onWindowResize : function(event) {
			this.dispatch(lgb.event.Event.WINDOW_RESIZE);
		},
		
		onWindowUnload : function(event) {
			if (hemi.core.client) {
				hemi.core.client.cleanup();
			}
		}
		
	};
	
	lgb.controller.MainController.inheritsFrom(lgb.controller.ControllerBase);

	return lgb;
	
})(lgb || {});










