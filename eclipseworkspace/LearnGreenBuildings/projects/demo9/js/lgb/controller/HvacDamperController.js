

o3djs.require('lgb.model.HvacDamperModel');
o3djs.require('lgb.view.HvacDamperView');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace MVC controller 
	 */
	lgb.controller = lgb.controller || {};
	
	lgb.controller.HvacDamperController = function(parentController){
		
		this.parentController = parentController;
		this.model = new lgb.model.HvacDamperModel();
		this.view = new lgb.view.HvacDamperView();
	};
	
	
	lgb.controller.HvacDamperController.prototype = {
		
		init: function() {
			this.view.init(this.model);
			
			var delegate = jQuery.proxy( this.eventHandler, this );
			$('body').bind(this.model.name, delegate);
			
			//var delegate = jQuery.proxy( this.onSwitchMode, this );
			//$(lgb.view.gui).bind("HVAC_DAMPER.OPEN",delegate);
			
		},
		eventHandler : function(event) {
			
		//	var action = parseInt(event.action, 10);
			
			console.log ('HvacDamperController action: ' + event.action);
			
			
			
			switch (event.action) {
				case 'OPEN':
					this.view.animationOpen();
					break;
				case 'CLOSE':
					this.view.animationClose();
					break;
				case 'STOP':
					this.view.animationStop();
					break;
				case 'MOVE_TO_PERCENT':
					this.view.animationJumpToPercent(event.value);
					break;
				default :
					throw new Error('Unknown action: ' + event.action);

			}

			
		},
		model3dLoaded: function() {
			this.model3d = lgb.loader.modelList['damper'];
			this.view.model3dLoaded(this.model3d);
		},
		resetAnimation: function() {
			
			this.view.resetAnimation();
		},
		get3dModels: function() {
			
			var modelAry = [
				{file: 'damper.json',mode: 'ENVELOPE', name: 'damper'}
			];
			
			return modelAry;
		}
	
	};
	


	return lgb;
	
})(lgb || {});









