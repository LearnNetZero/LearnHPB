goog.provide('lgb.gui.controller.ScenarioController');

goog.require('lgb.core.BaseController');

goog.require('lgb.gui.model.BaseGuiModel');
goog.require('lgb.scenario.model.ScenarioModel');
goog.require('lgb.scenario.model.SystemList');

goog.require('lgb.gui.view.ScenarioGUI');
goog.require('lgb.scenario.view.SystemList');

goog.require('lgb.scenario.model.SystemList');



/**
 * @constructor
 * @extends {lgb.core.BaseController}
 */
lgb.gui.controller.ScenarioController = function() {

  lgb.core.BaseController.call(this);
};
goog.inherits(lgb.gui.controller.ScenarioController, lgb.core.BaseController);


/**
 * Initializes the Main Controller after the document is ready
 */
lgb.gui.controller.ScenarioController.prototype.init = function(systemListDataModel) {

  this.systemListDataModel_ = systemListDataModel;
  this.systemListView_ = new lgb.scenario.view.SystemList (this.systemListDataModel_, true);
  
  this.bind_();
  
  this.dataModel = new lgb.gui.model.BaseGuiModel();
  

  
  this.guiView = new lgb.gui.view.ScenarioGUI(this.dataModel);
  
  
  this.guiView.init();
  
  
  this.guiView.add(this.systemListView_);
  // this.variableList_ = systemListView.getVariables();
  
  this.triggerLocal(e.RequestAddToParentGUI, this.guiView);

  
  
};





lgb.gui.controller.ScenarioController.prototype.bind_ = function() {
  
      this.listenTo(
        this.systemListDataModel_, 
        se.RequestModelicaVariableChange,
        this.onRequestModelicaVariableChange_
        );

      this.listen (
        e.DisplayUnitSystemChangeRequest,
        this.onDisplayUnitSystemChangeRequest_
        );

      
};


lgb.gui.controller.ScenarioController.prototype.onDisplayUnitSystemChangeRequest_ = function(event) {
  



};


lgb.gui.controller.ScenarioController.prototype.onRequestModelicaVariableChange_ = function(event) {
  

  return;

};