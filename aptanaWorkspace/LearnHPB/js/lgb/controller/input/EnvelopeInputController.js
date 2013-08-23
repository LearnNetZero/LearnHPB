/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.controller.input.EnvelopeInputController');

goog.require('lgb.controller.BaseController');
goog.require('lgb.model.input.BaseInputModel');
goog.require('lgb.view.input.EnvelopeInputGUI');

/**
 * @constructor
 * @extends lgb.controller.BaseController
 */
lgb.controller.input.EnvelopeInputController = function( ) {

  lgb.controller.BaseController.call(this);
  
  this.listen(
    e.ScenarioParsed2,
    this.onScenarioParsed2_
  );
  
};
goog.inherits(lgb.controller.input.EnvelopeInputController, lgb.controller.BaseController);


/**
 * Initialized the controller.
 */
lgb.controller.input.EnvelopeInputController.prototype.init = function() {
  
  this.dataModel = new lgb.model.input.BaseInputModel();
  this.guiView = new lgb.view.input.EnvelopeInputGUI (this.dataModel);

  this.bind_();
  this.guiView.init();
  
};



lgb.controller.input.EnvelopeInputController.prototype.bind_ = function() {
  
  this.relayLocal(
    this.guiView,
    e.RequestAddToParentGUI);

};


lgb.controller.input.EnvelopeInputController.prototype.onScenarioParsed2_ = function(event) {
  

  var systemList = event.payload;
  var system = systemList.getSystem('Envelope');
  
  var systemView = new lgb.view.scenario.System (system);
  
  this.guiView.add(systemView);
};

