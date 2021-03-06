


/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace MVC controller 
	 */
	lgb.controller = lgb.controller || {};
	
	lgb.controller.ZoneController = function(){


	};
	
	lgb.controller.ZoneController.prototype = {
		
		init: function(floor5Model) {

			this.buildingFt = {
				longSide: 125,
				shortSide: 80,
				cornerWidth: 15,
				cornerHeight: 15
			};
			this.buildingFt.coreLongSide = this.buildingFt.longSide - (this.buildingFt.cornerWidth *2);
			this.buildingFt.coreShortSide = this.buildingFt.shortSide - (this.buildingFt.cornerHeight *2);

			var bb = floor5Model.getBoundingBox();
			
			this.width = bb.maxExtent[0] - bb.minExtent[0]; //long side
			this.height= bb.maxExtent[1] - bb.minExtent[1]; //narrow side
			this.depth= bb.maxExtent[2] - bb.minExtent[2]; //floor height
			this.height -= 6;

			var pxPerFoot = this.width /this.buildingFt.longSide;
			
			this.buildingPx = {};
			this.buildingPx.longSide = this.buildingFt.longSide * pxPerFoot;
			this.buildingPx.shortSide = this.buildingFt.shortSide * pxPerFoot;
			this.buildingPx.cornerWidth = this.buildingFt.cornerWidth * pxPerFoot;
			this.buildingPx.cornerHeight = this.buildingFt.cornerHeight * pxPerFoot;
			this.buildingPx.coreLongSide = this.buildingFt.coreLongSide * pxPerFoot;
			this.buildingPx.coreShortSide = this.buildingFt.coreShortSide * pxPerFoot;

			var centerZ = this.depth /2;
			var centerY = this.height /2;
			var centerX = this.width /2;
			 
			this.allZones = hemi.shape.create({
				shape: 'box',
				color: [1,0,0,0.7],
				h:  this.height, w: this.width, d: this.depth });
				
			this.allZones.rotateX(4.715);
			this.allZones.translate(centerX,centerY,centerZ);
			this.allZones.visible = false;
			
			this.zones = new Array();
			this.viewPoints = new Array();
			
			var x = this.width - (this.buildingPx.cornerWidth/2);
			var y = this.buildingPx.cornerHeight/2;
			
			this.makeZone(
							this.buildingPx.cornerWidth, 
							this.buildingPx.cornerHeight,x,y,0);
							
			x = (this.buildingPx.cornerWidth/2);
			this.makeZone(
							this.buildingPx.cornerWidth, 
							this.buildingPx.cornerHeight,x,y,2);
			
			y = this.height - this.buildingPx.cornerHeight/2;
			
			this.makeZone(
							this.buildingPx.cornerWidth, 
							this.buildingPx.cornerHeight,x,y,8);

			x = this.width - (this.buildingPx.cornerWidth/2);
			this.makeZone(
							this.buildingPx.cornerWidth, 
							this.buildingPx.cornerHeight,x,y,6);
			
			x =  this.buildingPx.cornerWidth + (this.buildingPx.coreLongSide /2);
			y = this.buildingPx.cornerHeight/2;
			
			this.makeZone(
							this.buildingPx.coreLongSide, 
							this.buildingPx.cornerHeight,x,y,1);
							
			y = this.height - this.buildingPx.cornerHeight/2;
			this.makeZone(
							this.buildingPx.coreLongSide, 
							this.buildingPx.cornerHeight,x,y,7);
			
			x = this.width - (this.buildingPx.cornerWidth/2);
			y = this.buildingPx.coreShortSide/2 + this.buildingPx.cornerHeight;
					
			this.makeZone(
							this.buildingPx.cornerWidth, 
							this.buildingPx.coreShortSide,x,y,3);	
										
			x = (this.buildingPx.coreLongSide/2) + this.buildingPx.cornerWidth;				
			this.makeZone(
							this.buildingPx.coreLongSide, 
							this.buildingPx.coreShortSide,x,y,4);	
								
			x = (this.buildingPx.cornerWidth/2);				
			this.makeZone(
							this.buildingPx.cornerWidth, 
							this.buildingPx.coreShortSide,x,y,5);	
							
							
			var delegate = jQuery.proxy( this.onShowZone, this );
			$(lgb.view.gui).bind("SHOW_ZONE",delegate);	
					
			var delegate = jQuery.proxy( this.onSwitchViewPoint, this );
			$(lgb.view.gui).bind("SWITCH_VIEWPOINT",delegate);	
			
			
			

			var bb = floor5Model.getBoundingBox();
			
			var width3 = bb.maxExtent[0] - bb.minExtent[0]; //long side
			var depth3 = bb.maxExtent[1] - bb.minExtent[1]; //narrow side
			var height3 = bb.maxExtent[2] - bb.minExtent[2]; //floor height
			depth3 -= 6;
			
			
			var centerZ = depth3 /2;
			var centerY = height3 /2;
			var centerX = width3 /2;
			
			
			var target = [centerX, centerY, -centerZ];
			
			
			var vp = new hemi.view.Viewpoint();		// Create a new Viewpoint
			vp.eye = [19.064476890702007,99.79679347716126,-14.703124101926662];					// Set viewpoint eye
			vp.target = target;					// Set viewpoint target
			this.viewPoints[9] = vp;
		
			return;	
								
		},
		
		onSwitchViewPoint: function(event) {
			
			var idx = parseInt(event.zoneNumber);
			
			var viewPoint = this.viewPoints[idx];
			hemi.world.camera.moveToView(viewPoint,60);
			
		},
		onShowZone: function(event) {
			
			 
			var idx = parseInt(event.zoneNumber);
			
			if (idx > 8) return;
			
			var zoneShape = this.zones[idx];
			zoneShape.visible = event.visible;
			
		},
		
		makeZone: function(width,height, x, y, zoneNumber) {
			var shape = hemi.shape.create({
				shape: 'box',
				color: [1,0,0,0.4],
				h:  height, w: width, d: this.depth });
				
			shape.rotateX(4.715);
			shape.visible = false;
			shape.translate(x,y,(this.depth/2));
			
			var vp = new hemi.view.Viewpoint();		// Create a new Viewpoint
			vp.eye = [x,this.depth/2, -y-6];					// Set viewpoint eye
			vp.target = [x,this.depth/1.5, -y];					// Set viewpoint target
			
			this.zones[zoneNumber] = shape;
			this.viewPoints[zoneNumber] = vp;
			

			return;
			var shapeBlueCamera = hemi.shape.create({
				shape: 'box',
				color: [0,0,1,0.9],
				h:  1, w: 1, d: 1 });
				
			shapeBlueCamera.translate(vp.eye[0], vp.eye[1], vp.eye[2]);
			
			
			var shapeGreenTarget = hemi.shape.create({
				shape: 'box',
				color: [0,1,0,0.9],
				h:  1, w: 1, d: 1 });
				
			shapeGreenTarget.translate(vp.target[0], vp.target[1], vp.target[2]);
			
			

			
		}
		

		
		
		
	};
	


	return lgb;
	
})(lgb || {});










