/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */

/**
 * @author Raj Dye - raj@rajdye.com
 */

goog.provide('lgb.component.TreeDataSource');

goog.require('lgb.component.BaseDataSource');
goog.require('lgb.events.DataModelInitialized');



lgb.component.TreeDataSource = function(objectList, propertyName, title, parentHtmlID, subID) {

  this._NAME = 'lgb.component.TreeDataSource';
  
  this.title_ = title;
  this.propertyName_ = propertyName;
  
  lgb.component.BaseDataSource.call(this);

  this.parentHtmlID = parentHtmlID;
  this.htmlID = parentHtmlID + '-' + subID;
  
  this.build_(objectList, propertyName);
  this.rootNode = this.kendoDS.data()[0];

  this.bind_();
  this.changedItems_ = [];
};
goog.inherits(lgb.component.TreeDataSource, lgb.component.BaseDataSource);



lgb.component.TreeDataSource.prototype.build_ = function(stateList, propertyName) {

  var items = [];
  
  stateList.forEach( function(val, idx) {
    items.push(
      { text:val.title,
        checked:val[propertyName],
        idx:val.idx
       }
    )
  });
  
  var rootNodeAry = [{
    text : this.title_,
    items : items,
    checked : false,
    hasChildren : true,
    id : 0,
    idx:-1
  }];

  var options = {
    data : rootNodeAry
  };

  this.kendoDS = new kendo.data.HierarchicalDataSource(options);
  this.kendoDS.read();

  var rootNode = this.kendoDS.get(0);
  rootNode.load();

};




  
  
  
lgb.component.TreeDataSource.prototype.bind_ = function() {

  this.kendoDS.bind("change", this.d(this.onChangeDS_));

};

lgb.component.TreeDataSource.prototype.getChangedItems = function() {

  return this.changedItems_;
  
}


lgb.component.TreeDataSource.prototype.onChangeDS_ = function(event) {

  if (event.field == "checked") {

    this.changedItems_ = [];
    this.view_ = this.kendoDS.view();
    
    event.items.forEach(this.d(this.processOneItem));
    
    if (this.changedItems_.length > 0) {
      
      this.changedItems_.propertyName = this.propertyName_;
      this.dispatchChange(this.changedItems_);
    }

  }

};

lgb.component.TreeDataSource.prototype.processOneItem = function(node, idx, that) {


  if (node.idx > -1) {
    
    var statusItem = {
      idx : node.idx,
      isChecked : node.checked,
      text : node.text
    };
  
    this.changedItems_.push(statusItem);
    
  }

}
