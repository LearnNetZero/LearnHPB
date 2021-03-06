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


	lgb.view.control.Slider = function(userAction){
		this.userAction = userAction;
		this.min = 0;
		this.max = 99;
		this.value = 50;
	};
	
	lgb.view.control.Slider.prototype = {
		getHTML : function() {
			

			var html = '<input id="{0}" type="range" min="{1}" max="{2}" value="{3}">';

			//var html = '<div id="slider"></div>';

			
			html = html.format(this.userAction.name, this.min, this.max, this.value);		
				


			return html;
		}
	};

	
	return lgb;
	
})(lgb || {});











