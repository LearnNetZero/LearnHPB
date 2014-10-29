/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.simulation.events.SessionControlClientRequest');

goog.require('lgb.simulation.events.BaseEvent');
goog.require('lgb.simulation.model.voManaged.SessionControlModel');


/**
 * @constructor
 * @param {lgb.scenario.model.Base} scenarioBase The Data Model.
 * @extends {goog.events.Event}
 */
lgb.simulation.events.SessionControlClientRequest = function(payload) {
  lgb.simulation.events.BaseEvent.call(this, payload);
};
goog.inherits(lgb.simulation.events.SessionControlClientRequest, lgb.simulation.events.BaseEvent);



 
lgb.simulation.events.SessionControlClientRequest.prototype.getPayloadType = function() {
  return lgb.simulation.model.voManaged.SessionControlModel;
};