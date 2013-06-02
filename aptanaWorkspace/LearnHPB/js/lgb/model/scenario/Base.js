/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.model.scenario.Base');


goog.require('lgb.model.BaseModel');
goog.require('lgb.model.scenario.SystemNode');
goog.require('lgb.utils.XmlParser');

/**
 * @constructor
 * @extends lgb.model.BaseModel
 */
lgb.model.scenario.Base = function() {


  lgb.model.BaseModel.call(this);

  this.xml = null;
  this.systemNodeArray = [];
  this.idxToNodeMap = {};
  this.selectedSystemNode = null;

};
goog.inherits(lgb.model.scenario.Base, lgb.model.BaseModel);



/**
 * Loads the scario from a remote XML file.
 */
lgb.model.scenario.Base.prototype.load = function() {
   var url = lgb.Config.XML_BASE_PATH + 'DefaultScenario.xml';

  var delegate = this.d(this.parse);
  
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'xml',
      success: delegate
    });
    
    
};


/**
 * @param {string} id The ID of the mesh.
 */
lgb.model.scenario.Base.prototype.selectId = function(id) {

  this.selectedSystemNode = this.idxToNodeMap[id];
  
  this.triggerLocal(e.DataModelChanged);
  
};


/**
 * After the XML  file is loaded it is parsed here.
 * @param {Document} xml The XML document to parse.
 */
lgb.model.scenario.Base.prototype.parse = function(xml) {

  this.xml = xml;

  var parser = new lgb.utils.XmlParser(xml);
  parser.makeRootNode('/scenario/sysVars/systemNode');

  var idx = 0;
  while (parser.currentNode) {
    var systemNode = new lgb.model.scenario.SystemNode(parser);
    systemNode.idx = idx;

    this.idxToNodeMap[systemNode.id] = systemNode;
    this.systemNodeArray.push(systemNode);

    idx++;
    parser.next();
   }

    this.selectedSystemNode = this.systemNodeArray[0];

  
  this.triggerLocal(e.DataModelInitialized);
};














