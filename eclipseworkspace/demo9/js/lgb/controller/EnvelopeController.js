


var lgb = (function(lgb) {

	lgb.controller = lgb.controller || {};
	
	
	/**
	 * @class MVC controller for the building envelope
	 * @extends lgb.controller.ControllerBase
	 */
	lgb.controller.EnvelopeController = function() {
		
		lgb.controller.ControllerBase.call(this);

		this.dataModel = new lgb.model.EnvelopeModel();
		this.view = new lgb.view.EnvelopeView();

	};
	
	
	lgb.controller.EnvelopeController.prototype = {
		
		init: function() {
			
			//this.listen(this.dataModel.name, this.onGuiEvent);
			this.listen(lgb.event.EnvelopeEvent.CHANGE_FLOOR_HEIGHT, this.onChangeFloorHeight);
			this.listen(lgb.event.EnvelopeEvent.CHANGE_NUMBER_OF_FLOORS, this.onChangeNumberOfFloors);

			this.view.init(this.dataModel);
		},
		
		onChangeNumberOfFloors: function(event) {
			var totalFloors = parseInt(event.value, 10);
			this.dataModel.setTotalFloors(totalFloors);
		},
		onChangeFloorHeight: function(event) {
			var height = parseInt(event.value, 10);
			this.dataModel.setFloorHeight(height);
		},

		onGuiEvent : function(event) {

			switch (event.action) {
				case "number-of-floors" : {
					var totalFloors = parseInt(event.value, 10);
					this.dataModel.setTotalFloors(totalFloors);
					break;
				}
				case "floor-to-ceiling" : {
					var height = parseInt(event.value, 10);
					this.dataModel.setFloorHeight(height);
					break;
				}
				default : {
					throw new Error('lgb.controller.EnvelopeController.onGuiEvent() unexpected action ' + event.action )
				}
			}
			
		},

		resetAnimation: function() {
			this.view.resetAnimation();
		},
		getMeshList: function() {
			return this.view.getMeshList();
		}
	
	};
	
	lgb.controller.EnvelopeController.inheritsFrom(lgb.controller.ControllerBase);

	return lgb;
	
})(lgb || {});









