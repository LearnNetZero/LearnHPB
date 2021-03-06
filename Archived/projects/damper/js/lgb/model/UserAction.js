

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {



	lgb.model = lgb.model || {};
	
	lgb.model.UserAction = function(name, type, title) {
		

 		this.name = name || '{no name set}';
		this.type = type || lgb.model.UserActionType.BUTTON;
		this.title = title || this.name;
		
	};
	
	
	lgb.model.UserAction.prototype = {
		
		init: function(){

		}
	};
	
	


	lgb.model.UserActionType = function() {

	};
	
	lgb.model.UserActionType.BUTTON = 'BUTTON';
	lgb.model.UserActionType.TOGGLE_BUTTON = 'TOGGLE_BUTTON';
	
	lgb.model.UserActionType.SPECIFY_INTEGER = 'SPECIFY_INTEGER';
	
	lgb.model.UserActionType.RADIO_BUTTON_GROUP = 'RADIO_BUTTON_GROUP';
	lgb.model.UserActionType.DROP_DOWN = 'DROP_DOWN';
	

	return lgb;
	
})(lgb || {});



