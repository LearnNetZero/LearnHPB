
/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {



	lgb.view = lgb.view || {};

	/**
	 * @class this is the MVC view class for the Admin Panel
	 * it handles the life-cycle of the subpanels, 
	 * and the various AJAX components
	 */
	lgb.view.AdminPanel = function(){
		lgb.view.ViewBase.call(this);
		this.subPanels = [];
		this.htmlID = "adminPanel";
		
	
	};
	
	lgb.view.AdminPanel.prototype = {
	
	
		processAll : function(dataModelArray) {
			
			dataModelArray.assertContainsType(lgb.model.ModelBase);
			
			var len  = dataModelArray.length;
			
			for(var x = 0; x < len; x++) {
				var dataModel = dataModelArray[x];
				this.processOne(dataModel);
			}
			
		},
	
		processOne : function(dataModel) {
			
			var subpanel = new lgb.view.AdminSubpanel(dataModel);
			this.subPanels.push(subpanel);
		},
		
		
		injectHtml : function() {
			
			var el = $('body');
			var htmlBoilerplate = '<div id="{0}" class="panel">\n'.format(this.htmlID) +
								'\t<h3>Admin</h3>\n' +
								'\t<div class="box">\n' +
									'\t\t</div>\n' +
								'\t</div>\n';
			
			el.append(htmlBoilerplate);
			
			$('#{0}'.format(this.htmlID)).panel({
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

	lgb.view.AdminPanel.inheritsFrom(lgb.view.ViewBase);

	return lgb;
	
})(lgb || {});










