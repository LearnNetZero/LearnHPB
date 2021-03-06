

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
		
		this.model = new lgb.model.HvacDamperModel();
		this.view = new lgb.view.HvacDamperView();
		
		
	};
	
	
	lgb.controller.HvacDamperController.prototype = {
		
		init: function() {
			this.view.init(this.model);
		},
		model3dLoaded: function() {
			this.model3d = lgb.loader.modelList['damper'];
			this.view.model3dLoaded(this.model3d);
		},
		resetAnimation: function() {
			
			this.view.resetAnimation();
		},
		getModels: function() {
			
			var modelAry = [
				{file: 'damper.json',mode: 'ENVELOPE', name: 'damper'}
			];
			
			return modelAry;
		}
	
	};
	


	return lgb;
	
})(lgb || {});










