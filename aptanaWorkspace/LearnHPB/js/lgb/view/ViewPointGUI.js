/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.view.ViewPointGUI');

goog.require('lgb.component.Link');
goog.require('lgb.component.LinkDataSource');
goog.require('lgb.events.MouseClick');
goog.require('lgb.events.MouseOut');
goog.require('lgb.events.MouseOver');
goog.require('lgb.events.RequestGoToViewPoint');
goog.require('lgb.events.RequestShowViewPoint');

goog.require('lgb.model.ViewPointModel');
goog.require('lgb.view.BaseView');


/**
 * @constructor
 * @param {lgb.model.ViewPointModel} dataModel The data model to display.
 * @param {string} parentHtmlID the CSS id of the parent to inject into the DOM.
 * @extends {lgb.view.BaseView}
 */
lgb.view.ViewPointGUI = function(dataModel) {

  this._NAME = 'lgb.view.ViewPointGUI';
  lgb.view.BaseView.call(this, dataModel,'ViewPointGUI', 'leftpanel-tabStrip-1');
};
goog.inherits(lgb.view.ViewPointGUI, lgb.view.BaseView);


/**
 * Initializes the View
 */
lgb.view.ViewPointGUI.prototype.init = function() {
  this.injectHtml();
  
    //this.kendoTreeView_.bind("dataBound", this.d(this.onDataBound_));
  this.kendoTreeView_.setDataSource(this.dataModel.kendoDS);
  this.bind_();
};



lgb.view.ViewPointGUI.prototype.onDataBound_ = function(event) {
  this.bind_();
  
}

/**
 * Binds specific event types to functions which handle the events.
 * If no event target is specified then the listener is set  on the global
 * event bus.
 * @private
 */
lgb.view.ViewPointGUI.prototype.bind_ = function() {
    
    
    
  this.kendoTreeView_.bind("select", this.d(this.onSelect_));
  
  this.kendoTreeView_.wrapper.on
      ( "mouseenter.kendoTreeView", ".k-in", this.d(this.onMouseEnter_));
  
  
  this.kendoTreeView_.wrapper.on
      ( "mouseleave.kendoTreeView", ".k-in", this.d(this.onMouseLeave_));


};




lgb.view.ViewPointGUI.prototype.onMouseEnter_ = function(event) {

  var liElement = event.currentTarget.parentElement.parentElement;
  var dataItem = this.kendoTreeView_.dataItem(liElement);
  var viewPointNode = this.dataModel.getViewPoint(dataItem.value);
  this.fireShowViewPoint(viewPointNode, true);

};

lgb.view.ViewPointGUI.prototype.onMouseLeave_ = function(event) {

  var liElement = event.currentTarget.parentElement.parentElement;
  var dataItem = this.kendoTreeView_.dataItem(liElement);
  var viewPointNode = this.dataModel.getViewPoint(dataItem.value);
  this.fireShowViewPoint(viewPointNode, false);

};

lgb.view.ViewPointGUI.prototype.fireShowViewPoint = function(viewPointNode, isVisible) {



  
  if (null != viewPointNode) {
    
    if (viewPointNode.parent.name =="Zones") {
      
      viewPointNode.isVisible = isVisible;
      this.dispatchLocal(new lgb.events.RequestShowViewPoint(viewPointNode));
      
    }
  }

};


lgb.view.ViewPointGUI.prototype.onSelect_ = function(event) {

  var selectedNode = event.node;
  var dataItem = this.kendoTreeView_.dataItem(selectedNode);
  var viewPointNode = this.dataModel.getViewPoint(dataItem.value);
                
  if (null != viewPointNode) {
    this.dispatchLocal(new lgb.events.RequestGoToViewPoint(viewPointNode));
  }


};



/**
 * event handler
 * @protected
 * @override
 * @param {lgb.events.DataModelChanged} event The Event.
 */
lgb.view.ViewPointGUI.prototype.onChange = function(event) {


    var x = 0;
};



/**
 * injects the html into the DOM
 */
lgb.view.ViewPointGUI.prototype.injectHtml = function() {


    var mainDiv = this.makeMainDiv();
    this.append(mainDiv);
    
    this.kendoTreeView_ =        
        mainDiv.kendoTreeView().data("kendoTreeView");
        

    
/*
    this.kendoTreeView_ =        
        mainDiv.kendoTreeView({
            dataSource: this.dataModel.kendoDS
        }).data("kendoTreeView");
    */
  return;
};
