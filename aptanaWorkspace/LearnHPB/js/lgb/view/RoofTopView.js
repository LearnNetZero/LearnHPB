/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.view.RoofTopView');


goog.require('lgb.events.Object3DLoaded');
goog.require('lgb.events.Object3DLoaded');
goog.require('lgb.view.ViewBase');



/**
 * MVC View for the RoofTop Unit
 * @constructor
 * @extends lgb.view.ViewBase
 * @param {lgb.model.RoofTopModel} dataModel The data model to display.
 */
lgb.view.RoofTopView = function(dataModel) {
  lgb.view.ViewBase.call(this, dataModel);

  this.dataModel = dataModel;
  this._NAME = 'lgb.view.RoofTopView';
  this._ASSETS_FOLDER = 'rooftop';

};
goog.inherits(lgb.view.RoofTopView, lgb.view.ViewBase);




/**
 * Event handler called by the base class when the scene is loaded
 * @private
 */
lgb.view.RoofTopView.prototype.onSceneLoaded_ = function() {

  for (var i = this.scene_.children.length - 1; i >= 0; i--) {
    
      var mesh = this.scene_.children.pop();
      this.masterGroup_.add(mesh);
      
      //TODO:(Raj) make the selectable loaded event work with an array
      var event = new lgb.events.SelectableLoaded(mesh);
      this.dispatchLocal(event);
  }

};




/**
 * @override
 * @param {lgb.events.DataModelChanged} event The event
 * notifying us of a change.
 * @protected
 */
lgb.view.RoofTopView.prototype.onChange = function(event) {
  this.updateAllFromModel_();
};


/**
 * Updates the view here to reflect any changes in the MVC data model.
 * @private
 */
lgb.view.RoofTopView.prototype.updateAllFromModel_ = function() {
  this.updateVisible_();
};


/**
 * Updates this view to reflect the changes in the visibility
 * state of the MVC model.
 * @private
 */
lgb.view.RoofTopView.prototype.updateVisible_ = function() {
  var m = this.masterGroup_.children.length;

  for (var i = 0; i < m; i++) {
    this.masterGroup_.children[i].visible = this.dataModel.isVisible;
  }
};

