/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.model.BuildingHeightModel');

goog.require('lgb.model.ModelBase');



/**
 * @constructor
 * @extends lgb.model.ModelBase
 */
lgb.model.BuildingHeightModel = function(topFloorMaxY,topFloorMinY) {
  /**@const */
  this._NAME = 'lgb.model.BuildingHeightModel';
  /**@const */
  this._TITLE = 'Building';
  lgb.model.ModelBase.call(this);
  
  this.topFloorMaxY = topFloorMaxY;
  this.topFloorMinY = topFloorMinY;



};
goog.inherits(lgb.model.BuildingHeightModel, lgb.model.ModelBase);
