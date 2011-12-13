goog.provide('lgb.controller.EnvelopeController');

goog.require('lgb.controller.ControllerBase');
goog.require('lgb.events.CamerasLoaded');
goog.require('lgb.events.RequestVisibilityChange');
goog.require('lgb.events.ViewInitialized');
goog.require('lgb.model.BuildingModel.Group');
goog.require('lgb.model.EnvelopeModel');
goog.require('lgb.view.EnvelopeAdminView');
goog.require('lgb.view.EnvelopeView');


/**
 * @constructor
 * @extends lgb.controller.ControllerBase
 */
lgb.controller.EnvelopeController = function() {

  lgb.controller.ControllerBase.call(this);
  this.init_();
};
goog.inherits(lgb.controller.EnvelopeController, lgb.controller.ControllerBase);


/**
 * @private
 */
lgb.controller.EnvelopeController.prototype.init_ = function() {

  this.dataModel = new lgb.model.EnvelopeModel();
  this.view = new lgb.view.EnvelopeView(this.dataModel);
  this.bind_();
  this.dispatch(new lgb.events.EnvelopeModelChanged(this.dataModel));
};


/**
 * Binds specific event types to functions which handle the events.
 * If no event target is specified then the listener is set  on the global
 * event bus.
 * @private
 */
lgb.controller.EnvelopeController.prototype.bind_ = function() {

  this.makeAddToWorldRequestGlobal();

  this.listenTo(this.view,
    lgb.events.ViewInitialized.TYPE,
    this.onViewInitialized_);

  this.listenTo(this.view,
    lgb.events.CamerasLoaded.TYPE,
    this.onCamerasLoaded_);

  this.listenTo(this.dataModel,
    lgb.events.DataModelChanged.TYPE,
    this.onDataModelChanged_);


};



/**
 * @private
 * @param {lgb.events.CamerasLoaded} event Fired by the view.
 */
lgb.controller.EnvelopeController.prototype.onCamerasLoaded_ =
  function(event) {
  this.dispatch(event);
};


/**
 * Event handler - whatches for when the datamodel changes and
 * repeats the event on the global event bus. This is used
 * so that the zones can be rebuilt when the floor size changes.
 * @private
 * @param {lgb.events.DataModelChanged} event Fired by the data model.
 */
lgb.controller.EnvelopeController.prototype.onDataModelChanged_ =
  function(event) {
  this.dispatch(new lgb.events.EnvelopeModelChanged(this.dataModel));
};


/**
 * Event handler.
 * @private
 * @param {lgb.events.RequestDataModelChange} event Fired by the view.
 */
lgb.controller.EnvelopeController.prototype.onViewInitialized_ =
  function(event) {

  this.adminView = new lgb.view.EnvelopeAdminView(this.dataModel, 'adminView');

  this.listenTo(this.adminView,
    lgb.events.RequestDataModelChange.TYPE,
    this.onRequestDataModelChange_);
};


/**
 * @private
 * @param {lgb.events.RequestDataModelChange} event The event.
 */
lgb.controller.EnvelopeController.prototype.onRequestDataModelChange_ =
  function(event) {
  this.dataModel.change(event.payload);
};


/**
 * @param {lgb.model.BuildingModel.Group} group The group.
 */
lgb.controller.EnvelopeController.prototype.setVisiblityGroup =
  function(group) {
  this.dataModel.setVisiblityGroup(group);
};