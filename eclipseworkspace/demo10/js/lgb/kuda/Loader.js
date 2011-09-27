
/**
 * @namespace
 */
var lgb = (function(lgb){



    lgb.kuda = lgb.kuda || {};
    
    /**
     * @class initilizes the Kuda/O3d world and handles the loading of meshes
     * fires off a PROGRESS_UPDATE events and an ALL_MESHES_LOAD_COMPLETE event
     */
    lgb.kuda.Loader = function(){
        lgb.Base.call(this);
		
        this.subscriberWorldReady = null;
        this.subscriberCameraStopped = null;
        this.meshList = [];
    };
    
    
    lgb.kuda.Loader.prototype = {
    

        loadMeshes: function(meshList){
            this.meshList = meshList;
            o3djs.webgl.makeClients(this.d(this.onMakeClientsComplete));
        },
		
        onMakeClientsComplete: function(clientElements){
            hemi.core.init(clientElements[0]);
            
            //todo:(raj) fix this the models, so that I can turn backfaceculling on again
			hemi.view.viewInfo.performanceState.getStateParam('CullMode').value =o3d.State.CULL_NONE;
			hemi.view.viewInfo.zOrderedState.getStateParam('CullMode').value = o3d.State.CULL_NONE;
			
			//at this point we init theworld camera again so 
			// that we can use a sublcass
			lgb.kuda.Cam.staticInit();
			var cam = new lgb.kuda.Cam();
			//ctcam.translate([0,0,1]);
			
			cam.init();
			
			hemi.world.setCamera(cam);
            hemi.view.setBGColor(lgb.Config.BACKGROUND_COLOR);

            this.subscriberWorldReady = hemi.world.subscribe(hemi.msg.ready, this.d(this.onWorldReady));
            this.subscriberOnProgress = hemi.world.subscribe(hemi.msg.progress, this.d(this.onProgress));
            
            //loop through all the filenames and set them up to load asynchronously
            var len = this.meshList.length;
            
			this.dispatch(lgb.event.Loader.ALL_MESHES_LOAD_START);
			
            for (var i = 0; i < len; i++) {
                var mesh = this.meshList[i];
                mesh.load();
            }
            
            hemi.world.ready(); // Indicate that we are ready to start our script
        },
		
        onWorldReady: function() {
            hemi.world.camera.unsubscribe(this.subscriberWorldReady, hemi.msg.stop);
			this.dispatch(lgb.event.Loader.ALL_MESHES_LOAD_COMPLETE);			
        },
		
        onProgress: function(event){
			hemi.world.camera.unsubscribe(this.subscriberOnProgress, hemi.msg.progress);
			
			var p = parseInt(event.data.percent, 10);
			this.dispatch(lgb.event.Loader.PROGRESS_UPDATE, p);
        }
        
    };
    
    
    lgb.kuda.Loader.inheritsFrom(lgb.Base);
    
    
    return lgb;
    
})(lgb || {});











