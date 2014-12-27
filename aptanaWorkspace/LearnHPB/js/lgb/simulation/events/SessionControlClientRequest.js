/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2014 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.simulation.events.SessionControlClientRequest');

goog.require('lgb.simulation.events.BaseEvent');
goog.require('lgb.simulation.model.voManaged.SessionControlModel');


/**
 * @constructor
 * @extends {lgb.simulation.events.BaseEvent}
 */
lgb.simulation.events.SessionControlClientRequest = function(payload) {
  lgb.simulation.events.BaseEvent.call(this, payload);
};
goog.inherits(lgb.simulation.events.SessionControlClientRequest, lgb.simulation.events.BaseEvent);



lgb.simulation.events.SessionControlClientRequest.fieldObjectsEx_ = {
  
   payload_: {
     jsonFieldName : "payload",
     classReference : lgb.simulation.model.voManaged.SessionControlModel
   }
       
};