
/**
 * @namespace
 */
var lgb = (function(lgb){



    lgb.util = lgb.util || {};
    
    /**
     * @class
     */
    lgb.util.Loader = function(){
        lgb.Base.call(this);
        
    };
    
    
    lgb.util.Loader.prototype = {
    
        init: function(){
            this.subscriberWorldReady = null;
            this.subscriberCameraStopped = null;
            this.fileList = [];
            this.callbackComplete = null;
            this.assetsPath = '3d_assets/';
        },
        loadModels: function(callbackComplete, fileList){
            this.fileList = fileList;
            
            this.callbackComplete = callbackComplete;
            
            var delegate = jQuery.proxy(this.d(this.onMakeClientsComplete), this);
            o3djs.webgl.makeClients(delegate);
            
        },
        onMakeClientsComplete: function(clientElements){
            hemi.core.init(clientElements[0]);
            this.init3();
        },
        init3: function(){
            hemi.view.setBGColor([0.7, 0.8, 1, 1]);
            this.modelList = {};
            
            this.subscriberWorldReady = hemi.world.subscribe(hemi.msg.ready, this, 'init4');
            this.subscriberOnLoad = hemi.world.subscribe(hemi.msg.progress, this, 'onProgress');
            
            //loop through all the filenames and set them up to load asynchronously
            var len = this.fileList.length;
            
            for (var i = 0; i < len; i++) {
            
                var fileObj = this.fileList[i];
				
				
               // var newModel = new hemi.model.Model();
                var newModel = new lgb.view.Mesh();
				
				
                var fullPath = this.assetsPath + fileObj.file;
                
                newModel.LGBmode = fileObj.mode;
                newModel.setFileName(fullPath);
                newModel.name = fileObj.name;
                
                this.modelList[fileObj.name] = newModel;
            }
            
            hemi.world.ready(); // Indicate that we are ready to start our script
        },
        onLoadModelFinish: function(){
            console.log('lgb.loader.onLoadModelFinish');
            hemi.world.unsubscribe(this.subscriberOnFinish, hemi.msg.stop);
        },
        init4: function(){
            console.log('lgb.loader.init4');
            
            
            hemi.world.camera.unsubscribe(this.subscriberWorldReady, hemi.msg.stop);
            this.callbackComplete.call(this.controller);
        },
        onProgress: function(event){
            console.log('lgb.loader.onProgress event.data.percent: ' + event.data.percent);
			
           // var percent = event.loaded / event.total * 100;
            //percent = Math.round(percent);
            
			var p = parseInt(event.data.percent, 10);
			
			this.dispatch(lgb.event.Loader.PROGRESS_UPDATE, p);
			
        }
        
    };
    
    
    lgb.util.Loader.inheritsFrom(lgb.Base);
    
    
    return lgb;
    
})(lgb || {});











