/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2014 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.core.BaseController');

goog.require('goog.events.Event');
goog.require('lgb.core.BaseClass');

//TODO (Raj) change some of the listen() fucntions to 'bind'
/**
 * @constructor
 * @extends lgb.core.BaseClass
 */
lgb.core.BaseController = function() {
  lgb.core.BaseClass.call(this);
  
  this.childGUIcontrollers_ = [];
};
goog.inherits(lgb.core.BaseController, lgb.core.BaseClass);


lgb.core.BaseController.prototype.makeChildGUIcontroller_ = function(classReference, initArg) {

  var controller = new classReference();
    
  this.childGUIcontrollers_.push(controller);
  
  this.listenTo(
    controller,
    e.RequestAddToParentGUI, 
    this.onRequestAddToParentGUI_
    );
    
  
  if (undefined == initArg) {
    controller.init();
  } else {
    controller.init(initArg);
  }
  

  return controller;

};

lgb.core.BaseController.prototype.onRequestAddToParentGUI_ = function(event) {

  if (undefined == this.guiView.add) {
    debugger;
  }
  this.guiView.add(event.payload);
  
};


lgb.core.BaseController.prototype.triggerGUI = function(event) {

  this.guiView.init();
  this.triggerLocal(e.RequestAddToParentGUI, this.guiView);
  
};






/**
 * fires an event on the lgb global event bus
 * lgb.globalEventBus is the event target
 * @param {goog.events.Event} event The event object to dispatch.
 */
lgb.core.BaseController.prototype.dispatch = function(event) {
  goog.events.dispatchEvent(lgb.globalEventBus, event);
};


lgb.core.BaseController.prototype.trigger = function(type, payload) {
  
  var event = new lgb.core.Event(type, payload);
  
  goog.events.dispatchEvent(lgb.globalEventBus, event);
  
  
  
};


lgb.core.BaseClass.prototype.relayLocal = function(eventTarget, eventType) {
  this.listenTo(eventTarget, eventType, this.onRelayLocal_);
};


lgb.core.BaseClass.prototype.onRelayLocal_ = function(event) {
  this.dispatchLocal(event);
};


lgb.core.BaseClass.prototype.relay = function(eventTarget, eventType) {
  
  if (isArray(eventType)) {
    var that = this;
    eventType.forEach(
      function(oneEventType, idx, ary) {
        that.listenTo(eventTarget, oneEventType, that.onRelay_);
      }
    );
  } else {
    

    
    this.listenTo(eventTarget, eventType, this.onRelay_);
  }

};

lgb.core.BaseClass.prototype.onRelay_ = function(event) {
  this.dispatch(event);
};



