/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.events.Event');
goog.provide('e.Event');

goog.require('goog.events.Event');

/**
 * @constructor
 * @param {string} type of event
 * @param {Object} payload
 * @extends {goog.events.Event}
 */
lgb.events.Event = function(type, payload) {

  goog.events.Event.call(this, type);

  /**
   * The event payload
   * @type {Object}
   */
  this.payload = payload;
  
};
goog.inherits(lgb.events.Event, goog.events.Event);



e.Event = function() {};

e.RequestAddToGUI = 'e.RequestAddToGUI';
e.RequestAddToLayout = 'e.RequestAddToLayout';
e.Resize = 'e.Resize';
e.LayoutChange = 'e.LayoutChange';
e.ViewInitialized = 'e.ViewInitialized';
e.DataModelInitialized = 'e.DataModelInitialized';
e.RenderNotify = 'e.RenderNotify';
e.MouseClick = 'e.MouseClick';
e.MouseOut = 'e.MouseOut';
e.MouseOver = 'e.MouseOver';
e.AddToWorldRequest = 'e.AddToWorldRequest';
e.RequestActivateView = 'e.RequestActivateView';
e.RequestShowViewPoint = 'e.RequestShowViewPoint';
e.RequestGoToViewPoint = 'e.RequestGoToViewPoint';
e.VisibilityNodesLoaded = 'e.VisibilityNodesLoaded';
e.ViewClosed = 'e.ViewClosed';
e.WindowResize = 'e.WindowResize';
e.ViewPointCollectionLoaded = 'e.ViewPointCollectionLoaded';
e.EnvelopeModelChanged = 'e.EnvelopeModelChanged';
e.RequestDataModelChange = 'e.RequestDataModelChange';
