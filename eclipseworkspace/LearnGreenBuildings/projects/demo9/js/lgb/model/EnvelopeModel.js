
o3djs.require('lgb.model.XmlParser');
o3djs.require('lgb.model.UserAction');



/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {



	lgb.model = lgb.model || {};
	
	lgb.model.EnvelopeModel = function() {
		this.title = "Building Envelope";
		this.name = "ENVELOPE";
		
		var floor9 = new lgb.model.UserAction('9', lgb.model.UserActionType.TRIGGER, true);
		var floor11 = new lgb.model.UserAction('11', lgb.model.UserActionType.TRIGGER, true);
		var floor13 = new lgb.model.UserAction('13', lgb.model.UserActionType.TRIGGER, true);

		this.actions = [floor9, floor11, floor13];

	};
	


	lgb.model.EnvelopeModelState = function() {

	};
	
	lgb.model.EnvelopeModelState.STATIC = 'STATIC';



	
	
	return lgb;
	
})(lgb || {});









