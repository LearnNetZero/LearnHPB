




/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {



	lgb.model = lgb.model || {};
	
	/**
	 * @class MVC model for the building envelope
	 * @extends lgb.model.ModelBase
	 */
	lgb.model.HVACmodel = function() {
		
		lgb.model.ModelBase.call(this);
		
/*
		this.title = "Building Envelope";
		this.name = "ENVELOPE";
		
		
		var selectionGroup1 = new lgb.model.component.SelectionGroup(
				'Select Floor-To-Ceiling Height',
				lgb.event.EnvelopeEvent.CHANGE_FLOOR_HEIGHT
			);
		
		selectionGroup1.createItem('9 ft', 9, true);
		selectionGroup1.createItem('11 ft', 11);
		selectionGroup1.createItem('13 ft', 13);
		
		var selectionGroup2 = new lgb.model.component.SelectionGroup(
				'Select Number of Stories',
				lgb.event.EnvelopeEvent.CHANGE_NUMBER_OF_FLOORS
			);
		
		selectionGroup2.createItem('3 floors', 3);
		selectionGroup2.createItem('5 floors', 5, true);
		selectionGroup2.createItem('7 floors', 7);
		
		
		this.userActions = [selectionGroup1, selectionGroup2];
		
		this.floorHeight = 9; //floor to ceiling height in ft
		this.totalFloors = 5;
*/
		
	};


	lgb.model.HVACmodel.prototype = {
		
/*
		setFloorHeight: function(floorHeight) {
			this.floorHeight = floorHeight;
			this.dispatch(lgb.event.EnvelopeEvent.DATA_MODEL_CHANGED);
		},
		setTotalFloors: function(totalFloors) {
			this.totalFloors = totalFloors;
			this.dispatch(lgb.event.EnvelopeEvent.DATA_MODEL_CHANGED);
		}
*/
		
	};
	

	lgb.model.HVACmodel.inheritsFrom(lgb.model.ModelBase);
	
	
	return lgb;
	
})(lgb || {});












