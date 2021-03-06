
o3djs.require('lgb.model.XmlParser');

/**
 * @namespace A module for managing the 2D GUI
 */
var lgb = (function(lgb) {


	/**
	 * @namespace MVC controller 
	 */
	lgb.model = lgb.model || {};
	
	lgb.model.ParticleSystem = function(xml) {

		this.xml = xml;
		this.xpathResult = null;
		this.currentNode = null;
		
		this.boxes = {};
		this.colorKeys = {};
		this.scaleKeys = {};
		this.systems = {};
		this.configs = {};
		
		this.parse(xml);
		this.translate;
			
	};
	

	lgb.model.ParticleSystem.prototype = {
		
		parse: function(xml) {

		
			var parser = new lgb.model.XmlParser(xml);
			parser.makeRootNode('/particleSystems/@translate');
			
			this.translate = parser.getFloatArray();
			
			parser.makeRootNode('/particleSystems/boundingBoxes/box');
			
			while (parser.currentNode) {
				var theID = parser.getId();
				var ary = parser.getFloatArray();

				var point1 = ary.slice(0,3);
				var point2 = ary.slice(3,6);

				var box = [point1,point2];
				this.boxes[theID] = box;

				parser.next();
            };
			
			parser.makeRootNode('/particleSystems/colorKeys/ck');
			while (parser.currentNode) {
				
				var theID = parser.getId();
	
				var ck = {	key: parser.getContentAsFloat("key"),
							value: parser.getFloatArray("value")};
				
				this.colorKeys[theID] = ck;
				parser.next();
            };
			
			parser.makeRootNode('/particleSystems/scaleKeys/sk');
			while (parser.currentNode) {
				
				var theID = parser.getId();
	
				var sk = {
						key: parser.getContentAsFloat("key"),
						value: parser.getFloatArray("value")
				};
				
				this.scaleKeys[theID] = sk;
				parser.next();
            };
			
			parser.makeRootNode('/particleSystems/system');
			while (parser.currentNode) {
				
				var theID = parser.getId();
				
				var sys = {	id: theID, 
							rate: parser.getContentAsFloat("rate"),
							life: parser.getContentAsFloat("life"),
							boundingBoxIds: parser.getTextArray("boundingBoxIds"),
							shape: parser.getContent("shape"),
							curve: parser.getContentAsFloat("curve"),
							colorKeyIds: parser.getFloatArray("colorKeyIds"),
							scaleKeyIds: parser.getFloatArray("scaleKeyIds")
				};
				
				
				this.systems[theID] = sys;
				
				var cfg = this.makeParticleConfig(sys);
				this.configs[theID] = cfg;
				
				parser.next();
            }
			
			return this.configs;
			
		},
		
		makeParticleConfig: function(sys) {
			
			var shapeStr = 'hemi.curve.shapeType.' + sys.shape;
			
			var bbAry = this.makeArrayFromIds(sys.boundingBoxIds,this.boxes);
			var ckAry = this.makeArrayFromIds(sys.colorKeyIds,this.colorKeys);
			var skAry = this.makeArrayFromIds(sys.scaleKeyIds,this.scaleKeys);
			
			var particleSystemConfig = {
				rate : sys.rate,
				life : sys.life,
				boundingBoxes :  bbAry,
				shape : hemi.curve.shapeType.SPHERE,
				colorKeys : ckAry,
				scaleKeys : skAry
			};
			
			return particleSystemConfig;
		},
		
		makeArrayFromIds: function(idsArray, objs) {
			
			var ary = new Array();
			var len = idsArray.length;
			
			for (var i=0;i<len;i++) {
				var id = idsArray[i];
				var obj = objs[id];
				
				ary.push(obj);
			}
			
			return ary;
		}
		
		

	};
	


	return lgb;
	
})(lgb || {});










