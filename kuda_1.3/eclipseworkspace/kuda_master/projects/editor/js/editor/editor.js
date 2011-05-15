/* 
 * Kuda includes a library and editor for authoring interactive 3D content for the web.
 * Copyright (C) 2011 SRI International.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms
 * of the GNU General Public License as published by the Free Software Foundation; either 
 * version 2 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; 
 * if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, 
 * Boston, MA 02110-1301 USA.
 */

(function(window) {
	o3djs.require('editor.requires');
	
	
////////////////////////////////////////////////////////////////////////////////
//                                 Main App                                   //
////////////////////////////////////////////////////////////////////////////////

	Application = function() {
	};
	
	Application.prototype = {
		initViewerStep1: function() {
			var app = this;
			
			o3djs.webgl.makeClients(function(clientElements) {
				app.initViewerStep2(clientElements);
			});
		},
		
		initViewerStep2: function(clientElements) {
			
			hemi.core.init(clientElements[0]);
			
			var cam = hemi.world.camera;
			cam.enableControl();
			
			
			// For now, we do this here
			var that = this;
	
			this.damperstyle1 = new hemi.model.Model();
			
			this.subscriberWorldReady = hemi.world.subscribe(
					hemi.msg.ready,
					this,
					'init3'
				);
			
			
			this.damperstyle1.setFileName('projects/damperstyle1.json');
			
			hemi.world.ready();
			
			
		},
		
		init3: function(clientElements) {
			var max  = this.damperstyle1.getMaxAnimationTime();
			var startTime = hemi.view.getTimeOfFrame(1);
			
			this.animation1 = hemi.animation.createModelAnimation(this.damperstyle1, startTime, max);
			
			var loop1 = new hemi.animation.Loop();
			loop1.startTime = startTime;
			loop1.stopTime = max;
			
			this.animation1.addLoop(loop1);
			this.animation1.start();
		}
		

		
	};
	
	function getParam(name) {
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		if( results == null )
			return "";
		else
			return results[1];
	}
	
	var app = new Application();
	
	window.onload = function() {		
		//app.sizeViewerPane();
		app.initViewerStep1();
	};
	
	window.onunload = function() {
		app.uninitViewer();
	};
	
	jQuery(window).resize(function() {
		app.sizeViewerPane();
	});
})(window);
