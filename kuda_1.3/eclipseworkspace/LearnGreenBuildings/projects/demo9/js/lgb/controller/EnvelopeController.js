

o3djs.require('lgb.model.EnvelopeModel');
o3djs.require('lgb.view.EnvelopeView');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace MVC controller 
	 */
	lgb.controller = lgb.controller || {};
	
	lgb.controller.EnvelopeController = function(parentController){
		
		this.parentController = parentController;
		this.model = new lgb.model.EnvelopeModel();
		this.view = new lgb.view.EnvelopeView();
	};
	
	
	lgb.controller.EnvelopeController.prototype = {
		
		init: function() {
			$('body').bind(this.model.name, this.eventHandler);
			this.view.init(this.model);
		},
		eventHandler : function(event) {
			
			var action = parseInt(event.action, 10);
			
			console.log ('floor to ceiling height: ' + event.action);
			
			
			
			/*
			switch(event.action) {
				case '9' :
					this.view.animationOpen();
					break;
				case '11' :
					this.view.animationClose();
					break;
				case '13' :
					this.view.animationStop();
					break;
			}
			*/
			
			
		},
		model3dLoaded: function() {
			this.model3d = lgb.loader.modelList['envelope'];
			this.view.model3dLoaded(this.model3d);
		},
		resetAnimation: function() {
			this.view.resetAnimation();
		},
		get3dModels: function() {
			
			var modelAry = [
				{file: 'envelope.json',mode: 'ENVELOPE', name: 'envelope'}
			];
			
			return modelAry;
		}
	
	};
	


	return lgb;
	
})(lgb || {});










