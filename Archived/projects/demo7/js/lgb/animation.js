/**
 * 
 */
var lgb = (function(lgb) {
	

	/**
	 * @namespace A module for managing 3D models and their assets.
	 */
	lgb.animation = lgb.animation || {};
	
	
	lgb.animation.init = function() {
		this.opacity = null;
		this.count = 0; // Counter to keep track of wall opacity
		this.dir = 1; // Whether wall is becoming more or less opaque
	};
	
	

	/**
	 * Allows you to change the alpha of an object
	 * it does this by targeting a specifiic Transform in the root model
	 * then tageting the Material and adding an opacity paramter for that 
	 * specific material instance.
	 * 
	 * @param a string tageting Hemi Transform or 'mesh name'
	 * @return opacity parameter; 'ParamFloat'
	 */
	lgb.animation.createAlphaParam = function(meshName) {

			//target the Transform
			var transformList = lgb.loader.theModel.getTransforms(meshName);
			var transform = transformList[0];
			
			//target the Material
			var theMaterial = transform.shapes[0].elements[0].material;
			
			var drawList = theMaterial.getParam('o3d.drawList').value;
			var zdrawList = hemi.view.viewInfo.zOrderedDrawList;
			
			theMaterial.getParam('o3d.drawList').value = zdrawList;
			
			//create and opacity FX
			var theMaterialOpacity = hemi.fx.addOpacity(theMaterial);
			theMaterialOpacity.value = 1.0;
			
			/* Create a transform-level opacity paramater that will override the
			 * material-level opacity parameter. That way, we can make this wall
			 * fade without fading every object that uses the wall material.
			 */
			this.opacity = transform.createParam('opacity','ParamFloat');
			this.opacity.value = 1.0;
			
			hemi.view.addRenderListener(this);
		
			return this.opacity;
	};
	
	
	lgb.animation.toggleOpacity = function(){
		if (this.count == 0) {
			this.count = 40;
			this.dir = -this.dir;
		} 
	};
	
		
	lgb.animation.onRender = function(){
		if (this.count > 0) {
			this.opacity.value += this.dir*0.02;
			this.count--;
		}
	};

	
	return lgb;
	
})(lgb || {});