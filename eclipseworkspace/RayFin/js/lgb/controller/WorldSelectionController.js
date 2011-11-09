goog.provide('lgb.controller.WorldSelectionController');

goog.require('lgb.controller.ControllerBase');
goog.require('lgb.view.SelectionView');
goog.require('lgb.model.SelectableModel');
goog.require('lgb.events.SelectableLoaded');
goog.require('lgb.events.Object3DSelected');
goog.require('lgb.events.WorldSelectionChanged');

/**
 * @constructor
 * @extends lgb.controller.ControllerBase
 */
lgb.controller.WorldSelectionController = function(containerDiv, camera) {
	
	lgb.controller.ControllerBase.call(this);
	this.containerDiv_ = containerDiv;
	this.camera_ = camera;
	this.init_();

};
goog.inherits(lgb.controller.WorldSelectionController, lgb.controller.ControllerBase);


/**
 * @private
 */
lgb.controller.WorldSelectionController.prototype.init_ = function() {
	
	this.meshToSystemNodeMap= {
		TopDamper : 'MX',
		CenterDamper : 'MX',
		LeftDamper : 'MX',
		Fan : 'FAN',
		CoolingCoil : 'CC',
		HeatingCoil : 'HC',
		Filter : 'FLT'
	};
	
	this.systemNodeToMeshMap= {
		MX : ['TopDamper', 'CenterDamper', 'LeftDamper'],
		FAN : ['Fan'],
		CC : ['CoolingCoil'],
		HC : ['HeatingCoil'],
		FLT : ['Filter']
	};
	
	this.dataModel = new lgb.model.SelectableModel();
	this.view = new lgb.view.SelectionView(this.dataModel, this.containerDiv_, this.camera_);
	
	this.bind_();
	this.view.init();
};

/**
 * @private
 */
lgb.controller.WorldSelectionController.prototype.bind_ = function() {
	lgb.controller.WorldSelectionController.superClass_.bind.call(this);
	
	this.listen(lgb.events.SelectableLoaded.TYPE, this.onSelectableLoaded_);
	
	this.listenTo(this.view,
		lgb.events.Object3DSelected.TYPE,
		this.Object3DSelected_
		);
		
	this.listen(lgb.events.RequestWorldSelectionChange.TYPE,
		this.onRequestWorldSelectionChange_)
};


/**
 * @private
 * @param {lgb.events.RequestWorldSelectionChange} event Requesting that the selction
 * in the 3D world be changed.  Comes from the Properties Controller.
 */
lgb.controller.WorldSelectionController.prototype.onRequestWorldSelectionChange_ = function(event) {
	/**@type {string} */
	var id = event.payload;
	
	/**@type {Array.<string>} */
	var meshNames = this.systemNodeToMeshMap[id];
	if (null != meshNames) {
		this.dataModel.selectMeshList(meshNames);
	}
	
};



/**
 * @private
 * @param {lgb.events.Object3DSelected} event The event telling that 
 * a selection change has been made in the view.
 */
lgb.controller.WorldSelectionController.prototype.Object3DSelected_ = function(event) {
	/**@type {THREE.CollisionSystem} **/
	var mc = event.payload;
	this.dataModel.select(mc);
	
	var meshName = this.dataModel.getOneSelected();
	var id = this.meshToSystemNodeMap[meshName];
	
	if (id == null) {
		id = 'NONE';
	}
	
	var e = new lgb.events.WorldSelectionChanged(id);
	this.dispatch(e);
};


/**
 * @private
 * @param {lgb.events.SelectableLoaded} event the event telling
 * about a new 3d Object which has loaded.
 */
lgb.controller.WorldSelectionController.prototype.onSelectableLoaded_ = function(event) {
	this.dataModel.addMesh(event.payload);
}