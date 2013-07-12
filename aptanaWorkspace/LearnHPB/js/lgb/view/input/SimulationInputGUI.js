goog.provide('lgb.view.input.SimulationInputGUI');

goog.require('lgb.view.BaseViewGUI');
goog.require('lgb.component.TabStrip');
goog.require('lgb.component.TabStripDataSource');

lgb.view.input.SimulationInputGUI = function(dataModel) {

  this._TITLE = 'Sim';
  
  lgb.view.BaseViewGUI.call(this, dataModel);
  
};
goog.inherits(lgb.view.input.SimulationInputGUI, lgb.view.BaseViewGUI);


/**
 * @public
 */
lgb.view.input.SimulationInputGUI.prototype.init = function() {

  this.layoutID = lgb.Config.LAYOUT_ID.SimulationInputGUI;
    
  this.dataSource = new lgb.component.TabStripDataSource('simulationInputGUI-tabStrip');
  this.tabStrip1 = new lgb.component.TabStrip(this.dataSource);

  this.tabStrip1.setOptions({
    width : "100%"
  });

  this.tabTitleMap_ = {};
  
  this.triggerLocal(e.RequestAddToParentGUI);
};


lgb.view.input.SimulationInputGUI.prototype.add = function(gui) {


  var title = gui.getTitle();

  var contentElement;
  
  if (this.tabTitleMap_[title]) {
    contentElement = this.tabTitleMap_[title]
  } else {
    
    contentElement = this.tabStrip1.addTab(title);
    this.tabTitleMap_[title] = contentElement;
  }
  
  gui.inject(contentElement);
  
};


/**
 * @public
 */
lgb.view.input.SimulationInputGUI.prototype.inject = function(parentElement) {
  

  goog.base(this,  'inject', parentElement);
  
  
   var items = [
          {text: "Simulation 1", value:"1"},
          {text: "Simulation 2", value:"2"},
          {text: "Simulation 3", value:"3"},
          {text: "Simulation 4", value:"4"}
          ];
          
          
  var el = this.getMainElement();
  

  var titleDiv = el.append('<h4>Select Simulation</h4>')
    



  
};


