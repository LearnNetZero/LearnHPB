
o3djs.require('lgb.view.AdminPanel');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace A module for managing the 2D GUI
	 */
	lgb.view = lgb.view || {};

	
	lgb.view.EnvelopeView = function(){
		
		this.model = null;
	};
	
	lgb.view.EnvelopeView.prototype = {
	
		init : function(model) {
			
			this.model = model;
			
			if (sceneController.adminPanel) {
			//	this.initAdminPanel();
			}

			
		},
		
		initAdminPanel : function() {
			//add the HTML elements to the Admin panel
			var delegate = jQuery.proxy(this.onAdminPanelClick, this);
			sceneController.adminPanel.makeSubpanel(this.model, delegate);
		},
		
		
		model3dLoaded: function(model3d) {
			
			this.model3d = model3d;
			
			this.finalFrame  = this.model3d.getMaxAnimationTime();
			this.frame0 = 0;
			this.frame1 = hemi.view.getTimeOfFrame(1);
			
		//	this.animation = hemi.animation.createModelAnimation(this.model3d, startTime, endTime);
			//this.animation = hemi.animation.createModelAnimation(this.model3d, this.frame0, this.frame1);
			
		},
		resetAnimation : function() {
			this.animation.start();
		},
/*
		onAdminPanelClick : function(event) {
			
			var action = event.action;
			
			switch(event.action) {
				case 'open' :
					this.animationOpen();
					break;
				case 'close' :
					this.animationClose();
					break;
				case 'stop' :
					this.animationStop();
					break;
				case 'move_to_percent' :
					this.animationJumpToPercent(event.value);
					break;
				default :
					throw new Error('Unknown action: ' + event.action);
					break;
			}
		},
*/
		animationOpen : function() {

			if (this.animation.target.isAnimating) {
				this.animation.stop();
			}

			this.animation = hemi.animation.createModelAnimation(this.model3d, this.animation.currentTime, this.frame1);
			this.animation.start();
		},
		animationClose : function() {
			if (this.animation.target.isAnimating) {
				this.animation.stop();
			}
			
			this.animation = hemi.animation.createModelAnimation(this.model3d, this.animation.currentTime, this.finalFrame);
			this.animation.start();
		},
		animationStop : function() {
			if (this.animation.target.isAnimating) {
				this.animation.stop();
			}
		},
		animationJumpToPercent : function(percent) {
			
			percent = -percent + 100;
			 
			if (this.animation.target.isAnimating) {
				this.animation.stop();
			}
			
			var decimal = percent / 100;
			var targetTime  = decimal * this.model3d.getMaxAnimationTime();
			
			//this.animation = hemi.animation.createModelAnimation(this.model3d, targetTime-0.001, targetTime);
			//this.animation.start();
			
		//	this.animation.updateTarget(targetTime);
			this.animation.updateTarget(targetTime);
			
			//this.model3d.setAnimationTime(targetTime);
		}
		
	};

	
	return lgb;
	
})(lgb || {});










