/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2014 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.gui.controller.ScenarioMasterController');

goog.require('lgb.core.BaseController');
goog.require('lgb.gui.model.ScenarioMasterModel');
goog.require('lgb.gui.view.ScenarioMasterGUI');
goog.require('lgb.scenario.controller.ScenarioController');

/**
 * @constructor
 * @extends lgb.core.BaseController
 */
lgb.gui.controller.ScenarioMasterController = function() {

  lgb.core.BaseController.call(this);


};
goog.inherits(lgb.gui.controller.ScenarioMasterController, lgb.core.BaseController);


lgb.gui.controller.ScenarioMasterController.prototype.init = function() {
  
  this.dataModel = new lgb.gui.model.ScenarioMasterModel();
  this.guiView = new lgb.gui.view.ScenarioMasterGUI(this.dataModel);
  
  this.bind_();
  
  this.guiView.init();
  
  this.triggerLocal(e.RequestAddToParentGUI, this.guiView);
  this.trigger(e.RequestLoadScenario, this.dataModel.selectedFileName);
  
};





lgb.gui.controller.ScenarioMasterController.prototype.bind_ = function() {
  
  
  this.relay(this.guiView, e.RequestLoadScenario);
  
  this.listen(e.RequestLoadScenario, this.onRequestLoadScenario_);
    
    
};



lgb.gui.controller.ScenarioMasterController.prototype.onRequestLoadScenario_ =
  function(event) {

  
    //his.dataModel.changePropertyEx('selectedFileName', value);
    
     this.guiView.showPopup_(event.payload + "_start.html");
  
};




