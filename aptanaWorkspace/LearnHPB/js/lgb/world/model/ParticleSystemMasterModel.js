/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2014 Institute for Sustainable Performance of Buildings (Superb)
 */

goog.provide('lgb.world.model.ParticleSystemMasterModel');

goog.require('goog.array');
goog.require('lgb.core.Config');

goog.require('lgb.core.BaseModel');
goog.require('lgb.world.model.ParticleSystemModel');
goog.require('lgb.utils.XmlWrapper');

/**
 * @constructor
 * @extends lgb.core.BaseModel
 */
lgb.world.model.ParticleSystemMasterModel = function() {

  /**@const */
  this._TITLE = 'Mutiple Particle System';

  lgb.core.BaseModel.call(this);
  this.init_();

};
goog.inherits(lgb.world.model.ParticleSystemMasterModel, lgb.core.BaseModel);




/**
 * @private
 */
lgb.world.model.ParticleSystemMasterModel.prototype.init_ = function() {

  this.xml = null;
  this.xpathResult = null;
  this.currentNode = null;

  this.isSceneLoaded = false;
  this.isXMLloaded = false;
  this.configs = {};
  this.systems = {};
  this.psModelList = [];

};



lgb.world.model.ParticleSystemMasterModel.prototype.getPsModelList = function() {

  return this.psModelList;
};


lgb.world.model.ParticleSystemMasterModel.prototype.changePropertyEx = function(property, newValue) {
  
    var psModel = this.psModelList[property.idx];
    psModel.changePropertyEx(property.name, newValue);
       
};




/**
 * The Particle system data is located in remotes files.
 * this triggers the process of downloading and parsing those files.
 */
lgb.world.model.ParticleSystemMasterModel.prototype.load = function() {

  /**@type {THREE.SceneLoaderEx} */
  this.loader_ = new THREE.SceneLoaderEx();
  this.loader_.load(lgb.core.Config.PARTICLE_SYSTEM_SCENE, this.d(this.onSceneLoadedSync_));

  this.loadXML_();
};

/**
 * Event hander called then the LS file is loaded.
 * @param {Object} result Contains the scene.
 * @private
 */
lgb.world.model.ParticleSystemMasterModel.prototype.onSceneLoadedSync_ = function(result) {

  this.scene_ = result['scene'];
  this.groups_ = result['groups'];
  this.cameras_ = result['cameras'];

  this.objects_ = result.objects;
  this.meshes_ = {};
  this.object3ds_ = {};
  
  
  this.objectTypeMap_ = {
    Mesh : this.meshes_,
    Object3D : this.object3ds_
  };
  
  
  //this.eachPropertyName(this.objects_, this.processOneObject_);
  
   var scene_rotation = new THREE.Euler(this.scene_.rotation.x, this.scene_.rotation.y, this.scene_.rotation.z);
  
  var i = this.scene_.children.length;
  while (i--) {
    var mesh = this.scene_.children.shift();
    if (null != mesh.geometry) {
      
        mesh.bakeTransformsIntoGeometry();
       mesh.position.add(this.scene_.position);
        
       mesh.rotation.fromArray(
         [this.scene_.rotation.x,
         this.scene_.rotation.y,
         this.scene_.rotation.z 
         ]
       );
       
        mesh.scale = this.scene_.scale;
        mesh.bakeTransformsIntoGeometry();
        
        this.processOneObject_(mesh, mesh.name);
    }
  }

  for (var groupName in this.groups_) {
    goog.array.sortObjectsByKey(this.groups_[groupName], 'name');
  }

  this.isSceneLoaded = true;
  this.checkForInitComplete_();

};



lgb.world.model.ParticleSystemMasterModel.prototype.processOneObject_ = function(object, name) {
  

  var fullClassName = object.getFullClassName();
  var ary = fullClassName.split('.');

  var len = ary.length;
  var className = ary[len - 1];

  if ('' == object.name) {
    object.name = name;
  }

  this.objectTypeMap_[className][name] = object;


  if (undefined !== object.groups){
    
    for (var i = 0; i < object.groups.length; i++) {
      var groupID = object.groups[i];
  
      if (this.groups_[groupID] === undefined) {
        this.groups_[groupID] = [];
      }
      
      this.groups_[groupID].push(object);
    }

  }

  
};





/**
 * used to determine if both the XML file and the JS file are
 * loaded.
 * @private
 */
lgb.world.model.ParticleSystemMasterModel.prototype.checkForInitComplete_ = function() {

  if (this.isXMLloaded && this.isSceneLoaded) {

    this.startFactory_();
    this.triggerLocal(e.DataModelInitialized);

  }

};



/**
 * affter all needed data files are loaded, creates the data models.
 * @private
 */
lgb.world.model.ParticleSystemMasterModel.prototype.startFactory_ = function() {

  var items = [];

  for (var key in this.systems) {

    var sys = this.systems[key];
    var l = sys.meshGroupNames.length;

    sys.meshes = [];
    for (var i = 0; i < l; i++) {
      var groupName = sys.meshGroupNames[i];
      sys.meshes = sys.meshes.concat(sys.meshes, this.groups_[groupName]);
    }

    sys.translate = this.translate;
    sys.rotate = this.rotate;

    var psModel = new lgb.world.model.ParticleSystemModel(sys, this.psModelList.length);
    this.psModelList.push(psModel);

    
  }

};



/**
 * uses AJAX to download the remote XML files.
 * @private
 */
lgb.world.model.ParticleSystemMasterModel.prototype.loadXML_ = function() {

  jQuery.ajax({
    type : 'GET',
    url : lgb.core.Config.PARTICLE_SYSTEM_XML,
    dataType : 'xml',
    success : this.d(this.parse_)
  });

};



/**
 * after the XML files is loaded it must be parsed.
 * @param {Document} xml The downloaded XML doc.
 * @private
 */
lgb.world.model.ParticleSystemMasterModel.prototype.parse_ = function(xml) {

  var parser = new lgb.utils.XmlWrapper(xml);

  parser.makeRootNode('/particleSystems/@translate');
  this.translate = parser.getFloatArray();

  parser.makeRootNode('/particleSystems/@rotate');
  this.rotate = parser.getFloatArray();

  parser.makeRootNode('/particleSystems/system');
  while (parser.currentNode) {

    var theID = parser.getId();

    var sys = {
      id : theID,
      particleCount : parser.getContentAsFloat('particleCount'),
      particleSize : parser.getContentAsFloat('particleSize'),
      meshGroupNames : parser.getTextArray('meshGroupNames'),
      title : parser.getContent('title'),
      launchDelayBetweenParticles : parser.getContent('launchDelayBetweenParticles'),
      lifeSpanInSeconds : parser.getContentAsFloat('lifeSpanInSeconds')
    };

    this.systems[theID] = sys;
    parser.next();
  }

  this.isXMLloaded = true;
  this.checkForInitComplete_();

};

