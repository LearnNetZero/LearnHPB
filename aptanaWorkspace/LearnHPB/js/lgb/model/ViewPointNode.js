/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.model.ViewPointNode');

goog.require('lgb.model.ModelBase');


/**
 * @constructor
 * @extends lgb.model.ModelBase
 */
lgb.model.ViewPointNode = function(object3D) {
  /**@const */
  this._NAME = 'lgb.model.ViewPointNode';
  /**@const */
  this._TITLE = 'ViewPointNode';
  lgb.model.ModelBase.call(this);
  
  this.targetBoundingBox = null;
  this.name = null;
  this.targetPosition = null;
  
  this.threeObject = null;
  
};


goog.inherits(lgb.model.ViewPointNode, lgb.model.ModelBase);


/**
 * @private
 */
lgb.model.ViewPointNode.prototype.init = function(threeObject) {
    
    var boundingBox;
    
    if (threeObject._NAME == 'THREE.Object3D') {
        boundingBox = threeObject.getDescendantsBoundingBox();

    } else if (threeObject._NAME == 'THREE.Mesh') {
        boundingBox = threeObject.getBoundingBox();
    }
    
    this.targetBoundingBox = boundingBox.clone();
        
    this.targetPosition = threeObject.position.clone();
    this.name = threeObject.name;
    
    this.threeObject = threeObject;
};




/**
 * @param {string} name The camera name.
 */
lgb.model.ViewPointNode.prototype.generateCamera = function() {


  
};

lgb.model.ViewPointNode.prototype.getTargetPosition = function() {

    var worldPosition = new THREE.Vector3();
    this.threeObject.localToWorld(worldPosition);
    
    return worldPosition;
  
};




