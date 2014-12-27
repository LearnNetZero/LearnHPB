/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2014 Institute for Sustainable Performance of Buildings (Superb)
 */
 
goog.provide('lgb.scenario.model.tag.Real');
goog.require('lgb.scenario.model.tag.NodeBase');



/**
 * @constructor
 * @extends lgb.core.BaseModel
 * @param {!lgb.utils.XmlWrapper} xmlParser The parse used
 * to populate the object, contains an xml document.
 */
lgb.scenario.model.tag.Real = function(node) {

  lgb.scenario.model.tag.NodeBase.call(this, node);
  
};
goog.inherits(lgb.scenario.model.tag.Real, lgb.scenario.model.tag.NodeBase);



lgb.scenario.model.tag.Real.attributeMap = {

    "min" : {
        classReference:lgb.scenario.model.attribute.Real,
        isRequired:false,
        defaultValue: 0.0
    },
    "max" : {
        classReference:lgb.scenario.model.attribute.Real,
        isRequired:false,
        defaultValue: 999.0
    },
    "start" : {
        classReference:lgb.scenario.model.attribute.Real,
        isRequired:false,
        defaultValue: 1.0
    }
    
    
};




