/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.scenario.view.SubSystem');

goog.require('lgb.scenario.view.BaseView');
goog.require('lgb.scenario.view.Category');



lgb.scenario.view.SubSystem = function(dataModel, debugFlag) {
  lgb.scenario.view.BaseView.call(this, dataModel, debugFlag);
};
goog.inherits(lgb.scenario.view.SubSystem, lgb.scenario.view.BaseView);


lgb.scenario.view.SubSystem.prototype.appendTo = function(parentElement) {
  
  this.injectInto(parentElement);
  this.appendTitle_();
  this.makeChildrenAndListen_(parentElement);
  
};


lgb.scenario.view.SubSystem.prototype.getMainElement = function() {

  if (undefined == this.mainElement_) {
    this.mainElement_ = $('<h2>');
    
    if (undefined != this.htmlID) {
      this.mainElement_.attr('id', this.htmlID);
    }

  }

  return this.mainElement_;
};




lgb.scenario.view.SubSystem.childClassMap = {
    "Category" : lgb.scenario.view.Category,
    "Variable" : lgb.scenario.view.Variable
};




