/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.scenario.view.SystemList');

goog.require('lgb.scenario.view.BaseView');
goog.require('lgb.scenario.view.System');


lgb.scenario.view.SystemList = function(dataModel, debugFlag) {
  lgb.scenario.view.BaseView.call(this, dataModel, debugFlag);
};
goog.inherits(lgb.scenario.view.SystemList, lgb.scenario.view.BaseView);




lgb.scenario.view.SystemList.prototype.init = function() {
   this.triggerLocal(e.RequestAddToParentGUI);
};

lgb.scenario.view.SystemList.prototype.getVariables = function() {
  return lgb.scenario.view.Variable.variablesList;
};


lgb.scenario.view.SystemList.prototype.appendTo = function(parentElement) {
  
  this.injectTo(parentElement);
  
  this.append(this.dataModel.name);
  this.makeChildren_(parentElement);
  
};


lgb.scenario.view.SystemList.childClassMap = {
    "System" : lgb.scenario.view.System
};

