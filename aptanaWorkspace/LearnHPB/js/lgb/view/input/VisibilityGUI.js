/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.view.input.VisibilityGUI');

goog.require('lgb.model.VisibilityModel');
goog.require('lgb.view.BaseViewGUI');

goog.require('lgb.view.BaseViewGUI');
goog.require('lgb.component.TreeH');
goog.require('lgb.component.TreeDataSourceH');
goog.require('lgb.Config');

/**
 * @constructor
 * @param {lgb.model.VisibilityModel} dataModel The data model to display.
 * @extends {lgb.view.BaseViewGUI}
 */
lgb.view.input.VisibilityGUI = function(dataModel) {

  this._TITLE = "Visibility";
  this.layoutID = lgb.Config.LAYOUT_ID.Visibility;
  lgb.view.BaseViewGUI.call(this, dataModel);

};
goog.inherits(lgb.view.input.VisibilityGUI, lgb.view.BaseViewGUI);


/**
 * Initializes the View
 */
lgb.view.input.VisibilityGUI.prototype.init = function() {
  
  this.treeComponent_ = null;
  this.treeDS_ = null;
  
  this.treeDSlist_ = [];

};

lgb.view.input.VisibilityGUI.prototype.init2_ = function(lgbNode) {
  
  this.treeDS_ = new lgb.component.TreeDataSourceH(lgbNode,'isVisible',this.htmlID,  'tree', 'Visibility');

  this.treeDS_.setOptions (
    {
      events : {mouseOver:false}
    }
  );
  
  
  
  this.listenTo(this.treeDS_,
    e.DataModelChanged,
    this.onDataModelChanged_);  
    
  this.treeComponent_ = new lgb.component.TreeH(this.treeDS_);
  
  
  var treeElement = this.treeComponent_.getHtml();
  this.append(treeElement);
  this.triggerLocal(e.RequestAddToTestingInput, this);
   

};


lgb.view.input.VisibilityGUI.prototype.onChange = function(event) {
  
  var lgbNode = event.payload;
  
  if (this.treeDS_ == null) {
    this.init2_(lgbNode);
  } else {
    this.treeDS_.update(lgbNode);
  }

};



lgb.view.input.VisibilityGUI.prototype.onDataModelChanged_ = function(event) {

    this.triggerLocal(e.RequestDataModelChange, event.payload);
};





lgb.view.input.VisibilityGUI.prototype.onChangeDataSource_ = function(event) {

    this.triggerLocal(e.RequestDataModelChange, event.payload);
};


