/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2014 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.world.view.TrackBallView');

goog.require('goog.events.MouseWheelEvent');
goog.require('goog.events.MouseWheelHandler');
goog.require('lgb.world.view.BaseV');


/**
 * @constructor
 * @extends lgb.world.view.BaseV
 * @param {Object} camera The object to use usually the camera.
 * @param {Element} domElement The div to use as a touch pad.
 */
lgb.world.view.TrackBallView = function( camera) {
    

  /**@constant **/
  this._SENSITIVITY = -0.4;
  
  lgb.world.view.BaseV.call(this, null, "TrackBallView",  lgb.core.Config.WEBGL_CONTAINER_DIV_ID);

  var p = this.getParentElement();
  this.domElement_ = p.get(0);
  lgb.assert(this.domElement_);
  
  this.camera_ = camera;

  /**@type {THREE.TrackballControlsEx} */
  this.trackballControls = new THREE.TrackballControlsEx(camera, this.domElement_);
  
  this.init_();
};
goog.inherits(lgb.world.view.TrackBallView, lgb.world.view.BaseV);


/**
 * Initializes the TrackballControls
 * @private
 */
lgb.world.view.TrackBallView.prototype.init_ = function() {

  this.trackballControls.rotateSpeed = 1.0;
  this.trackballControls.zoomSpeed = 1.2;
  this.trackballControls.panSpeed = 0.8;

  this.trackballControls.staticMoving = true;
  this.trackballControls.dynamicDampingFactor = 0.3;

  this.orbitRadius = 30;

  this.bind_();
};


/**
 * Binds specific event types to functions which handle the events.
 * If no event target is specified then the listener is set  on the global
 * event bus.
 * @private
 */
lgb.world.view.TrackBallView.prototype.bind_ = function() {

  this.listen(e.RenderNotify, this.d(this.onRender));

  this.mouseWheelHander = new goog.events.MouseWheelHandler(this.domElement_);

  this.listenKey_ = this.listenTo(
    this.mouseWheelHander,
    goog.events.MouseWheelHandler.EventType.MOUSEWHEEL,
    this.d(this.onMouseWheel_)
  );
};


/**
 * @param {THREE.Vector3} target The target to look at.
 */
lgb.world.view.TrackBallView.prototype.setCameraTarget = function(target) {

  if (undefined === target) {
     this.trackballControls.target = new THREE.Vector3(0, 0, 0);
  } else {
    this.trackballControls.target = target;
  }

};


/**
 * //TODO (Raj) Get this dispose to work and test memory footprint.
 * experimental
 */
lgb.world.view.TrackBallView.prototype.disposeInternal = function() {
  
  if (this.listenKey_) {
    this.unlisten(this.listenKey_);
    delete this.listenKey_;
  }
};


/**
 * @private
 * @param {goog.events.MouseWheelEvent} event The event telling how
 * far the wheel has moved.
 */
lgb.world.view.TrackBallView.prototype.onMouseWheel_ = function(event) {

  var delta = event.deltaY * this._SENSITIVITY;

  if (delta) {
    this.trackballControls.zoomNow(delta);
  }
};


/**
 * Event handler for when the scene is rendered.
 * @param {e.RenderNotify} event The event fired by the
 * worldController.
 */
lgb.world.view.TrackBallView.prototype.onRender = function(event) {
  this.trackballControls.update();
};












