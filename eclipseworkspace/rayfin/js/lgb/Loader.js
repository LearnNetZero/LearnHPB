goog.provide('lgb.Loader');


goog.require('lgb.event.MeshRequestEvent');
goog.require('lgb.event.MeshLoadedEvent');
goog.require('lgb.BaseClass');
goog.require('lgb.Config');


/**
 * @class MVC controller for loading 3d-assets
 * @constructor
 * @extends lgb.BaseClass
 */
lgb.Loader = function() {
	
	lgb.BaseClass.call(this);
	
	/**
   * Used to download 3D mesh files in binary format
   * @type {THREE.BinaryLoader}
   * @private
   */		
	this.binaryLoader_ = new THREE.BinaryLoader(  );
	
	/**
   * Used to download 3D mesh files in the JSON format
   * @type {THREE.JSONLoader}
   * @private
   */		
	this.jsonLoader_ = new THREE.JSONLoader(  );
	
	/**
   * Used to download 3D mesh files in the Collada format
   * @type {ColladaLoader}
   * @private
   */		
	this.colladaLoader_ = new ColladaLoader(  );

	
	/**
   * Used to download 3D mesh files in the Collada format
   * @type {ColladaLoader}
   * @private
   */		
	this.utf8Loader_ = new THREE.UTF8Loader();





};



goog.inherits(lgb.Loader, lgb.BaseClass);

lgb.Loader.prototype.onMeshRequest = function(event) {
	
		var fileName = event.payload.mesh.fileName;
		this.meshList[fileName] =  event.payload.mesh;
		
		this.loadMesh(fileName);
		
};




lgb.Loader.prototype.loadFile = function(fileName, callback) {

		
		var fileType = this.getFileType(fileName);
		var path = lgb.Config.ASSETS_BASE_PATH  + fileName;
		
		//var callbackDelegate = this.d(this.onColladaLoaded);
		
		var loadObj = { 
					model: path, 
					callback: callback
			};
		
		
		
		switch (fileType) {
			case lgb.Loader.MESH_TYPE.BIN : 
				this.binaryLoader_.load ( loadObj );
				break;
			case lgb.Loader.MESH_TYPE.JSON :
				this.jsonLoader_.load ( loadObj );
				break;
			case lgb.Loader.MESH_TYPE.COLLADA :
				this.colladaLoader_ .load ( path , callback );
				break;
			case lgb.Loader.MESH_TYPE.UTF8 :
				this.utf8Loader_ .load ( loadObj );
				break;
				
		}
		
};



lgb.Loader.prototype.getFileType = function(fileName) {
	
	var ary = fileName.split(".");
	var len = ary.length;
	
	if (len <2) {
		return lgb.Loader.MESH_TYPE.UNKNOWN;
	} else {
			
		var fileExt = ary[len-1].toLowerCase();
		
		if (fileExt == 'dae') {
			return lgb.Loader.MESH_TYPE.COLLADA;
		} else if(fileExt == 'utf8') {
			return lgb.Loader.MESH_TYPE.UTF8;
		}
		
		if (fileExt == 'js') {
			var typeCode = ary[len-2].toLowerCase();
			if (typeCode == 'b') {
				return lgb.Loader.MESH_TYPE.BIN;
			} else if (typeCode == 'json'){
				return lgb.Loader.MESH_TYPE.JSON;
			} else {
				return lgb.Loader.MESH_TYPE.JSON;
			}
		} else {
			return lgb.Loader.MESH_TYPE.UNKNOWN;
		}
		
	}
	
};

lgb.Loader.prototype.onColladaLoaded = function(collada ) {

	
	var event = new lgb.event.MeshLoadedEvent(collada);
	this.dispatch(event);
	
};








lgb.Loader.MESH_TYPE = {
  COLLADA: 'collada',
  UTF8: 'utf8',
  JSON: 'json',
  BIN: 'bin',
  UNKNOWN: 'unknown'
};









