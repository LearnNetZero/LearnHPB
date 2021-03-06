goog.provide('lgb.gui.view.SimulationInputGUI');



/**
 * @constructor
 * @extends lgb.gui.view.BaseGUI
 */
lgb.gui.view.SimulationInputGUI = function(dataModel) {

  this._TITLE = 'Input';
  
  lgb.gui.view.BaseGUI.call(this, dataModel);
  this.totalHeaderHeight_ = 94;
  this.blockUpdates_ = false;
};
goog.inherits(lgb.gui.view.SimulationInputGUI, lgb.gui.view.BaseGUI);



lgb.gui.view.SimulationInputGUI.prototype.init = function() {

    this.listenForChange_('xmlParsedInfo');

    
};




lgb.gui.view.SimulationInputGUI.prototype.updateTable_ = function(realList) {
  
  this.eachIdx(realList, this.updateRow_);
  this.gridDS_.read();

};


lgb.gui.view.SimulationInputGUI.prototype.updateRow_ = function(realVo, idx) {
  
  var existingValue = this.gridDS_.options.data[idx].value;
  var newValue = realVo.value_;

  if (newValue != existingValue) {
     this.gridDS_.options.data[idx].value = newValue;
  }
   
};





lgb.gui.view.SimulationInputGUI.prototype.onChange_xmlParsedInfo_ = function(xmlParsedInfo) {
  
  
  this.realVarList_ = xmlParsedInfo.scalarVariablesAll_.input_.realVarList_;
  this.makeTable_(  this.realVarList_ );

};




lgb.gui.view.SimulationInputGUI.prototype.calculateLayout = function() {
  
  if (this.kendoGridContent_) {
    
    var p = this.getParentElement();
    var gp = p[0].parentElement;
    var paneHeight = gp.clientHeight;
    
    var contentHeight = paneHeight - this.totalHeaderHeight_;
    var cssStr = contentHeight + 'px';
    
    this.kendoGridContent_.css("height", cssStr);
  }

     

};



lgb.gui.view.SimulationInputGUI.prototype.injectInto = function(parentElement) {
  

  goog.base(this,  'injectInto', parentElement);

  
};



lgb.gui.view.SimulationInputGUI.prototype.makeTable_ = function(varList) {
  

  var ds = {
              data: varList,
              schema: {
                  model: {
                      fields: {
                          causality_: { type: "number" },
                          description_: { type: "string" },
                          idx_: { type: "number" },
                          name_: { type: "string" },
                          value_: { type: "number" },
                          "typeSpecReal_.unit": { type: "string" },
                          "typeSpecReal_.min" : { type: "number" },
                          "typeSpecReal_.max" : { type: "number" },
                          "typeSpecReal_.start" : { type: "number" },
                          valueReference_: { type: "number" },
                          variability_: { type: "number" }
                      }
                  }
              }

        };
        
    this.gridDS_ = new kendo.data.DataSource(ds);
    
    
      var el = this.getMainElement();
   
      this.kendoGrid_ = el.kendoGrid({
          dataSource: this.gridDS_,
          scrollable: true,
          sortable: true,
          filterable: false,
          columnResize: true,
          columns: [
              { field: "idx_", title: "idx" , width: "40px"},
              { field: "name_", title: "Name", width: "60px" },
              { field: "value_", title: "Value", width: "60px" },
              { field: "typeSpecReal_.unit", title: "Unit", width: "60px" },
              { field: "description_", title: "Description" , width: "140px"},
              { field: "typeSpecReal_.min", title: "Min" , width: "20px"},
              { field: "typeSpecReal_.max", title: "Max" , width: "30px"},
              { field: "typeSpecReal_.start", title: "Start" , width: "30px"},
              { field: "variability_", title: "Var" , width: "20px"}
          ]
      });
      
      
    this.kendoGridContent_ = this.kendoGrid_.find('.k-grid-content');
    this.calculateLayout();  
      
      
};







