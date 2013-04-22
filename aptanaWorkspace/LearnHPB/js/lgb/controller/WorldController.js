/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.controller.WorldController');

goog.require('lgb.controller.BuildingController');
goog.require('lgb.controller.CameraController');
goog.require('lgb.controller.ControllerBase');
goog.require('lgb.controller.PsControllerMaster');
goog.require('lgb.controller.TrackBallController');
goog.require('lgb.controller.UtilityController');
goog.require('lgb.controller.ViewPointController');
goog.require('lgb.controller.WorldSelectionController');
goog.require('lgb.events.Object3DLoaded');
goog.require('lgb.events.Render');
goog.require('lgb.events.WindowResize');
goog.require('lgb.view.StatsView');
goog.require('lgb.events.WorldCreated');
goog.require('lgb.events.LayoutChange');

/**
 * MVC controller for the App
 * @constructor
 * @extends lgb.controller.ControllerBase
 * @param {Element} containerDiv The DIV to use
 * when we render 3D.
 */
lgb.controller.WorldController = function() {
  this._NAME = 'lgb.controller.WorldController';
  lgb.controller.ControllerBase.call(this);
  this.parentHtmlID = lgb.Config.HUD_CONTAINER_STR;
};
goog.inherits(lgb.controller.WorldController, lgb.controller.ControllerBase);


/**
 * Initializes the WorldController Controller after the document is ready
 */
lgb.controller.WorldController.prototype.init = function() {
  this.timestamp = 0;
  this.containerDiv_ = $('#' + this.parentHtmlID);
    
  /**
   * The top-level this.containerDiv_ object in the THREE.js world
   * contains lights, camera and objects
   * @type {THREE.Scene}
   * @private
   */
  this.scene_ = new THREE.Scene();
  this.initRenderer_();
  
  this.calculateSize_();
  this.bind_();

  /**
   * The one and only Camera that views the 3d scene
   * @type {lgb.controller.CameraController}
   * @private
  **/
   this.cameraController_ = new lgb.controller.CameraController(
    this.renderer_.domElement
  );

  this.camera_ = this.cameraController_.getCamera();
  this.scene_.add(this.camera_);

  this.initLights_();


  if (lgb.Config.SHOW_STATS) {
   // this.statsView_ = new lgb.view.StatsView(this.containerDiv_);
  } else {
    this.statsView_ = null;
  }

  this.viewpointController_ = new lgb.controller.ViewPointController();

  /**
    * @type {lgb.controller.BuildingController}
    * @private
  */
  this.buildingController_ = new lgb.controller.BuildingController();
 
 
  /**
   * The grid on the floor and the axis arrows
   * type {lgb.controller.UtilityController}
   * private
  */
  this.utilityController_ = new lgb.controller.UtilityController();

  /**@type {lgb.controller.PsControllerMaster} */
  this.PsControllerMaster_ = new lgb.controller.PsControllerMaster();

  /**@type {lgb.controller.WorldSelectionController} */
  this.selectionController_ =
    new lgb.controller.WorldSelectionController(
      this.camera_
  );

  /** @type {lgb.controller.TrackBallController} */
  this.trackController_ = new lgb.controller.TrackBallController(
    this.camera_
  );
  

  
  this.containerDiv_.append(this.renderer_.domElement);
  
  var e = new lgb.events.WorldCreated();
  this.dispatch(e);
};

/**
 * configures lights and adds them to the scene
 * @private
 */
lgb.controller.WorldController.prototype.initLights_ = function() {
  /**
   * light source 1
   * @type {THREE.AmbientLight}
   * @private
   */

  this.ambientLight_ = new THREE.AmbientLight(0x111111);
  this.scene_.add(this.ambientLight_);

  this.light1_ = new THREE.DirectionalLight( 0xffffff, 1.0 , 40);
  this.light1_.position.set( 0, 70, -45 );
  
  this.scene_.add( this.light1_ );

  this.light2_ = new THREE.DirectionalLight( 0xffffff, 0.8 , 40);
  this.light2_.position.set( -45, -70, 0 );
  this.scene_.add( this.light2_ );

  this.light3_ = new THREE.DirectionalLight( 0xffffff, 1.3 , 40);
  this.light3_.position.set( 45, 0, 45 );
  this.scene_.add( this.light3_ );
  
};


/**
 * initialize the renderer in a browser specific way
 * @private
 */
