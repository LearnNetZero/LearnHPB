o3djs.require('lgb.view.control.Button');
o3djs.require('lgb.view.control.Link');
o3djs.require('lgb.view.control.Slider');


/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace A module for managing the 2D GUI
	 */
	lgb.view = lgb.view || {};


	lgb.view.AdminSubpanel = function( model ) {

		this.name = model.name;
		this.title = model.title;
		this.userActions = model.actions;
	
	};
	
	lgb.view.AdminSubpanel.prototype = {
	
		
		makeActionsHTML : function() {
			
			var actionsHTML = '';
			
			var len = this.userActions.length;
			for(var x = 0; x < len; x++) {
				var action =  this.userActions[x];
				//var button = new lgb.view.control.Link(action);
				
				var guiControl;
				switch(action.type) {
					
					case lgb.model.UserActionType.SPECIFY_INTEGER:
						guiControl = new lgb.view.control.Slider(action);	
						break;
					case lgb.model.UserActionType.BUTTON:
						guiControl = new lgb.view.control.Button(action);
						break;
					default:
						throw "Unknown action type: " + action.type;
				}
				actionsHTML+= guiControl.getHTML() + '<br />';
			}
			
			return actionsHTML;
			
		},
		bindEvents : function() {
			
		var delegateClick = $.proxy(this.onLinkClick, this);
		var delegateChange = $.proxy(this.onLinkChange, this);
			
			var len = this.userActions.length;
			for(var x = 0; x < len; x++) {
				
				var action =  this.userActions[x];
				var selector = '#{0}'.format(action.name);
				
				switch(action.type) {
					
					case lgb.model.UserActionType.SPECIFY_INTEGER:
						$(selector).bind( 'change', {action:action.name}, delegateChange );
						break;
					case lgb.model.UserActionType.BUTTON:
						$(selector).click({action:action.name},delegateClick);
						break;
					default:
						throw "Unknown action type: " + action.type;
				}
			}
		},
		
		injectHtml : function() {
			
			var actionsHtml = this.makeActionsHTML();
			
			var selector = '#{0}'.format(this.name);
			var group = 'group_{0}'.format(this.name);
			
			el = $('div.box');
			var html = '<div id="{0}" class="panel {1}">\n'.format(this.name, group) +
							'\t<h3>{0}</h3>\n'.format(this.title) +
							'\t<div>\n' + 
								actionsHtml +
							'\t</div>\n' +
						'</div>';
			
			el.append(html);
			
	        $(selector).panel({
	            accordion:group
	        });
			
			this.bindEvents();
			
		},
		
		onLinkChange : function(event) {
			
			//console.log('onLinkChange: ' + event.target.value);
			
			var newEvent = jQuery.Event('ADMIN_PANEL');
			newEvent.action = event.data.action;
			newEvent.value = event.target.value;

			$(this).trigger(newEvent);
		},
		
		onLinkClick : function(event) {
			
			var newEvent = jQuery.Event('ADMIN_PANEL');
			newEvent.action = event.data.action;

			$(this).trigger(newEvent);
		}
		

	};

	
	return lgb;
	
})(lgb || {});











