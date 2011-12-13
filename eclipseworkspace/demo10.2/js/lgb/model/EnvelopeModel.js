goog.provide('lgb.model.EnvelopeModel');

goog.require('lgb.model.BuildingModel.Group');
goog.require('lgb.model.ModelBase');


/**
 * @constructor
 * @extends lgb.model.ModelBase
 */
lgb.model.EnvelopeModel = function() {
  /**@const */
  this._NAME = 'lgb.model.EnvelopeModel';
  this.init_();
};
goog.inherits(lgb.model.EnvelopeModel, lgb.model.ModelBase);


/**
 * Initializes the MVC Model setting default properties.
 * @private
 */
lgb.model.EnvelopeModel.prototype.init_ = function() {

  /**@const */
  this._TITLE = 'Envelope Model';

  lgb.model.ModelBase.call(this);

  this.floorCount = 5;
  this.floorHeight = 11;
  this.floorWidth = 125;
  this.floorDepth = 80;


  this.isVisible = true;

  this.groupMembership = {};
  this.groupMembership[lgb.model.BuildingModel.Group.ALL] = true;
  this.groupMembership[lgb.model.BuildingModel.Group.ENVELOPE] = true;

};


/**
 * @param {Object} stateObject Contains information about what to change.
 */
lgb.model.EnvelopeModel.prototype.change = function(stateObject) {

  var isAnythingDirty = false;
  var whatIsDirty = {};

  if (stateObject.floorHeight != null &&
    stateObject.floorHeight != this.floorHeight) {

    this.floorHeight = stateObject.floorHeight;
    whatIsDirty.floorHeight = true;
    isAnythingDirty = true;
  }

  if (stateObject.floorCount != null &&
    stateObject.floorCount != this.floorCount) {

    this.floorCount = stateObject.floorCount;
    whatIsDirty.floorCount = true;
    isAnythingDirty = true;
  }

  if (isAnythingDirty) {
    this.dispatchLocal(new lgb.events.DataModelChanged(whatIsDirty));
  }
};


/**
 * @param {boolean} makeVisible Used to change the visibility.
 */
lgb.model.EnvelopeModel.prototype.setVisible = function(makeVisible) {

  if (this.isVisible != makeVisible) {
    this.isVisible = makeVisible;

    this.dispatchChange();
  }
};

/**
 * @param {lgb.model.BuildingModel.Group} group The group name
 * to set as visible.
 */
lgb.model.EnvelopeModel.prototype.setVisiblityGroup = function(group) {

  if (this.groupMembership[group]) {
    this.setVisible(true);
  } else {
    this.setVisible(false);
  }
};