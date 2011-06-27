

var lgb = (function(lgb) {

	lgb.view = lgb.view || {};

	/**
	 * @class MVC view for displaying the building envelope
	 * @extends lgb.view.ViewBase
	 */
	lgb.view.EnvelopeView = function(){
		
		lgb.view.ViewBase.call(this);
				
		this.buildingFloors = [];
		this.dataModel = null;
		//this.floorsCreated = 0;
		this.parentTransform = null;
		
		this.meshList = [];
		this.currentFloorMesh = null;
		
	};
	
	lgb.view.EnvelopeView.prototype = {
	
	
		init : function(dataModel) {
			
			this.dataModel = dataModel;
			
			
			this.listen(lgb.event.EnvelopeEvent.DATA_MODEL_CHANGED, this.onDataModelChanged);
			this.listen(lgb.event.Event.ALL_MESHES_LOADED, this.onMeshesLoaded);
			
		},
		
		show : function() {
			this.cleanup();
			this.createFloors();
		},
		
		cleanup : function() {
			var len = this.buildingFloors.length;
			
			for (var i=0; i<len; i++) {
				
				this.buildingFloors[i].shapes = [];
				this.buildingFloors[i].recalculateBoundingBox();
				this.buildingFloors[i] = null;
			}
			this.buildingFloors = [];
			
		},		
			
		createFloors : function() {
			
			var idx = this.dataModel.floorHeight.toString();
			this.currentFloorMesh = this.meshList [idx];
			

			
			var core = hemi.core,
				pack = core.mainPack,
				shapes = this.currentFloorMesh.getShapes(),
				boundingBox = this.currentFloorMesh.root.boundingBox,
				floorHeightGL = boundingBox.maxExtent[2] - boundingBox.minExtent[2];
			

			for (var i=0; i < this.dataModel.totalFloors; i++) {
				
				var transform = pack.createObject('Transform');  //o3d.Transform
				transform.parent = this.buildingParent;
				
				transform.shapes = transform.shapes.concat(shapes);

				transform.recalculateBoundingBox();
				this.buildingFloors.push(transform);
				
				if (i > 0) {
					var delta = floorHeightGL * (i);
					transform.translate(0, 0, delta);
				}
			}

		},
		
		
		/**
		 * Calculate the center point of the Model's bounding box.
		 * 
		 * @return {Array} [x,y,z] point in 3D space
		 */
		getCenterPoint: function() {
			this.buildingParent.recalculateBoundingBox();
			var boundingBox = this.buildingParent.boundingBox;
			
			var xExt = boundingBox.maxExtent[0] - boundingBox.minExtent[0],
				yExt = boundingBox.maxExtent[1] - boundingBox.minExtent[1],
				zExt = boundingBox.maxExtent[2] - boundingBox.minExtent[2];
 
			var center = [xSpan / 2, ySpan / 2, zSpan / 2];
			
			return center;
		},
		
		
/*
		position : function(event) {
			
			this.buildingParent.recalculateBoundingBox();
			var boundingBox = this.buildingParent.boundingBox;
			
			var xExt = boundingBox.maxExtent[0] - boundingBox.minExtent[0],
				yExt = boundingBox.maxExtent[1] - boundingBox.minExtent[1],
				zExt = boundingBox.maxExtent[2] - boundingBox.minExtent[2];
			
			var xDelta = -1 * (xExt / 2),
				yDelta = -1 * (yExt / 2),
				zDelta = -1 * (zExt / 2);
			
			this.buildingParent.translate(xDelta,yDelta,zDelta);
		},
*/

		onMeshesLoaded : function(event) {
		
			
			this.buildingParent =  hemi.core.mainPack.createObject('Transform');
			this.buildingParent.parent = hemi.core.client.root;
			
			this.meshList['9']= mainController.loader.modelList['9FootEnvelope'];
			this.meshList['11']= mainController.loader.modelList['11FootEnvelope'];
			this.meshList['13']= mainController.loader.modelList['13FootEnvelope'];

			this.meshList['9'].setTransformVisible(this.meshList['9'].root, false);
			this.meshList['11'].setTransformVisible(this.meshList['11'].root, false);
			this.meshList['13'].setTransformVisible(this.meshList['13'].root, false);
			
			this.position();
			this.show();
			this.showBoundingBox();
		},
		
		showBoundingBox : function() {
			//var radians = hemi.core.math.degToRad(270);
			//this.buildingParent.rotateX( radians);
		},
		
		position : function() {
			//var radians = hemi.core.math.degToRad(270);
			//this.buildingParent.rotateX( radians);
		},
		
		onDataModelChanged : function(event) {
			this.show();
		},

		getMeshList: function() {
			
			var modelAry = [
				{file: '9FootEnvelope.json', mode: 'ENVELOPE', name: '9FootEnvelope'},
				{file: '11FootEnvelope.json', mode: 'ENVELOPE', name: '11FootEnvelope'},
				{file: '13FootEnvelope.json', mode: 'ENVELOPE', name: '13FootEnvelope'}
			];
			
			return modelAry;
		}
		
	};

	lgb.view.EnvelopeView.inheritsFrom(lgb.view.ViewBase);
	
	return lgb;
	
})(lgb || {});










