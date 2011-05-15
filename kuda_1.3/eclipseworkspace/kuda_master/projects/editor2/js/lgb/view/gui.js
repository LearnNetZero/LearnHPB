
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
		
		this.showConfigPanel = false;
		this.makeViewpoints();
		this.bindJavaScript();
	
	};
	
	lgb.view.gui.makeViewpoints = function(){
		
		var delegateClick = $.proxy(this, this.onViewPointClick);
		var delegateMouseOver = $.proxy(this, this.onViewPointMouseOver);
		var delegateMouseOut = $.proxy(this, this.onViewPointMouseOut);
		var zoneNames = ['NorthWest', 'North', 'NorthEast', 'West',
		 'Core', 'East', 'SouthWest', 'South', 'SouthEast', 'Top'];
		
		
		for(var i=0; i < 10; i++) {
			
			var zoneName = zoneNames[i];
			
			var html = '<a id="viewPoint_{0}" class="viewPointLink" title="Go to {1}" href="#">Go to {1}</a><br />'.format(i.toString(), zoneName);
			$('#adminPanel1contents').append(html);
			
			var selector = '#viewPoint_'+ i.toString();
			var eventPayload = {zoneNumber: i.toString()};
			
			$(selector).click(eventPayload,delegateClick);
			$(selector).mouseover(eventPayload,delegateMouseOver);
			$(selector).mouseout(eventPayload,delegateMouseOut);
		}
	};
	
	lgb.view.gui.onViewPointMouseOver = function(event) {
		console.log ('onViewPointMouseOver ' + event.data.zoneNumber);
		
		var newEvent = jQuery.Event('SHOW_ZONE');
		
		newEvent.zoneNumber = event.data.zoneNumber;
		newEvent.visible = true; 
		
		$(lgb.view.gui).trigger(newEvent);
	};
	
	lgb.view.gui.onViewPointMouseOut = function(event) {
		console.log ('onViewPointMouseOut ' + event.data.zoneNumber);
		
		var newEvent = jQuery.Event('SHOW_ZONE');
		
		newEvent.zoneNumber = event.data.zoneNumber;
		newEvent.visible = false; 
		
		$(lgb.view.gui).trigger(newEvent);
	};
	
	
	
	lgb.view.gui.onViewPointClick = function(event) {
		
		console.log ('onViewPointClick ' + event.data.zoneNumber);
		
		var newEvent = jQuery.Event('SWITCH_VIEWPOINT');
		newEvent.zoneNumber = event.data.zoneNumber;

		$(lgb.view.gui).trigger(newEvent);
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

		floatingMenu.add('leftNav', {targetLeft: -63, targetBottom: 90, snap: true });
		floatingMenu.add('topTitle', {centerX:true, targetTop: -41, snap: true });
		floatingMenu.add('adminPanel', {targetRight:-40, targetBottom: 180, snap: true });
		
		floatingMenu.init();
		
		floatingArray[0].targetLeft=0;
		floatingArray[1].targetTop=0;
		floatingArray[2].targetRight=8;
	};
	
	
	lgb.view.gui.onLeftNavClick = function(event) {
		
		var newEvent = jQuery.Event('SWITCH_MODE');
		newEvent.mode = event.data.mode;

		$(lgb.view.gui).trigger(newEvent);
	};
	
	lgb.view.gui.onConfigClick = function(event) {
		
		var newEvent = jQuery.Event('CONFIG_PANEL');
		this.showConfigPanel = !this.showConfigPanel;
		newEvent.show = this.showConfigPanel;
		$(lgb.view.gui).trigger(newEvent);

	};
	
	lgb.view.gui.onCheckCamera = function(event) {
		
		var vd = hemi.view.createViewData(hemi.world.camera);
	};
	
	lgb.view.gui.particleSystemInit = function(xml) {
		
			//parse the XML
			var ps = new lgb.model.ParticleSystem(xml);

			var rootShape = hemi.shape.create (
				{shape: 'box',
				color: [1,1,0,0.3],
				h:1,w:1,d:1}
				);
				
			rootShape.translate(ps.translate[0],ps.translate[1],ps.translate[2]);
			
			/* Create the particle system with the above config, 
			 * and make the rootShape transform its parent.
			 */
			lgb.view.gui.particleSystem = new hemi.curve.ParticleSystem(
				rootShape, 
				ps.configs['1']);
			
			lgb.view.gui.exitSystem = new hemi.curve.ParticleSystem(
				rootShape, 
				ps.configs['2']);	
	
			lgb.view.gui.showBoxes = false;

	};
	
	
	
	lgb.view.gui.makeParticleConfig = function(sys, boxes, colorKeys, scaleKeys){
		
		var shapeStr = 'hemi.curve.shapeType.' + sys.shape;
		var bbAry = this.makeArrayFromIds(sys.boundingBoxIds,boxes);
		var ckAry = this.makeArrayFromIds(sys.colorKeyIds,colorKeys);
		var skAry = this.makeArrayFromIds(sys.scaleKeyIds,scaleKeys);
		
		var particleSystemConfig = {
			rate : sys.rate,
			life : sys.life,
			boundingBoxes :  bbAry,
			shape : hemi.curve.shapeType.SPHERE,
			colorKeys : ckAry,
			scaleKeys : skAry
		};
		
		return particleSystemConfig;
	}
	
	
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
		
		$('#leftNavButton_1').click({mode:'ALL'},this.onLeftNavClick);
		$('#leftNavButton_2').click({mode:'HVAC'},this.onLeftNavClick);
		$('#leftNavButton_3').click({mode:'ENVELOPE'},this.onLeftNavClick);
		$('#leftNavButton_4').click({mode:'LIGHTING'},this.onLeftNavClick);
		$('#leftNavButton_5').click({mode:'DAYLIGHTING'},this.onLeftNavClick);

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










