
/**
 * @namespace 
 */
var lgb = (function(lgb) {


	lgb.model = lgb.model || {};

	/**
	 * @class MVC base class for all model classes 
	 */
	lgb.model.ModelBase = function() {
		lgb.Base.call(this);
	};

	lgb.model.ModelBase.prototype = {
		

	};
	
	lgb.model.ModelBase.inheritsFrom(lgb.Base);
	
	return lgb;
	
})(lgb || {});

