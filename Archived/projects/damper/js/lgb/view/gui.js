
o3djs.require('lgb.animation');
o3djs.require('lgb.model.ParticleSystem');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace A module for managing the 2D GUI
	 */
	lgb.view = lgb.view || {};
	lgb.view.gui = lgb.view.gui || {};
	

	
	lgb.view.gui.init = function(){
		
		this.latestResizeWidth = window.innerWidth;
		this.latestResizeHeight = window.innerHeight;
		
	    var oTop = document.documentElement.scrollTop;  
	    document.documentElement.scroll = "no";  
	    document.documentElement.style.overflow = "hidden";  
	    document.documentElement.scrollTop = oTop;
		
		//this.showConfigPanel = false;
		//this.makeViewpoints();
		this.bindJavaScript();
	
	};
	

	
	
	lgb.view.gui.setCanvasSize = function(){
		var theO3d = document.getElementById("o3d");
		theO3d.style.width= (window.innerWidth ) + 'px';
		theO3d.style.height= (window.innerHeight ) + 'px';
	};
	
	
	lgb.view.gui.resizeNow = function(){

		if ((this.latestResizeWidth == window.innerWidth) && (this.latestResizeHeight == window.innerHeight)) {
			return;
		}
		
		this.latestResizeWidth = window.innerWidth;
		this.latestResizeHeight = window.innerHeight;
		this.setCanvasSize();

	};
	
	lgb.view.gui.showHud = function(){

	//	floatingMenu.add('leftNav', {targetLeft: -63, targetBottom: 90, snap: true });
		floatingMenu.add('topTitle', {centerX:true, targetTop: -41, snap: true });
		floatingMenu.add('adminPanel', {targetRight:-40, targetBottom: 180, snap: true });
		
		floatingMenu.init();
		
	//	floatingArray[0].targetLeft=0;
		floatingArray[0].targetTop=0;
		floatingArray[1].targetRight=8;
	};
	
	

	
	lgb.view.gui.onConfigClick = function(event) {
		
		var newEvent = jQuery.Event('CONFIG_PANEL');
		this.showConfigPanel = !this.showConfigPanel;
		newEvent.show = this.showConfigPanel;
		$(lgb.view.gui).trigger(newEvent);

	};
	

	
	lgb.view.gui.makeArrayFromIds = function(idsArray, objs){
		
		var ary = new Array();
		var len = idsArray.length;
		
		for (var i=0;i<len;i++) {
			var id = idsArray[i];
			var obj = objs[id];
			
			ary.push(obj);
		}
		
		return ary;
	}

	
	lgb.view.gui.onParticleSystemStart = function(event) {
		lgb.view.gui.particleSystem.start();
		lgb.view.gui.exitSystem.start();
	};
	
	lgb.view.gui.onParticleSystemStop = function(event) {
		lgb.view.gui.particleSystem.stop();
		lgb.view.gui.exitSystem.stop();
	};
	
	lgb.view.gui.onToggleBoxes = function(event) {
		this.showBoxes = !this.showBoxes;
		
		if (this.showBoxes ) {
			lgb.view.gui.particleSystem.showBoxes();	
		} else {
			lgb.view.gui.particleSystem.hideBoxes();	
		}

	};
	
	
	
	lgb.view.gui.bindJavaScript = function() {
		


		$('#check_camera').click(this.onCheckCamera);
		
		var delegate = $.proxy(this, this.onParticleSystemStart);
		$('#particleSystemStart').click(delegate);
		
		var delegate2 = $.proxy(this, this.onParticleSystemStop);
		$('#particleSystemStop').click(delegate2);
		
		var delegate4 = $.proxy(this, this.onToggleBoxes);
		$('#particleSystemBoxes').click(delegate4);

	};
	

			

	
	return lgb;
	
})(lgb || {});










