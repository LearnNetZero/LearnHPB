o3djs.require('lgb.model.UserAction');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace A module for managing the 2D GUI
	 */
	lgb.view = lgb.view || {};
	lgb.view.controls = lgb.view.controls || {};


	lgb.view.controls.Link = function(userAction){
		this.userAction = userAction;
	};
	
	lgb.view.controls.Link.prototype = {
		getHTML : function() {
			var html =  '\t\t<a id="{0}" href="#">{0}</a> <br />\n'.format(this.userAction.name);
			return html;
		}
	};

	
	return lgb;
	
})(lgb || {});











