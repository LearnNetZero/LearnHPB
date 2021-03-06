o3djs.require('lgb.model.UserAction');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace A module for managing the 2D GUI
	 */
	lgb.view = lgb.view || {};
	lgb.view.control = lgb.view.control || {};


	lgb.view.control.Button = function(userAction){
		this.userAction = userAction;
	};
	
	lgb.view.control.Button.prototype = {
		getHTML : function() {
			
			var html =  '\t\t<button id="{0}" type="button">{0}</button><br />\n'.format(this.userAction.name);
			return html;
		}
	};

	
	return lgb;
	
})(lgb || {});











