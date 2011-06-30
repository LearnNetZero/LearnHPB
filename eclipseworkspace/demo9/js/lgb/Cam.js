
/**
 * @namespace
 */
var lgb = (function(lgb) {



	lgb.view = lgb.view || {};

	/**
	 * @class
	 */
	lgb.Cam = function(){
		hemi.view.Camera.call(this);


	};
	
//	var parentMyFunc = this.update;
	//this.parent_setEyeTarget = this.setEyeTarget;
		
	lgb.Cam.prototype = {
	
		
		init : function() {
			this.dispatcher = new lgb.Base();
		},
		/**
		 * Update the camera.
		 */
		update : function(delta) {
			

			hemi.view.Camera.prototype.update.apply(this, [delta]);
			
			var time = this.state.time;
			if (time.current >= time.end && this.dispatcher != null) {
				this.dispatcher.dispatch(lgb.event.Cam.MOVE_COMPLETE, this.vd.current);
			}
			
		},


		/**
		 * Set the eye and target of the camera. 
		 *
		 * @param {[number]} eye XYZ position of camera eye
		 * @param {[number]} target XYZ position of camera target
		 */
		setEyeTarget : function(eye,target) {
	
			hemi.view.Camera.prototype.setEyeTarget.apply(this, [eye,target]);
			
			this.currentEye = eye;
			this.currentTarget = target;
			this.dispatcher.dispatch(lgb.event.Cam.MOVE_PROGRESS, this.vd.current);			
		}
		


	};

	lgb.Cam.staticInit = function() {
		lgb.Cam.inheritsFrom(hemi.view.Camera);
	};
	

	return lgb;
	
})(lgb || {});











