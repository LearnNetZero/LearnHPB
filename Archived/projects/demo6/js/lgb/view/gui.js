
o3djs.require('lgb.animation');

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
		//var vp= hemi.view.createViewPoint();
		
		
		debugger;
	}
	
	
	lgb.view.gui.particleSystemInit = function() {

		//hemi.loader.loadOctane('ParticlesOctane.json');

		var showBoxes = true;	
		var box1 = [[3,7,-0],[4,8,1]];
		var box2 = [[4,5,0],[2,4,1]];
		var box3 = [[0,5,0],[-0.5,4,1]];
		var box4 = [[-2,4.25,-0.25],[-2.5,4.5,-0.50]];
		var box5 = [[-3,4.50,0.25],[-3.5,4.75,0.75]];
		var box6 = [[-4.5,3.75,0.25],[-4.75,4,0.75]];
		var box7 = [[-5,3,0.25],[-5.25,3.25,0.75]];
		
		var box8 = [[-5,-1,0.25],[-5.25,-1.25,0.75]];
		var box9 = [[2,-1,0.25],[-3.25,3.25,0.75]];
		var box10= [[6,-1,0.25],[6.25,-1.25,0.75]];
		var boxFan = [[305,1480,-10],[310,1490,-40]];
		var boxBump = [[285,1450,5],[290,1460,15]];
		var vavBox = [[385,1365,-20],[395,1355,-40]];
		var box11 = [[5,4,0.25],[6.25,5.25,0.75]];
		var box12 = [[7,4,0.25],[8.25,5.25,0.75]];
		var box13 = [[810,1355,400],[820,1365,410]];
		var box13 = [[810,1355,430],[820,1365,440]];
		var box14 = [[810,1335,510],[820,1325,520]];
		var box15 = [[730,1100,510],[890,1110,410]];

		/* The colors these arrows will be as they move through:
		 * Start out yellow and transparent, then turn red and opaque,
		 * quickly turn to blue, then fade to black and transparent.
		 */
		var colorKey1 = {key: 1, value: [1,1,0,1]};
		var colorKey2 = {key: 0, value: [1,0,0,1]};
		var colorKey3 = {key: 0, value: [0,0,1,1]};
		var colorKey4 = {key: 1, value: [0,0,0,1]};
		
		/* The scale of the arrows as they move through:
		 * Start out infinitesimal, then grow to a decent size,
		 * kind of stretched out, then shrink away again.
		 */
		var scaleKey1 = {key: 0, value: [0.15,0.15,0.15]};
		var scaleKey2 = {key: 1, value: [0.15,0.15,0.15]};
		var scaleKey3 = {key: 1, value: [0.15,0.15,0.15]};
		
		/* Create a particle system configuration with the above parameters,
		 * plus a rate of 20 particles per second, and a lifetime of
		 * 5 seconds. Specify the shapes are arrows.
		 */
		var particleSystemConfig = {
			rate : 10,
			life : 10,
			boundingBoxes :  [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11],
			shape : hemi.curve.shapeType.SPHERE,
			colorKeys : [colorKey1, colorKey2, colorKey3, colorKey4],
			scaleKeys : [scaleKey1, scaleKey2, scaleKey3]
		};
			  
		var exitConfig = {
			rate : 2,
			life : 2,
			boundingBoxes : [box11, box12],
			shape : hemi.curve.shapeType.SPHERE,
			colorKeys : [colorKey1, colorKey2, colorKey3, colorKey4],
		
			scaleKeys : [scaleKey1, scaleKey2, scaleKey3]
		};
		/*
		var boxConfig = {
			rate : 80,
			life : 10,
			boundingBoxes : [box1, box3, box4,boxBump, boxFan, box6, box8, box11, box12, box13,box14, box15],
			shape : hemi.curve.shapeType.ARROW,
			colorKeys : [colorKey1, colorKey2, colorKey3, colorKey4],
			scaleKeys : [scaleKey1, scaleKey2, scaleKey3]
		};
		
		
		
		*/
		var floor1Model = lgb.loader.modelList['floor1'];
		var bb = floor1Model.getBoundingBox();
		
		var width = bb.maxExtent[0] - bb.minExtent[0]; //long side
		var depth = bb.maxExtent[1] - bb.minExtent[1]; //narrow side
		var height = bb.maxExtent[2] - bb.minExtent[2]; //floor height
		depth -= 6;
		
		var centerZ = depth /2;
		var centerY = height /2;
		var centerX = width /2;
		
		
		//left-right negative is right, up/down positive is up
		var target = [centerX+1.2, centerY-1.0, -centerZ];
		
		var shape2 = hemi.shape.create({
			shape: 'box',
			color: [1,1,0,0.3],
			h:1,w:1,d:1});
			
			shape2.translate(target[0],target[1],target[2]);
			
			//hemi.core.client.root.translate(20,0,0);
			
		var model = new hemi.model.Model();
		//model.translate(20,0,0);
		
		/* Create the particle system with the above config, 
		 * and make the root transform its parent.
		 */
		lgb.view.gui.particleSystem = new hemi.curve.ParticleSystem(
			shape2, 
			particleSystemConfig);
		
		lgb.view.gui.exitSystem = new hemi.curve.ParticleSystem(
			shape2, 
			exitConfig);	

		

		lgb.view.gui.showBoxes = false;
		
	};
	
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
		
	//	var delegate = $.proxy(this, this.onConfigClick);
		
		//$('#configButton').click(delegate);
		
		$('#check_camera').click(this.onCheckCamera);
		
		
		var delegate = $.proxy(this, this.onParticleSystemStart);
		$('#particleSystemStart').click(delegate);
		
		var delegate2 = $.proxy(this, this.onParticleSystemStop);
		$('#particleSystemStop').click(delegate2);
		
//		var delegate3 = $.proxy(this, this.onParticleSystemInit);
//		$('#particleSystemInit').click(delegate3);
		
		var delegate4 = $.proxy(this, this.onToggleBoxes);
		$('#particleSystemBoxes').click(delegate4);

		
		
		
	};
	

			

	
	return lgb;
	
})(lgb || {});










