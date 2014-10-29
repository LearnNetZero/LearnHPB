/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.chart.model.GraphGUImodel_07');
goog.require('lgb.core.BaseModel');


/**
 * @constructor
 * @extends lgb.core.BaseModel
 */
lgb.chart.model.GraphGUImodel_07 = function() {

  /**@const */
  this._TITLE = 'GraphGUImodel';


  lgb.core.BaseModel.call(this);
  this.data = [];
  


  
};
goog.inherits(lgb.chart.model.GraphGUImodel_07, lgb.core.BaseModel);




lgb.chart.model.GraphGUImodel_07.prototype.updateValues = function(integratedMainModel) {
  
  var integratedVariable = integratedMainModel.integratedVariableNameMap_['y_ZN_5'];
  var value = integratedVariable.value.getDisplayValue();
   
  
  if (value > this.y.max) {
    this.setDomainY(this.y.min, Math.ceil(value));
  }
  
  if (value < this.y.min ) {
    this.setDomainY(Math.floor(value), this.y.max);
  }


  this.data.push(value); 
  this.latestValue_ = value;
  
  this.dispatchChangedEx('data', this.data);
  
  if (this.data.length > 20) {
    this.data.shift();
  }
  
  


  return;
  
};



lgb.chart.model.GraphGUImodel_07.prototype.getLatestValue = function() {
  
  return this.latestValue_;
  
};






lgb.chart.model.GraphGUImodel_07.prototype.init = function() {
    
  this.setDomainY(5, 25);
  this.setDomainX(0, 20);

  this.randomFunction_ = this.generateRandomFunction();
  
  this.data = d3.range(this.x.max)
       .map(this.randomFunction_);

};




lgb.chart.model.GraphGUImodel_07.prototype.getDomainX = function() {
 
    return [this.x.min, this.x.max];
};


lgb.chart.model.GraphGUImodel_07.prototype.getDomainY = function() {
 
    return [this.y.min, this.y.max];
    
};



lgb.chart.model.GraphGUImodel_07.prototype.setDomainY = function(minValue, maxValue) {
    
  var rangeValue = maxValue - minValue;
  var meanValue = minValue + (rangeValue / 2);
  
  this.y = {
    max:maxValue,
    min:minValue,
    mean:meanValue,
    range:rangeValue
  };
  
  this.dispatchChangedEx('y', this.y);
  
  return;
};



lgb.chart.model.GraphGUImodel_07.prototype.setDomainX = function(minValue, maxValue) {
    
  var rangeValue = maxValue - minValue;
  var meanValue = minValue + (rangeValue / 2);
  
  this.x = {
    max:maxValue,
    min:minValue,
    mean:meanValue,
    range:rangeValue,
  };
  
  this.dispatchChangedEx('x', this.x);
  
  return;
};


lgb.chart.model.GraphGUImodel_07.prototype.generateRandomFunction = function() {
  
    var standardDeviationValue = this.y.range * 0.3;
    var randomFunction = this.d3RandomNormal(this.y.mean, standardDeviationValue, this.y.min, this.y.max);
    
    return randomFunction;
   
};


lgb.chart.model.GraphGUImodel_07.prototype.d3RandomNormal = function(µ, σ, min, max) {
  

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
