/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.controller.LayoutController');

goog.require('lgb.controller.ControllerBase');
goog.require('goog.debug.Logger');
goog.require('lgb.Config');
goog.require('lgb.view.LayoutView');
goog.require('lgb.events.WindowResize');
goog.require('lgb.events.LayoutChange');

/**
 * MVC controller for the App
 * @constructor
 * @extends lgb.controller.ControllerBase
 */
lgb.controller.LayoutController = function() {
  lgb.controller.ControllerBase.call(this);

};
goog.inherits(lgb.controller.LayoutController, lgb.controller.ControllerBase);



/**
 * Initializes the Main Controller after the document is ready
 */
lgb.controller.LayoutController.prototype.init = function() {

    this.view  = new lgb.view.LayoutView();
    this.bind_();
    this.view.init();
};





lgb.controller.LayoutController.prototype.bind_ = function() {
    
  this.listen(lgb.events.WindowResize.TYPE, this.onWindowResize_);
  
  this.listenTo(
      this.view, 
      lgb.events.LayoutChange.TYPE, 
      this.onLayoutChange_);
};


/**
 * Event handler for browser resize
 * @param {goog.events.Event} event The Event.
 */
lgb.controller.LayoutController.prototype.onWindowResize_ = function(event) {
    this.view.calculateLayout();
   // this.view.triggerSplitter1Resize_();
};

lgb.controller.LayoutController.prototype.onLayoutChange_ = function(event) {
    
    this.view.calculateLayout();
    
    this.dispatch(event);
    
};

