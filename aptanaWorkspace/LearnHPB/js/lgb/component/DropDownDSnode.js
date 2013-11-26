/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
 
goog.provide('lgb.component.DropDownDSnode');
 
goog.require('lgb.world.model.BaseModel');


/**
 * Primarily a container object for Sysvars
 * @constructor
 * @extends lgb.world.model.BaseModel
 * @param {!lgb.utils.XmlWrapper} xmlParser The parse used
 * to populate the object, contains an xml document.
 */
lgb.component.DropDownDSnode = function(name, value) {

  this.name = name;
  this.value = value;
  
  lgb.world.model.BaseModel.call(this);
};
goog.inherits(lgb.component.DropDownDSnode, lgb.world.model.BaseModel);


