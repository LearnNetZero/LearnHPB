/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.view.input.ViewpointGUI');

goog.require('lgb.model.ViewpointModel');
goog.require('lgb.view.input.BaseViewGUI');
goog.require('lgb.Config');
goog.require('lgb.component.TreeDataSourceH');


/**
 * @constructor
 * @param {lgb.model.ViewpointModel} dataModel The data model to display.
 * @param {string} parentHtmlID the CSS id of the parent to inject into the DOM.
 * @extends {lgb.view.input.BaseViewGUI}
 */
lgb.view.input.ViewpointGUI = function(dataModel) {
  
  this._TITLE = "Viewpoints";
  this.layoutID = lgb.Config.LAYOUT_ID.Viewpoints;
  
  lgb.view.input.BaseViewGUI.call(this, dataModel, 'ViewpointGUI');
  
  this.listenForChange_('viewpointNode');
};
goog.inherits(lgb.view.input.ViewpointGUI, lgb.view.input.BaseViewGUI);


/**
 * Initializes the View
 */
lgb.view.input.ViewpointGUI.prototype.init = function() {
  
  this.treeComponent_ = null;
  this.treeDS_ = null;
  
  this.treeDSlist_ = [];

};

lgb.view.input.ViewpointGUI.prototype.init2_ = function(viewpointNode) {
  
  this.treeDS_ = new lgb.component.TreeDataSourceH(viewpointNode, null, this.htmlID,  'tree', 'ViewpointTreeDataSourceH');
  
  var options =  (
    {
      events : {mouseOver:true}
    }
  );

  this.treeDS_.setOptions(options);
  this.treeComponent_ = new lgb.component.TreeH(this.treeDS_);
  
  var treeElement = this.treeComponent_.getHtml();
  this.append(treeElement);
  
  this.bind_();
  this.triggerLocal(e.RequestAddToTestingInput, this);
   
};





lgb.view.input.ViewpointGUI.prototype.bind_ = function() {
  
  this.listenForChangeTargetInit_(this.treeDS_);
  this.listenForChange_('showKNode', this.treeDS_);
  this.listenForChange_('hideKNode', this.treeDS_);
  this.listenForChange_('selectedKNode', this.treeDS_);

};


lgb.view.input.ViewpointGUI.prototype.onChange_selectedKNode_ = function(kNode) {
  

  var viewpointNode = this.dataModel.getViewpoint(kNode);
  
  if (null == viewpointNode) {
    debugger;
  } else {
    
    viewpointNode.updateWorldPositions();
                  
    if (null != viewpointNode) {
      this.triggerLocal(e.RequestGoToViewpointNode, viewpointNode);
    }
  }
};


lgb.view.input.ViewpointGUI.prototype.onChange_hideKNode_ = function(kNode) {
  this.triggerRequestShowViewpoint_(kNode, false);
};


lgb.view.input.ViewpointGUI.prototype.onChange_showKNode_ = function(kNode) {
  this.triggerRequestShowViewpoint_(kNode, true);
};


lgb.view.input.ViewpointGUI.prototype.onChange_viewpointNode_ = function(viewpointNode) {
  
  if (this.treeDS_ == null) {
    this.init2_(viewpointNode);
  } else {
    this.treeDS_.update(viewpointNode);
  }

};


lgb.view.input.ViewpointGUI.prototype.triggerRequestShowViewpoint_= function(kNode, isVisible) {

  var viewpointNode = this.dataModel.getViewpoint(kNode);
  if (null == viewpointNode) {
    debugger;
  } 
  
  if (null != viewpointNode && null != viewpointNode.parent) {
    
    if (viewpointNode.parent.title =="Zones") {
      viewpointNode.isVisible = isVisible;
      this.triggerLocal(e.RequestShowViewpoint, viewpointNode);
    }
  }

};





