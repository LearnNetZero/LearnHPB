goog.provide('lgb.controller.ViewPointController');

goog.require('lgb.controller.ControllerBase');
goog.require('lgb.view.ViewPointAdminView');
goog.require('lgb.model.ViewPointModel');

goog.require('lgb.events.CamerasLoaded');
goog.require('lgb.events.RequestGoToViewPoint');
goog.require('lgb.events.RequestGoToViewPointName');

/**
 * @constructor
 * @extends lgb.controller.ControllerBase
 */
lgb.controller.ViewPointController = function( ) {
  lgb.controller.ControllerBase.call(this);
  this.init_();
};

goog.inherits(lgb.controller.ViewPointController, lgb.controller.ControllerBase);


/**
 * Initialized the controller.
 */
lgb.controller.ViewPointController.prototype.init_ = function() {
  
  this.dataModel = new lgb.model.ViewPointModel();
  this.adminView = new lgb.view.ViewPointAdminView (this.dataModel, 'adminView');
  //this.adminView.init();
  this.bind_();

};


/**
 * Binds specific event types to functions which handle the events.
 * If no event target is specified then the listener is set  on the global
 * event bus.
 * @private
 */
lgb.controller.ViewPointController.prototype.bind_ = function() {

  this.listen(
    lgb.events.CamerasLoaded.TYPE,
    this.onCamerasLoaded_);


  this.listenTo(
    this.adminView,
    lgb.events.RequestGoToViewPoint.TYPE,
    this.onRequestGoToViewPoint_
  );
  
  
  this.listen(
    lgb.events.RequestGoToViewPointName.TYPE,
    this.onRequestGoToViewPointName_
    );
    
    
};

/**
 * @private
 * @param {lgb.events.CamerasLoaded} event Fired by the view.
 */
lgb.controller.ViewPointController.prototype.onRequestGoToViewPoint_ =
  function(event) {
  
  this.dispatch(event);

};

/**
 * @private
 * @param {lgb.events.RequestGoToViewPointName} event Fired by one of
 * the views.
 */
lgb.controller.ViewPointController.prototype.onRequestGoToViewPointName_ =
  function(event) {

  var camera = this.dataModel.getCameraByName(event.payload);
  
  this.dispatch(new lgb.events.RequestGoToViewPoint(camera));

};

/**
 * @private
 * @param {lgb.events.CamerasLoaded} event Fired by the view.
 */
lgb.controller.ViewPointController.prototype.onCamerasLoaded_ =
  function(event) {
  
  this.dataModel.addCameras(event.payload);
  this.adminView.init();
  
};
