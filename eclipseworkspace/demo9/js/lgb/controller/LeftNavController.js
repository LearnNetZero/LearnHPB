



var lgb = (function(lgb) {

	lgb.controller = lgb.controller || {};
	
	
	/**
	 * @class MVC controller for the building LeftNav
	 * @extends lgb.controller.ControllerBase
	 */
	lgb.controller.LeftNavController = function() {
		
		lgb.controller.ControllerBase.call(this);

		this.dataModel = new lgb.model.LeftNavModel();
		this.view = new lgb.view.LeftNavView();

	};
	
	
	lgb.controller.LeftNavController.prototype = {
		
		init: function() {
			this.view.init();
		},
		
		getMeshList: function() {
			return null;
		}
	
	};
	
	lgb.controller.LeftNavController.inheritsFrom(lgb.controller.ControllerBase);

	return lgb;
	
})(lgb || {});









