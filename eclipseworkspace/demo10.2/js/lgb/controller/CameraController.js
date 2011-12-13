goog.provide('lgb.controller.CameraController');

goog.require('lgb.controller.ControllerBase');
goog.require('lgb.view.CameraView');
goog.require('lgb.events.RequestGoToViewPoint');

/**
 * @constructor
 * @extends lgb.controller.ControllerBase
 */
lgb.controller.CameraController = function(domElement) {
  lgb.controller.ControllerBase.call(this);
  
  this.domElement_ = domElement;
  this.init_();
};
goog.inherits(lgb.controller.CameraController, lgb.controller.ControllerBase);


/**
 * @private
 */
lgb.controller.CameraController.prototype.init_ = function() {

  this.view = new lgb.view.CameraView(this.domElement_);
  this.view.init();
  this.bind_();
};

lgb.controller.CameraController.prototype.getCamera = function() {

  return this.view.camera;

};

/**
 * Binds specific event types to functions which handle the events.
 * If no event target is specified then the listener is set  on the global
 * event bus.
 * @private
 */
lgb.controller.CameraController.prototype.bind_ = function() {

  this.listen(
    lgb.events.RequestGoToViewPoint.TYPE,
    this.onRequestGoToViewPoint_
  );
  
};

/**
 * @private
 * @param {lgb.events.CamerasLoaded} event Fired by the view.
 */
lgb.controller.CameraController.prototype.onRequestGoToViewPoint_ =
  function(event) {
  
  this.view.goToViewPoint(event.payload);

};

