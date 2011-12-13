goog.provide('lgb.events.RequestGoToViewPoint');

goog.require('goog.events.Event');

/**
 * @constructor
 * @param {!THREE.Camera} camera The new camera position to go to.
 * @extends {goog.events.Event}
 */
lgb.events.RequestGoToViewPoint = function(camera) {

  goog.events.Event.call(this, lgb.events.RequestGoToViewPoint.TYPE);

  /**
   * The event payload
   * @type {!THREE.Camera}
   */
  this.payload = camera;
};
goog.inherits(lgb.events.RequestGoToViewPoint, goog.events.Event);


/**
 * Event type
 * @const
 * @type {string}
 */
lgb.events.RequestGoToViewPoint.TYPE = 'lgb.events.RequestGoToViewPoint';


