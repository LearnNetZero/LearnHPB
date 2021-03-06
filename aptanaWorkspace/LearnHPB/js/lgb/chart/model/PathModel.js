/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2014 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.chart.model.PathModel');
goog.require('lgb.core.BaseModel');


/**
 * @constructor
 * @extends lgb.core.BaseModel
 */
lgb.chart.model.PathModel = function(idx) {


  lgb.core.BaseModel.call(this);
  this.idx_ = idx;
  this.init_();
  
};
goog.inherits(lgb.chart.model.PathModel, lgb.core.BaseModel);




lgb.chart.model.PathModel.prototype.init_= function() {
  
  this.values_ = [];
  this.name_ = "PathModelName_" + this.idx_;
  
};


lgb.chart.model.PathModel.prototype.setName = function(name) {
  this.name_ = name;
};



lgb.chart.model.PathModel.prototype.changeDisplayUnitSystem = function(displayUnitSystem) {

    
    return;   
};




lgb.chart.model.PathModel.prototype.addDot = function() {
  
  var deltaRandomFunction = this.d3RandomNormal(0.1, 0.5, -2.0, 2.0);
  var delta = deltaRandomFunction();
  
  var len = this.values_.length;
  var previousValue = this.values_[len-1];
    
  var newValue = previousValue + delta;
  newValue = parseFloat((newValue).toFixed(2));
  this.values_.push(newValue);
  
};



lgb.chart.model.PathModel.prototype.makeRandomData = function(count) {
  
  this.randomFunction_ = this.generateRandomFunction();
    
  var deltaRandomFunction = this.d3RandomNormal(0.1, 0.5, -2.0, 2.0);
  
  var newValue = this.randomFunction_();
  newValue = parseFloat((newValue).toFixed(2));
    
  this.values_.push(newValue);
    
	for ( i = 1; i < count; i++) {
		
    var delta = deltaRandomFunction();
    var previousValue = this.values_[i-1];
    
    var newValue = previousValue + delta;
		newValue = parseFloat((newValue).toFixed(2));
		
		this.values_.push(newValue);
	}
	
};
    


lgb.chart.model.PathModel.prototype.getColumn = function() {
  
    var oneColumn = this.values_.slice(0);
    oneColumn.unshift(this.name_);
    
    return oneColumn;
    
};




lgb.chart.model.PathModel.prototype.setIntegratedVariable = function(integratedVariable) {
    
  this.integratedVariable_ = integratedVariable;
  this.setName(integratedVariable.name);
  
};



lgb.chart.model.PathModel.prototype.getVarName = function() {
  return this.integratedVariable_.name;
};



lgb.chart.model.PathModel.prototype.addIntegratedVariable = function(integratedVariable) {
    
  var displayValue = integratedVariable.value.getDisplayValue();
  
  
    this.values_.push(displayValue);
  
    if (this.values_.length > lgb.chart.model.PathModel.maxDataPoints) {
        this.values_.shift();
    }
    
};





lgb.chart.model.PathModel.prototype.generateRandomFunction = function() {
  
    var standardDeviationValue = 0.3;
    var mean = 0.1;
    var randomFunction = this.d3RandomNormal(mean, standardDeviationValue, -0.5, 0.5);
    
    return randomFunction;
   
};


lgb.chart.model.PathModel.prototype.d3RandomNormal = function(µ, σ, min, max) {
  

    var theFunction =  function() {
        var x, y, r;
        do {
            x = Math.random() * 2 - 1;
            y = Math.random() * 2 - 1;
            r = x * x + y * y;
        } while (!r || r > 1);

        rndValue = µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);

        if (rndValue > max) {
            rndValue = max;
        } else if (rndValue < min) {
            rndValue = min;
        }

        return rndValue;
    };
    
    
    return theFunction;
};



lgb.chart.model.PathModel.prototype.setTransformValue = function(transformValue) {
    
    this.transformValue = transformValue;

};



lgb.chart.model.PathModel.maxDataPoints = 500;



