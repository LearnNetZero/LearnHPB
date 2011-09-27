goog.provide('lgb.event.WindowResizeEvent');

goog.require('goog.events.Event');

/**
 * @constructor
 *  Event fired when a collada file is loaded
 * @param {mesh} 
 * @extends {goog.events.Event}
 */
lgb.event.WindowResizeEvent = function(width, height) {
	
	goog.events.Event.call(this, lgb.event.WindowResizeEvent.TYPE);

this.payload = {};
	

  this.payload.width = width;
  this.payload.height = height;

};

goog.inherits(lgb.event.WindowResizeEvent , goog.events.Event);

/**
 * Event type 
 * @type {string}
 */
lgb.event.WindowResizeEvent.TYPE =
    goog.events.getUniqueId('WindowResizeEvent');
    