lgb.controller.WorldController.prototype.initRenderer_ = function() {
  /**
   * @type {THREE.WebGLRenderer}
   * @private
   */
  this.renderer_ = new THREE.WebGLRenderer({ antialias: false });
  this.renderer_.domElement.id='wbGLrenderer';

/*
  this.renderer_.shadowCameraNear = 3;
  this.renderer_.shadowCameraFar = 300;
  this.renderer_.shadowCameraFov = 30;
  this.renderer_.shadowMapBias = 0.0039;
  this.renderer_.shadowMapDarkness = 1;
  this.renderer_.shadowMapWidth = 1024;
  this.renderer_.shadowMapHeight = 1024;
  this.renderer_.shadowMapEnabled = true;
  this.renderer_.shadowMapSoft = false;
*/

  this.renderEvent = new lgb.events.Render();

  if (window.webkitRequestAnimationFrame) {
    this.renderDelegate = this.d(this.onRenderWebkit_);
    window.webkitRequestAnimationFrame(this.renderDelegate);
  } else if (window.mozRequestAnimationFrame) {
    this.renderDelegate = this.d(this.onRenderMoz_);
    window.mozRequestAnimationFrame(this.renderDelegate);
  } else if (window.oRequestAnimationFrame) {
    this.renderDelegate = this.d(this.onRenderOReq_);
    window.oRequestAnimationFrame(this.renderDelegate);
  } else {
    this.renderDelegate = this.d(this.onRenderMisc_);
    window.requestAnimationFrame(this.renderDelegate);
  }
};





/**
 * Binds specific event types to functions which handle the events.
 * If no event target is specified then the listener is set  on the global
 * event bus.
 * @private
 */
lgb.controller.WorldController.prototype.bind_ = function() {
  this.listen(lgb.events.Object3DLoaded.TYPE, this.onObject3DLoaded_);
  this.listen(lgb.events.WindowResize.TYPE, this.onWindowResize_);
    
  this.listen(
      lgb.events.LayoutChange.TYPE, 
      this.onLayoutChange_);
};

lgb.controller.WorldController.prototype.onLayoutChange_ = function(event) {
  this.calculateSize_();
};

/**
 * Handles an event fired by View classes
 * @private
 * @param {lgb.events.Object3DLoaded} event The event that tells us
 * the Object3D that the event target would like to load.
 */
lgb.controller.WorldController.prototype.onObject3DLoaded_ = function(event) {
  var obj = event.payload;

  if ('' == obj.name) {
    throw ('Please name the THREE.Object3D before ' +
    'you request to add it to the scene.');
  } else {
    lgb.logInfo('adding to scene: ' + obj.name);
  }

  this.scene_.add(obj);
};


/**
 * Handles an event fired by the browser when the user resizes the window
 * @private
 * @param {lgb.events.WindowResize} event the event.
 */
lgb.controller.WorldController.prototype.onWindowResize_ =
  function(event) {

  this.calculateSize_();
};


/**
 * sets the canvas size based on the window size
 * @private
 */
lgb.controller.WorldController.prototype.calculateSize_ = function() {
    
    var container = $(lgb.Config.HUD_CONTAINER);
    
    var w = this.containerDiv_.width();
    var h = this.containerDiv_.height();
    
    this.renderer_.setSize(w,h);

};


/**
 * platform specific render function for unknown browser
 * @private
 * @param {number} timestamp A timestamp.
 */
lgb.controller.WorldController.prototype.onRenderOReq_ = function(timestamp) {
  window.oRequestAnimationFrame(mainController.worldController_.onRenderOReq_);
  mainController.worldController_.renderHelper(timestamp);
};


/**
 * platform specific render function for mozilla browser
 * @private
 * @param {number} timestamp A timestamp.
 */
lgb.controller.WorldController.prototype.onRenderMoz_ = function(timestamp) {

  window.mozRequestAnimationFrame(mainController.worldController_.onRenderMoz_);
  mainController.worldController_.renderHelper(timestamp);
};


/**
 * platform specific render function for chrome browser
 * @private
 * @param {number} timestamp A timestamp.
 */
lgb.controller.WorldController.prototype.onRenderWebkit_ = function(timestamp) {

  window.webkitRequestAnimationFrame(
      mainController.worldController_.onRenderWebkit_
    );

  mainController.worldController_.renderHelper(timestamp);
};


/**
 * platform specific render function for misc browser
 * untested.
 * @private
 * @param {number} timestamp A timestamp.
 */
lgb.controller.WorldController.prototype.onRenderMisc_ = function(timestamp) {

  window.requestAnimationFrame(mainController.worldController_.onRenderMisc_);
  mainController.worldController_.renderHelper(timestamp);
};


/**
 * platform independant render function
 * I made this 'public' in an effort to optimize the render loop.
 * @param {number} timestamp A timestamp.
 */
lgb.controller.WorldController.prototype.renderHelper = function(timestamp) {
  //TODO (Raj): further optimze the render loop removing the Tween stuff.

  var currentTimeStamp = timestamp;
  var delta = 0;

  if (this.timestamp != 0) {
    delta = currentTimeStamp - this.timestamp;
  }

  this.timestamp = currentTimeStamp;
  createjs.Tween.tick(delta, false);
  

  //THREE.AnimationHandler.update( 1/60 );
  this.renderEvent.payload = timestamp;

  goog.events.dispatchEvent(lgb.globalEventBus, this.renderEvent);
  this.renderer_.render(this.scene_, this.camera_);

};
