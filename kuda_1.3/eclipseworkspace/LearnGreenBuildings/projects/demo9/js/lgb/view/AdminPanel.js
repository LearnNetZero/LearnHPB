
o3djs.require('lgb.view.AdminSubpanel');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace A module for managing the 2D GUI
	 */
	lgb.view = lgb.view || {};


	lgb.view.AdminPanel = function(){
		
		this.subPanels = [];
	
	};
	
	lgb.view.AdminPanel.prototype = {
	
	
		showAll : function(modelAry) {
			
			
			var len  = modelAry.length;
			
			for(var x = 0; x < len; x++) {
				var model = modelAry[x];
				this.showOne(model);
			}
			
			

		},
	
		showOne : function(model) {
			
			var subpanel = new lgb.view.AdminSubpanel(model);
			//$(subpanel).bind("ADMIN_PANEL",clickHandler);
			
			this.subPanels.push(subpanel);
		},
		
		
		makeSubpanel : function(model,clickHandler) {
			
			var subpanel = new lgb.view.AdminSubpanel(model);
			//$(subpanel).bind("ADMIN_PANEL",clickHandler);
			
			this.subPanels.push(subpanel);
		},
			
		injectHtml : function() {
			
			var el = $('body');
			var htmlBoilerplate = '<div id="adminPanel" class="panel">\n' +
								'\t<h3>Admin</h3>\n' +
								'\t<div class="box">\n' +
									'\t\t</div>\n' +
								'\t</div>\n';
			
			el.append(htmlBoilerplate);
			
			$('#adminPanel').panel({
				'collapseType':'slide-right',
                'stackable':false,
                'collapsed':true
			});
			
			
			var len = this.subPanels.length;
			for(var x = 0; x < len; x++) {
				var subPanel = this.subPanels[x];
				subPanel.injectHtml();
			}
		}

		

	};

	
	return lgb;
	
})(lgb || {});











