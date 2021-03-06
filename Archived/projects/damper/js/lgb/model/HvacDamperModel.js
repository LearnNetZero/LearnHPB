
o3djs.require('lgb.model.XmlParser');
o3djs.require('lgb.model.UserAction');



/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {



	lgb.model = lgb.model || {};
	
	lgb.model.HvacDamperModel = function() {
		this.title = "HVAC Damper";
		this.name = "HVAC_damper";
		
		var openAction = new lgb.model.UserAction('open', lgb.model.UserActionType.BUTTON);
		var closeAction = new lgb.model.UserAction('close', lgb.model.UserActionType.BUTTON);
		var stopAction = new lgb.model.UserAction('stop', lgb.model.UserActionType.BUTTON);
		var openPercent = new lgb.model.UserAction('move_to_percent', lgb.model.UserActionType.SPECIFY_INTEGER, 'Move to Percent');
		
		//var setPercentOpenAction = new lgb.model.UserAction('setPercentOpen', lgb.model.UserActionType.SLIDER);
		
		this.actions = [openAction,closeAction, stopAction, openPercent];
		this.percentOpen = 0;
			
	};
	


	lgb.model.HvacDamperModelState = function() {

	};
	
	lgb.model.HvacDamperModelState.OPENING = 'OPENING';
	lgb.model.HvacDamperModelState.CLOSING = 'CLOSING';
	lgb.model.HvacDamperModelState.STOPPED = 'STOPPED';


	
	
	return lgb;
	
})(lgb || {});










