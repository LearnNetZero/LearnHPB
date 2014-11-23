/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.simulation.events.SimStateNativeNotify');

goog.require('lgb.simulation.events.BaseEvent');
goog.require('lgb.simulation.model.voNative.SimStateNative');



/**
 * @constructor
 * @extends {goog.events.Event}
 */
lgb.simulation.events.SimStateNativeNotify = function(payload) {
  lgb.simulation.events.BaseEvent.call(this,  payload);
};

goog.inherits(lgb.simulation.events.SimStateNativeNotify, lgb.simulation.events.BaseEvent);





lgb.simulation.events.SimStateNativeNotify.prototype.getPayloadType = function() {
  return lgb.simulation.model.voNative.SimStateNative;
};


