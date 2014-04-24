goog.provide('lgb.simulation.model.voManaged.ScalarValueResults');

goog.require('lgb.simulation.model.BaseModel');
goog.require('lgb.simulation.model.voManaged.ScalarValueCollection');



lgb.simulation.model.voManaged.ScalarValueResults = function() {


};
goog.inherits(lgb.simulation.model.voManaged.ScalarValueResults, lgb.simulation.model.BaseModel);



lgb.simulation.model.voManaged.ScalarValueResults.prototype.getTime = function() {
    return this.time_;
};


lgb.simulation.model.voManaged.ScalarValueResults.prototype.getInput = function() {
    return this.input;
};


lgb.simulation.model.voManaged.ScalarValueResults.prototype.getOutput = function() {
    return this.output;
};




lgb.simulation.model.voManaged.ScalarValueResults.fieldObjectsEx_ = {
  
   input: {
     jsonFieldName : "input",
     classReference : lgb.simulation.model.voManaged.ScalarValueCollection
   },
   output: {
     jsonFieldName : "output",
     classReference : lgb.simulation.model.voManaged.ScalarValueCollection
   },
       
};


lgb.simulation.model.voManaged.ScalarValueResults.fieldPrimativesEx_ = {
   time_: "time_" 
};
