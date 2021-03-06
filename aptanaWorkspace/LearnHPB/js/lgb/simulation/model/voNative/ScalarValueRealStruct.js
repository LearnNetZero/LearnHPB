goog.provide('lgb.simulation.model.voNative.ScalarValueRealStruct');


goog.require('lgb.simulation.model.BaseModel');


 /**
 * @constructor
 */
lgb.simulation.model.voNative.ScalarValueRealStruct = function(idx, value) {

  this.idx = idx;
  this.value = value;
  lgb.simulation.model.BaseModel.call(this);
};

goog.inherits(lgb.simulation.model.voNative.ScalarValueRealStruct, lgb.simulation.model.BaseModel);


lgb.simulation.model.voNative.ScalarValueRealStruct.fieldPrimitivesEx_ = {
   idx: "i",
   value : "v"
};


